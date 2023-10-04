import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  getLocale(): string {
    return 'pt';
  }

}
