import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-benefits',
  templateUrl: './plan-benefits.component.html',
  styleUrl: './plan-benefits.component.css',
})
export class PlanBenefitsComponent {
  @Input() type!: number;
  @Input() benefits!: string[];
}
