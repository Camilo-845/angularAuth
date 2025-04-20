import {
  ChangeDetectionStrategy,
  Component,
  input,
  inject,
} from '@angular/core';
import { Character } from '../../models';
import { CharacterService } from '../../services';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent {
  character = input.required<Character>();

  characterService = inject(CharacterService);

  deleteCharacter(characterId: number) {
    this.characterService.deleteCharacter(characterId);
  }
}
