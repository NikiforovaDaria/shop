import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantsService } from 'src/app/core/services/constants.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Random_String, RandomStringFactory } from 'src/app/core/services/random-string-factory';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [
    GeneratorService,
    { provide: Random_String, useFactory: RandomStringFactory(12), deps: [GeneratorService] }
  ]
})
export class ContactUsComponent implements OnInit {

  products: Array<any> = [1, 2, 3, 4];

  constructor(
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constantsService: ConstantsService,
    @Optional() private generatorService: GeneratorService,
    @Optional() private localStorageService: LocalStorageService,
    @Inject(Random_String) private randomString: any[]
  ) { }

  ngOnInit() {
    const configOptionsService = this.configOptionsService.get();
    const constantsService = this.constantsService;
    const generatorService = this.randomString;
    const localStorageService = this.localStorageService.get();

    console.log('configOptionsService', configOptionsService);
    console.log('constantsService', constantsService);
    console.log('generatorService', generatorService);
    console.log('localStorageService', localStorageService);
  }
}
