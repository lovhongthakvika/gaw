import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BookPage } from '../pages/book/book';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TuktukSearch } from '../pages/tuktuk-search/tuktuk-search';
import { MorePage } from '../pages/more/more';
@NgModule({
  declarations: [
    MyApp,
    BookPage,
    HomePage,
    TabsPage,
    TuktukSearch,
    MorePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookPage,
    HomePage,
    TabsPage,
    TuktukSearch,
    MorePage
  ],
  providers: []
})
export class AppModule {}
