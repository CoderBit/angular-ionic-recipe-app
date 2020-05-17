import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  onLogin(email, password) {
    this.isLoading = true;
    this.loadingCtrl.create({keyboardClose: true, message: 'Logging In...'})
    .then(loadingEl => {
      loadingEl.present();
      this.authService.login(email, password).subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        },
        errData => {
          loadingEl.dismiss();
          console.log(errData);
          this.showAlert('Username or password incorrect.');
        }
      );
    });
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLogin) {
      // send a req to login server
      this.onLogin(email, password);
    } else {
      // send a req to signup server
    }
  }

  showAlert(message: string) {
    this.alertCtrl.create({
      header: 'Authentication Failed!',
      message,
      buttons: ['Ok']
    })
    .then(el => el.present());
  }

}
