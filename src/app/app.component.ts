import { Component } from '@angular/core';
import { DataService } from "../services/data.service";
import { Select2OptionData, Select2TemplateFunction } from "ng2-select2";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public startValue: string = 'car3';
    public startData: Array<Select2OptionData>;
    public selected: string = "";

    constructor(private data: DataService) {
        this.startData = this.data.getComplexList();
    }

    // function for result template
    public templateResult: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
        if (!state.id) {
            return state.text;
        }

        let image = '<span class="image"></span>';

        if (state.additional.image) {
            image = '<span class="image"><img src="' + state.additional.image + '"</span>';
        }

        return jQuery('<span><b>' + state.additional.winner + '.</b> ' + image + ' ' + state.text + '</span>');
    }

    // function for selection template
    public templateSelection: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
        if (!state.id) {
            return state.text;
        }

        return jQuery('<span><b>' + state.additional.winner + '.</b> ' + state.text + '</span>');
    }

    public changeValue() {
        this.startValue = 'car2';
    }

    public changeValueSec() {
        this.startValue = 'car3';
    }

    public changeData() {
        this.startData = this.data.getComplexListAlternative();
    }

    public changed(e: any): void {
        this.selected = e.value;
    }
}
