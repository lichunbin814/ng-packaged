import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// it's work
// import { BarService } from '../../dist/my-lib/';

// it's not work
import { BarService } from '../../dist/my-lib/bar/bar.service';

@Component({
  selector: 'app-root',
  template: `
<my-foo></my-foo>
<hr>
<marquee>{{ value$ | async }}</marquee>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value$: Observable<string>;

  constructor (
    bar: BarService
  ) {
     this.value$ = bar.value;
  }

}
