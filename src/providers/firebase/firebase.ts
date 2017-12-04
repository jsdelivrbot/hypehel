import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) { }

  addItem(name) {
    this.afd.list('/contacts/').push(name);
  }

}
