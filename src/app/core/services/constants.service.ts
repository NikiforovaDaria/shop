import { Injectable, Inject, InjectionToken } from '@angular/core';

import { ConfigOptionsService } from './config-options.service';

const APP = new InjectionToken<string>('app');
const congOpt = new ConfigOptionsService();

@Injectable({
  providedIn: 'root',
  useValue: {
    App: "TaskManager",
    Ver: "1.0"
  }
})
export class ConstantsService {
  constructor( ) {}
}
