import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(CardComponent, {
      injector: this.injector,
    });

    customElements.get('x-app-card') ||
      customElements.define('x-app-card', element);
  }
}
