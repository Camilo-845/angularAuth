import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../models';
import { CharacterDetailsComponent } from '../character-details/character-details.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterDetailsComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
}
