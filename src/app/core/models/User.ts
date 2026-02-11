export interface User {
  username: string;
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  title?: string;
  company?: string;
  location?: string;
  phone?: string;
  avatarUrl?: string;
  skills?: string[];
  yearsOfExperience?: number;
  linkedIn?: string;
  github?: string;
  website?: string;
}

export interface UserProfile extends User {
  createdAt?: Date;
  updatedAt?: Date;
}
