import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _translate: TranslateService,
    private menu: MenuController
  ) {
    this.initializeApp();

    let userLang = navigator.language.split('-')[0];
    // userLang = /(en|de|it|fr|es|be)/gi.test(userLang) ? userLang : 'es';
    userLang = /(es|en)/gi.test(userLang) ? userLang : 'es';
    this._translate.use(userLang);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  cerrar(){
    this.menu.close('first');
  }

}
