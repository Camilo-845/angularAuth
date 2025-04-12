import { Injectable } from '@angular/core';

export enum localKeys {
  token = "token"
}

@Injectable({
  providedIn: 'root'
})

export class LocalManagerService {
  static getElement(key: localKeys): string | null {
    return localStorage.getItem(key)
  }

  static setElement(key: localKeys, value: string): void {
    localStorage.setItem(key, value)
  }

  static clearStorage(): void {
    localStorage.clear()
  }
}
