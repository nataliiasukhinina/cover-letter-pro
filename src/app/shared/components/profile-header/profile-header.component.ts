import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { ProfileService } from '../../../core/services/profile.service';
import { UserProfile } from '../../../core/models/User';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit, OnDestroy {
  userProfile: UserProfile | null = null;
  initials: string = '';
  isDropdownOpen: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.profileService.getProfile().subscribe(profile => {
        this.userProfile = profile;
        if (profile) {
          this.initials = this.profileService.getInitials(
            profile.firstName,
            profile.lastName,
            profile.username
          );
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  navigateToProfile(): void {
    this.closeDropdown();
    this.router.navigate(['/profile']);
  }

  navigateToSettings(): void {
    this.closeDropdown();
    this.router.navigate(['/settings']);
  }

  onLogout(): void {
    this.closeDropdown();
    this.authService.signOut();
  }
}
