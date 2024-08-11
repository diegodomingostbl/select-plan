import { Component } from '@angular/core';
import { Plan } from './interfaces/plan.interface';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css',
})
export class PlansComponent {
  plans: Plan[] = [
    {
      name: 'Basic',
      type: 1,
      price: 49.9,
      benefits: [
        'Acesso básico a todas as funcionalidades',
        'Suporte por e-mail',
        'Atualizações mensais',
        'Relatórios simples',
      ],
    },
    {
      name: 'Silver',
      type: 2,
      price: 79.9,
      benefits: [
        'Acesso básico a todas as funcionalidades',
        'Suporte por e-mail e chat ao vivo',
        'Atualizações semanais',
        'Relatórios detalhados',
        'Acesso a webinars exclusivos',
      ],
    },
    {
      name: 'Gold',
      type: 3,
      price: 99.9,
      benefits: [
        'Acesso completo a todas as funcionalidades',
        'Suporte prioritário por telefone, e-mail e chat ao vivo',
        'Atualizações diárias',
        'Relatórios avançados com análise',
        'Acesso a webinars e workshops exclusivos',
        'Consultoria personalizada mensal',
        'Descontos em futuros upgrades e produtos',
      ],
    },
  ];
}
