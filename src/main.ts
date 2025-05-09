<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6a38167a0784fa5dad811e1c88df6a98e7a373d6
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
<<<<<<< HEAD
=======
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
>>>>>>> master
=======
>>>>>>> 6a38167a0784fa5dad811e1c88df6a98e7a373d6
