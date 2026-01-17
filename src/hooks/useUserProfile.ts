import { useState, useEffect } from 'react';
import { mockUser, type User } from '../data/mockUser';

interface UseUserProfileReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
  updateUser: (updates: Partial<User>) => void;
}

export function useUserProfile(): UseUserProfileReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 300));
        setUser(mockUser);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = (updates: Partial<User>): void => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return {
    user,
    loading,
    error,
    updateUser,
  };
}

