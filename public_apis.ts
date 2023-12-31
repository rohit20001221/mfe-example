import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { CardModule } from 'src/app/components/card/card.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';

enableProdMode();

export const bootstrapWebComponents = () => {
  const platform = platformBrowser();

  platform.bootstrapModule(HeaderModule, { ngZone: 'noop' });
  platform.bootstrapModule(FooterModule, { ngZone: 'noop' });
  platform.bootstrapModule(CardModule, { ngZone: 'noop' });
};
