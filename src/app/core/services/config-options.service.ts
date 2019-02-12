import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  configOptions: {
    id: number,
    email: string,
    login: string
  } = {
    id: 1,
    email: 'dNikiforova@gmail.com',
    login: 'dNikiforova'
  }

  constructor() { }

  get () {
    return this.configOptions;
  }
  set(data: any){
    Object.assign(this.configOptions, data)
  }
}
