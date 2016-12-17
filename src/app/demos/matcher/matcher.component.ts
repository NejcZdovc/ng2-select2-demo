import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-matcher',
  templateUrl: './matcher.component.html',
  styleUrls: ['./matcher.component.css']
})
export class MatcherComponent implements OnInit {
  public options: Select2Options;
  public exampleData: Array<Select2OptionData>;

  ngOnInit() {
    this.options = {
      matcher: (term: string, text: string) => {
        return text.toUpperCase().indexOf(term.toUpperCase()) == 0;
      }
    };

    this.exampleData = [
      {
        id: 'AK',
        text: 'Alaska'
      },
      {
        id: 'HI',
        text: 'Hawaii'
      },
      {
        id: 'CA',
        text: 'California'
      },
      {
        id: 'NV',
        text: 'Nevada'
      },
      {
        id: 'OR',
        text: 'Oregon'
      },
      {
        id: 'WA',
        text: 'Washington'
      },
      {
        id: 'AZ',
        text: 'Arizona'
      },
      {
        id: 'CO',
        text: 'Colorado'
      }
    ];
  }
}
