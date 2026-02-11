import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
import { UserProfile } from '../../models/User';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  userProfile: UserProfile | null = null;
  private subscription: Subscription = new Subscription();

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.profileService.getProfile().subscribe(profile => {
        this.userProfile = profile;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
