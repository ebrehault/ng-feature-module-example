import { Injectable } from '@angular/core';

import { ConfigurationService } from './configuration.service';

@Injectable()
export class ManagerService {

  constructor(private config: ConfigurationService) {
  }

  doSomething() {
    return this.config.getStuff();
  }

}
