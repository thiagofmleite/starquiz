import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
    @Input() next: string;
    @Input() previous: string;


    constructor() { }

    ngOnInit(): void { }

    page(direction: string): string {
        const rule = 'https://swapi.co/api/people/?page=';
        if(direction) {
            return direction.replace(rule, '');
        }
        return;
    }
}
