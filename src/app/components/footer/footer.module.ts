import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(FooterComponent, {
      injector: this.injector,
    });

    customElements.get('x-app-footer') ||
      customElements.define('x-app-footer', element);
  }
}
