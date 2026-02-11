import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
import { UserProfile } from '../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileForm!: FormGroup;
  userProfile: UserProfile | null = null;
  isEditing: boolean = false;
  isSaving: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadProfile();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initializeForm(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: [''],
      company: [''],
      location: [''],
      phone: [''],
      bio: ['', Validators.maxLength(500)],
      yearsOfExperience: [0, [Validators.min(0), Validators.max(50)]],
      linkedIn: [''],
      github: [''],
      website: ['']
    });
  }

  loadProfile(): void {
    this.subscription.add(
      this.profileService.getProfile().subscribe(profile => {
        this.userProfile = profile;
        if (profile) {
          this.profileForm.patchValue({
            firstName: profile.firstName || '',
            lastName: profile.lastName || '',
            email: profile.email || '',
            title: profile.title || '',
            company: profile.company || '',
            location: profile.location || '',
            phone: profile.phone || '',
            bio: profile.bio || '',
            yearsOfExperience: profile.yearsOfExperience || 0,
            linkedIn: profile.linkedIn || '',
            github: profile.github || '',
            website: profile.website || ''
          });
        }
      })
    );
  }

  toggleEdit(): void {
    if (this.isEditing) {
      this.loadProfile(); // Reset form if canceling
    }
    this.isEditing = !this.isEditing;
  }

  onSaveProfile(): void {
    if (this.profileForm.valid && !this.isSaving) {
      this.isSaving = true;
      const updatedProfile = {
        ...this.userProfile,
        ...this.profileForm.value
      };

      this.subscription.add(
        this.profileService.updateProfile(updatedProfile).subscribe(
          (profile) => {
            this.userProfile = profile;
            this.isEditing = false;
            this.isSaving = false;
          },
          (error) => {
            console.error('Error updating profile:', error);
            this.isSaving = false;
          }
        )
      );
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const avatarUrl = e.target?.result as string;
        this.profileService.updateAvatar(avatarUrl).subscribe(
          profile => {
            this.userProfile = profile;
          }
        );
      };
      
      reader.readAsDataURL(file);
    }
  }

  hasError(control: string, errorCode: string): boolean {
    return !!(
      this.profileForm.get(control)?.touched &&
      this.profileForm.get(control)?.hasError(errorCode)
    );
  }

  getInitials(): string {
    return this.profileService.getInitials(
      this.userProfile?.firstName,
      this.userProfile?.lastName,
      this.userProfile?.username
    );
  }
}
