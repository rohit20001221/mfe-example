import { CommonModule } from '@angular/common';
import { DoBootstrap, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const element = createCustomElement(HeaderComponent, {
      injector: this.injector,
    });

    customElements.get('x-app-header') ||
      customElements.define('x-app-header', element);
  }
}
