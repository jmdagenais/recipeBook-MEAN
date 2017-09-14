import {Action} from '@ngrx/store';

export const TRY_SIGNIN: string = 'TRY_SIGNIN';
export const SIGNIN: string = 'SIGNIN';
export const TRY_SIGNUP: string = 'TRY_SIGNUP';
export const SIGNUP: string = 'SIGNUP';
export const LOGOUT: string = 'LOGOUT';
export const SET_TOKEN: string = 'SET_TOKEN';

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: {username: string, password: string}) {}
}

export class Signup implements Action {
  readonly type = SIGNUP
}

export class TrySignin implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: {username: string, password: string}) {}
}

export class Signin implements Action {
  readonly type = SIGNIN
}

export class Logout implements Action {
  readonly type = LOGOUT
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions =
  Signup |
  Signin |
  Logout |
  SetToken |
  TrySignup |
  TrySignin;
