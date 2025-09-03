// utils/api.ts
import { auth } from "../lib/firebase";

// Default API URL if environment variable is not set
const DEFAULT_API_URL = 'http://localhost:8080';
const API_URL = process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL;

// Retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// Helper function to delay execution
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiFetch = async (path: string, init: RequestInit = {}) => {
  const user = auth.currentUser;
  const token = user ? await user.getIdToken(/* forceRefresh? */ false) : null;

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const res = await fetch(`${API_URL}${path}`, {
        ...init,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          ...(init.headers || {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}: ${res.statusText}`);
      }
      
      return res.json();
    } catch (error) {
      lastError = error as Error;
      
      // Don't retry on certain errors
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout');
        }
        if (error.message.includes('HTTP 4')) {
          // Don't retry client errors (4xx)
          throw error;
        }
      }

      // If this is the last attempt, throw the error
      if (attempt === MAX_RETRIES) {
        console.error(`API request failed after ${MAX_RETRIES} attempts:`, error);
        throw error;
      }

      // Wait before retrying
      console.warn(`API request failed (attempt ${attempt}/${MAX_RETRIES}), retrying in ${RETRY_DELAY}ms...`);
      await delay(RETRY_DELAY * attempt); // Exponential backoff
    }
  }

  throw lastError || new Error('Unknown error occurred');
};

// Specific API functions for better error handling
export const apiGet = (path: string) => apiFetch(path, { method: 'GET' });

export const apiPost = (path: string, data: any) => 
  apiFetch(path, { 
    method: 'POST', 
    body: JSON.stringify(data) 
  });

export const apiPut = (path: string, data: any) => 
  apiFetch(path, { 
    method: 'PUT', 
    body: JSON.stringify(data) 
  });

export const apiDelete = (path: string) => 
  apiFetch(path, { method: 'DELETE' });
