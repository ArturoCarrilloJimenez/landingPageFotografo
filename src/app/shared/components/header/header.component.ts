import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'shared-header',
  imports: [],
  template: `<div class="container mx-auto px-4 pb-10">
    <h2 class="text-4xl font-semibold pb-6 md:text-5xl">{{ title() }}</h2>
    <p>{{ description() }}</p>
  </div>`,
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  title = input.required<string>();
  description = input<string>('');
}
