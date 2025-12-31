import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import {AppStateService} from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private stateService: AppStateService) { }
  async login(username: string, password: string) {
    let user:any= await firstValueFrom(this.http.get(`http://localhost:8085/users/${username}`));
    if(atob(user.password) == password){  // on ne fait jamais ça en réalité c'est seulement pour cette exemple
      let decodedjwt: any = jwtDecode(user.token);// firstValue pour transformer observable en promisse
      this.stateService.setAuthState({
        isAuthenticated: true,
        username: decodedjwt.sub,
        roles: decodedjwt.roles,
        token: decodedjwt.token,
      });
      return Promise.resolve(true);
    }else{
      return Promise.reject("Bad credentials ");
    }

  }
}
