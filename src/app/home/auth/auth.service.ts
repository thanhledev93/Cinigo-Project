import * as firebase from 'firebase';
import Swal from 'sweetalert2';
export class AuthService {
  token: string;
  constructor() {}
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      response => {
        // Alert popup
        Swal({
          position: 'top-end',
          type: 'success',
          title: 'Đăng ký thành công',
          showConfirmButton: false,
          timer: 1500
        });
      }
    ).catch(
      error => {
        Swal({
          position: 'top-end',
          type: 'error',
          title: 'Đăng ký không thành công'
        });
      }
    );
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              this.token = token;
              console.log(token);
            }
          );

        ///// Alert Popup
        const toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        toast({
          type: 'success',
          title: 'Đăng nhập thành công'
        });
      }
    ).catch(
      error => {
        const toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        toast({
          type: 'error',
          title: 'Đăng nhập không thành công'
        });
      }
    );
  }

  logOut() {
   firebase.auth().signOut();
   this.token = null;
  }
  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => {
        this.token = token;
      }
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
