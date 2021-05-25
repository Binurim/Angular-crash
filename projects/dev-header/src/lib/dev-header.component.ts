import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dev-header',
  template: `
    <p>
      dev-header works!
    </p>
  `,
  styles: [
  ]
})
export class DevHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
