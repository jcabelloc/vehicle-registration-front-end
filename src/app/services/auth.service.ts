import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }

  getToken(){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.currentUser.getIdToken(/* forceRefresh */ true)
        .then(userToken => resolve(userToken),
        err => reject(err));
    });
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
