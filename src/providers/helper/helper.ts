import { Key } from './../../interfaces/key';
import { Persona } from './../../interfaces/persona';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastController, LoadingController } from 'ionic-angular';

@Injectable()
export class HelperProvider {

  constructor(  public http: HttpClient,
                private loadingCtrl: LoadingController,
                private toastCtrl: ToastController ) {
    console.log('Hello HelperProvider Provider');
  }

  createLoad()  {
    return this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Carregando...'
    });
  }

  persistAlert(message) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      closeButtonText: 'Ok!',
      showCloseButton: true
    });
    toast.present();
  }

  timeAlert(message) {
    let toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  sumKeys(persona: Persona, keys: Key[]) {
    let total: number = 0;
    for(let key of keys) {
      total += persona[key.name];
    }
    return total;
  }

}
