import { inject, Injectable, signal } from '@angular/core';
import { Character, Status } from '../models';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  state = signal({
    characters: new Map<number, Character>(),
  });

  baseUrl = 'http://localhost:8081/characters';
  http = inject(HttpClient);

  getCharacters() {
    this.http
      .get<Character[]>(this.baseUrl)
      .pipe(
        catchError((error) => {
          console.error(error);
          return [
            [
              {
                id: 1,
                name: 'Pedro',
                status: Status.UNKNOWN,
              },
            ] as Character[],
          ];
        }),
      )
      .subscribe((result) => {
        this.state.update((state) => {
          result.forEach((elem) => {
            state.characters.set(elem.id, elem);
          });
          return { ...state };
        });
      });
  }
  editCharacter(character: Character) {
    this.http
      .put(`${this.baseUrl}/${character.id}`, character)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of({ status: 200 });
        }),
      )
      .subscribe(() => {
        this.state.update((state) => {
          if (state.characters.has(character.id)) {
            state.characters.set(character.id, character);
          }
          return { ...state };
        });
      });
  }
  deleteCharacter(characterId: number) {
    this.http
      .delete(`${this.baseUrl}/${characterId}`)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of({ status: 200 });
        }),
      )
      .subscribe(() => {
        this.state.update((state) => {
          state.characters.delete(characterId);
          return { ...state };
        });
      });
  }
  addCharacter(character: Character) {
    this.http
      .post<Character>(this.baseUrl, character)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of({ status: 200 });
        }),
      )
      .subscribe(() => {
        this.state.update((state) => {
          state.characters.set(character.id, character);
          return { ...state };
        });
      });
  }
}
