// utils/api.ts
import { auth } from "../lib/firebase";


// Default API URL if environment variable is not set
const DEFAULT_API_URL = 'http://localhost:3001';
const RAW_API_URL = (process.env.NEXT_PUBLIC_API_URL as unknown as string) as string;
const API_BASE = 'http://localhost:3001'
// (
//   RAW_API_URL && RAW_API_URL !== 'undefined' && RAW_API_URL !== 'null'
//     ? RAW_API_URL
//     : DEFAULT_API_URL
// ).replace(/\/+$/, '');

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

      const isFormData = typeof FormData !== 'undefined' && init.body instanceof FormData;
      let normalizedPath = path.startsWith('/') ? path : `/${path}`;
      // Auto-correct common mistakes: missing /api prefix or accidental undefined
      if (/^\/(events|login|signup)(\b|\/)/i.test(normalizedPath)) {
        normalizedPath = `/api${normalizedPath}`;
      }
      normalizedPath = normalizedPath.replace(/^\/undefined(\/|$)/i, '/api/');
      const url = `${API_BASE}${normalizedPath}`;

      console.log("type of window is not 'undefined' ppppppppp ", typeof window !== "undefined" );
      console.log("defineddddd RAW_API_URL ppppppppp", RAW_API_URL ,"API_BASE", API_BASE , "normalizedPath" , normalizedPath ,"url" , url )
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-console
        console.debug('[apiFetch] URL', { RAW_API_URL, API_BASE, normalizedPath, url });


      }
      const res = await fetch(url, {
        ...init,
        signal: controller.signal,
        headers: {
          ...(isFormData ? {} : { "Content-Type": "application/json", "Accept": "application/json" }),
          ...(init.headers || {}),
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}: ${res.statusText}`);
      }
      
      // If it's a 204 or no content, return null
      const contentType = res.headers.get('Content-Type') || '';
      if (!contentType || res.status === 204) return null;
      if (contentType.includes('application/json')) return res.json();
      return res.text();
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

// Helper for uploads with FormData
export const apiUpload = (path: string, formData: FormData) => 
  apiFetch(path, { method: 'POST', body: formData });
