import { Injectable } from '@angular/core';
import {AppStateModel} from '../../model/appState.model';
import {AuthStateModel} from '../../model/authState.model';

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
  public authState: AuthStateModel={
    isAuthenticated: false,
    username: "",
    roles: [],
    token: ""
  };
  constructor() { }

  public setAppState(state: any): void {
    this.appState= {...this.appState, ...state};
  }

  public setAuthState(state: any): void {
    this.authState= {...this.authState, ...state};
  }
}
