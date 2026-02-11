import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, UserProfile } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private currentProfileSubject: BehaviorSubject<UserProfile | null>;
  public currentProfile: Observable<UserProfile | null>;

  // Mock profile data - in real app this would come from backend
  private mockProfile: UserProfile = {
    id: '1',
    username: 'Nataliia',
    firstName: 'Nataliia',
    lastName: 'Sukhinina',
    email: 'nataliia@example.com',
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    bio: 'Passionate Frontend Developer with 7 years of experience in Angular. I specialize in building scalable web applications and love exploring new technologies like AWS and AI.',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
    yearsOfExperience: 7,
    skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'AWS', 'Material Design', 'REST APIs', 'Git'],
    linkedIn: 'https://www.linkedin.com/in/natashasukhinina/',
    github: 'https://github.com/nataliiasukhinina',
    website: 'https://nataliia-portfolio.dev',
    avatarUrl: '',
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date()
  };

  constructor() {
    this.currentProfileSubject = new BehaviorSubject<UserProfile | null>(this.mockProfile);
    this.currentProfile = this.currentProfileSubject.asObservable();
  }

  public get currentProfileValue(): UserProfile | null {
    return this.currentProfileSubject.value;
  }

  getProfile(): Observable<UserProfile | null> {
    return this.currentProfile;
  }

  updateProfile(profile: Partial<UserProfile>): Observable<UserProfile> {
    const updatedProfile = {
      ...this.currentProfileSubject.value,
      ...profile,
      updatedAt: new Date()
    } as UserProfile;
    
    this.currentProfileSubject.next(updatedProfile);
    this.mockProfile = updatedProfile;
    
    return of(updatedProfile);
  }

  updateAvatar(avatarUrl: string): Observable<UserProfile> {
    return this.updateProfile({ avatarUrl });
  }

  getInitials(firstName?: string, lastName?: string, username?: string): string {
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    } else if (username) {
      return username.substring(0, 2).toUpperCase();
    }
    return 'U';
  }
}
