import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BookPage } from '../book/book';
import { TuktukSearch } from '../tuktuk-search/tuktuk-search';
import { MorePage } from '../more/more';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = BookPage;
  tab4Root: any = TuktukSearch;
  tab5Root: any = MorePage;

  constructor() {

  }
}
