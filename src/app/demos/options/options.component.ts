import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  public options: Select2Options;

  ngOnInit() {
    this.exampleData = [
      {
        id: 'opt1',
        text: 'Options 1'
      },
      {
        id: 'opt2',
        text: 'Options 2'
      },
      {
        id: 'opt3',
        text: 'Options 3'
      },
      {
        id: 'opt4',
        text: 'Options 4'
      }
    ];

    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false
    }
  }
}
