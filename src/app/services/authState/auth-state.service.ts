import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private userState = new BehaviorSubject<boolean | undefined>(this.token.isLoggedIn());
  userAuthState = this.userState.asObservable();

  constructor(public token: TokenService) { }

  setAuthState(value: boolean) {
    this.userState.next(value);
  }
  
}