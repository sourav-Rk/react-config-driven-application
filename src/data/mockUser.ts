export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  bio?: string;
  joinDate: string;
}

export const mockUser: User = {
  id: 1,
  name: 'Sourav k',
  email: 'sourav@gmail.com',
  role: 'Software Developer',
  bio: 'Passionate developer with expertise in React and TypeScript. Love building scalable applications.',
  joinDate: '2024-01-15',
};

