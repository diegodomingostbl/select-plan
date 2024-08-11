import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-price',
  templateUrl: './plan-price.component.html',
  styleUrl: './plan-price.component.css',
})
export class PlanPriceComponent {
  @Input() price!: number;
}
