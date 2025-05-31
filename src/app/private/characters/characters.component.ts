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
  characters = computed(() => {
    const eventsMap = this.characterService.state().characters;
    return Array.from(eventsMap.values());
  });

  constructor() {
    this.characterService.getCharacters();
  }
}
