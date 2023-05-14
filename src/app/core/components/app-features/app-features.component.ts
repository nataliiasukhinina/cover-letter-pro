import { Component } from '@angular/core';
import {appFeaturesList} from "./app-features.constants";

@Component({
  selector: 'demo-app-features',
  templateUrl: './app-features.component.html'
})
export class AppFeaturesComponent {

  appFeatures = appFeaturesList;

}
