import { Injectable } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Injectable()
export class DataService {
    getSimpleList(): Select2OptionData[] {
        return [
            {
                id: 'val1',
                text: 'Value 1',
                additional: {
                    image: 'assets/image0.jpg',
                    winner: '4'
                }
            },
            {
                id: 'val2',
                text: 'Value 2',
                additional: {
                    winner: '3'
                }
            },
            {
                id: 'val3',
                text: 'Value 3',
                additional: {
                    image: 'assets/image1.jpg',
                    winner: '1'
                }
            },
            {
                id: 'val4',
                text: 'Value 4',
                additional: {
                    image: 'assets/image2.jpg',
                    winner: '5'
                }
            },
            {
                id: 'val5',
                text: 'Value 5',
                additional: {
                    image: 'assets/image3.jpg',
                    winner: '2'
                }
            }
        ];
    }

    getComplexList(): Select2OptionData[] {
        return [
            {
                id: '0',
                text: 'Cars',
                children: [
                    {
                        id: 'car1',
                        text: 'Car 1'
                    },
                    {
                        id: 'car2',
                        text: 'Car 2'
                    },
                    {
                        id: 'car3',
                        text: 'Car 3'
                    }
                ]
            },
            {
                id: '0',
                text: 'Planes',
                children: [
                    {
                        id: 'plane1',
                        text: 'Plane 1'
                    },
                    {
                        id: 'plane2',
                        text: 'Plane 2'
                    },
                    {
                        id: 'plane3',
                        text: 'Plane 3'
                    }
                ]
            }
        ];
    }

    getComplexListAlternative(): Select2OptionData[] {
        return [
            {
                id: '0',
                text: 'Cars',
                children: [
                    {
                        id: 'car1',
                        text: 'Car 1 - New'
                    },
                    {
                        id: 'car2',
                        text: 'Car 2 - New'
                    },
                    {
                        id: 'car3',
                        text: 'Car 3 - New'
                    }
                ]
            },
            {
                id: '0',
                text: 'Planes',
                children: [
                    {
                        id: 'plane1',
                        text: 'Plane 1 - New'
                    },
                    {
                        id: 'plane2',
                        text: 'Plane 2 - New'
                    },
                    {
                        id: 'plane3',
                        text: 'Plane 3 - New'
                    }
                ]
            }
        ];
    }
}
