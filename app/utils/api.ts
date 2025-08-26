// utils/api.ts
import { auth } from "../app/lib/firebase";

export const apiFetch = async (path: string, init: RequestInit = {}) => {
  const user = auth.currentUser;
  const token = user ? await user.getIdToken(/* forceRefresh? */ false) : null;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
};
