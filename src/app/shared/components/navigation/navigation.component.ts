import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'demo-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  user: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      (response) => {
        this.user = response.username;
      }
    );
  }
}
