import { Component } from '@angular/core';
import {AppStateService} from '../services/app-state.service';

@Component({
  selector: 'app-errors',
  standalone: false,
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.css'
})
export class ErrorsComponent {
  constructor(public stateService: AppStateService) {
  }

}
