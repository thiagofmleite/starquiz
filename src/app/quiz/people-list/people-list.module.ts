import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list.component';
import { PeopleModule } from './people/people.module';
import { PeopleModalModule } from './people-modal/people-modal.module';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
    declarations: [PeopleListComponent],
    imports: [CommonModule, PeopleModule, PeopleModalModule, PaginationModule],
    exports: [],
    providers: [],
})
export class PeopleListModule { }