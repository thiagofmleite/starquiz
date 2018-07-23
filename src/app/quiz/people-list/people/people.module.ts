import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleFormComponent } from './people-form/people-form.component';

@NgModule({
    declarations: [PeopleComponent, PeopleFormComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [PeopleComponent],
    providers: [],
})
export class PeopleModule { }