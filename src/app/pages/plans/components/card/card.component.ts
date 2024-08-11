import { Component, Input } from '@angular/core';
import { Plan } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() plan!: Plan;
}
