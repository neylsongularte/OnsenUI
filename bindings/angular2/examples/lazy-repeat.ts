import {
  Component,
  OnsLazyRepeat,
  ViewChild,
  OnInit,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from '../src/ngx-onsenui';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  template: `
  <ons-page class="page">
    <ons-toolbar>
      <div class="left"></div>
      <div class="center">Lazy Repeat</div>
      <div class="right"><ons-toolbar-button (click)="add()">Add</ons-toolbar-button></div>
    </ons-toolbar>

    <div class="background"></div>
    <div class="content">
      <ons-list>
        <ons-list-item id="item-{{ i }}" *onsLazyRepeat="let item of items; let i = index">
          <div class="center">
            #{{i}} msg: {{item.msg}}
          </div>
        </ons-list-item>
      </ons-list>
    </div>
  </ons-page>
  `
})
export class AppComponent {
  public items: any[];

  @ViewChild(OnsLazyRepeat, {static: false}) lazyRepeat: OnsLazyRepeat;

  constructor() {
    this.items = [];
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        msg: 'Hello!'
      });
    }
  }

  add() {
    this.items.unshift({
      msg: 'Bonjour!'
    });
    this.lazyRepeat.refresh();
  }
}

@NgModule({
  imports: [OnsenModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
