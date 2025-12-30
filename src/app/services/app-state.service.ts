import { Injectable } from '@angular/core';
import {AppStateModel} from '../../model/appState.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public appState: AppStateModel={
    products: [],
    keyword: "",
    currentPage: 1,
    size: 3,
    totalPages: 0,
    totalCount: 0,
    status: "",
    errorMessage: "",
  };
  constructor() { }

  public setAppState(state: any): void {
    this.appState= {...this.appState, ...state};
  }
}
