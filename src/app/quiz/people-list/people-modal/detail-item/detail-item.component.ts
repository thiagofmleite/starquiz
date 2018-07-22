import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-detail-item',
    templateUrl: './detail-item.component.html',
})
export class DetailItemComponent implements OnInit {
    @Input() title: string;
    @Input() value: string;
    
    constructor() { }

    ngOnInit(): void { }
}
