import { Component, Inject, Optional } from '@angular/core';

import { ConfigOptionsService, ConstantService, Generated, LocalStorageService } from '../../core';

@Component({
  selector: 'sh-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor(
    @Optional() private constants: ConstantService,
    @Optional() private config: ConfigOptionsService,
    @Optional() @Inject(localStorage) private localStorage: LocalStorageService,
    @Optional() @Inject(Generated) private randomValue: string
  ) {
    console.log('Constants: ', this.constants);

    // this.config.settings = { id: 1, email: 'test@email.com' };
    // console.log('Config options: ', this.config.settings);

    console.log('Generated by factory: ', this.randomValue);

    // this.localStorage.setItem('user', this.config.settings);
    // console.log('User from LS: ', this.localStorage.getItem('user'));
  }
}
