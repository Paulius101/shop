import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  private _token?: string;

  constructor(private http: HttpClient, private router: Router) {
    this._token = window.sessionStorage.getItem("token") || undefined;
  }

  public get token(): string | undefined {
    return this._token;
  }

  public setToken(token?: string): void {
    this._token = token;

    if (token)
      window.sessionStorage.setItem("token", token);
    else
      window.sessionStorage.removeItem("token");
  }

  public get isLoggedIn(): boolean {
    return !!this._token;
  }

  public registerUser(user: User): Observable<Object> {
    return this.http.post("http://localhost:3000/api/user/register", user);
  }

  public login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>("http://localhost:3000/api/user/login", user);
  }

  public logout(): void {
    this.setToken(undefined);

    this.router.navigate(["login"]);
  }
}

export interface LoginResponse {
  token: string;
  msg: string;
}