import { NgModule } from '@angular/core';
import { PlansComponent } from './plans/plans.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { CardComponent } from './plans/components/card/card.component';
import { PlanPriceComponent } from './plans/components/plan-price/plan-price.component';
import { PlanBenefitsComponent } from './plans/components/plan-benefits/plan-benefits.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PlansComponent,
    CardComponent,
    PlanPriceComponent,
    PlanBenefitsComponent,
  ],
  imports: [SharedComponentsModule, FormsModule, CommonModule],
  exports: [PlansComponent],
})
export class PagesModule {}
