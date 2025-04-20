import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { CharacterService } from './services';
import { CharacterListComponent } from './components';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  characterService = inject(CharacterService);
  characters = computed(() =>
    Array.from(this.characterService.state().characters).map((elem) => {
      const [, value] = elem;
      return value;
    }),
  );

  constructor() {
    this.characterService.getCharacters();
  }
}
