interface tokenContainer {
  token: string;
}

export interface LoginResponse extends tokenContainer {

}

export interface Auth extends tokenContainer {

}

export interface AuthData {
  email: string,
  password: string
}
