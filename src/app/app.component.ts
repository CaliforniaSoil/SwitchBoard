import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SwitchBoard';
  boolean = [
    true,
    false,
    false, 
    true,
    false,
    true, 
    true, 
    false,
    true,
    true
  ];
  words = [
    'on',
    'off',
    'off',
    'on',
    'off',
    'on',
    'on',
    'off',
    'on',
    'on'
  ];

  button(idx) {
    this.boolean[idx] = this.boolean[idx] != true;
    if(this.boolean[idx]){
      this.words[idx] = 'on';
    } else {
      this.words[idx] = 'off';
    };
  };
};
