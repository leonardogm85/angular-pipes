import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { CamelCasePipe } from './shared/camel-case.pipe';
import { ArrayFilterPurePipe } from './shared/array-filter-pure.pipe';
import { ArrayFilterImpurePipe } from './shared/array-filter-impure.pipe';
import { SettingsService } from './shared/settings.service';

import '@angular/common/locales/global/pt';

@NgModule({
  declarations: [
    AppComponent,
    PipeExamplesComponent,
    CamelCasePipe,
    ArrayFilterPurePipe,
    ArrayFilterImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SettingsService,

    // LOCALE_ID -> Use value
    // { provide: LOCALE_ID, useValue: 'pt' },

    // LOCALE_ID -> Use Factory
    { provide: LOCALE_ID, deps: [SettingsService], useFactory: (settingsService: SettingsService) => settingsService.getLocale() },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
