import { GeneratorService } from './generator.service';

export let generatorServiceProvider = (length: number): any => {
  return new GeneratorService(length);
}

//  let generatorServiceProvider = {
//   provide: GeneratorService,
//   useFactory: generatorServiceFactory
// }
