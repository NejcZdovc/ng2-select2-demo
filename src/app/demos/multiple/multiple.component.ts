import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  public options: Select2Options;
  public value: string[];
  public current: string;

  ngOnInit() {
    this.exampleData = [
      {
        id: 'multiple1',
        text: 'Multiple 1'
      },
      {
        id: 'multiple2',
        text: 'Multiple 2'
      },
      {
        id: 'multiple3',
        text: 'Multiple 3'
      },
      {
        id: 'multiple4',
        text: 'Multiple 4'
      }
    ];

    this.value = ['multiple2', 'multiple4'];

    this.options = {
      multiple: true
    }

    this.current = this.value.join(' | ');
  }

  changed(data: {value: string[]}) {
    this.current = data.value.join(' | ');
  }
}
