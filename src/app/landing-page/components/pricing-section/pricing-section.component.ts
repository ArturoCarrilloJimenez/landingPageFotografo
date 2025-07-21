import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardPricingComponent } from "../../../shared/components/";

@Component({
  selector: 'landing-page-pricing-section',
  imports: [CardPricingComponent],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSectionComponent { }
