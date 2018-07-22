import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [PeopleComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [PeopleComponent],
    providers: [],
})
export class PeopleModule { }