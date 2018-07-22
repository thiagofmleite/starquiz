import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleModalComponent } from './people-modal.component';
import { DetailItemComponent } from './detail-item/detail-item.component';

@NgModule({
    declarations: [PeopleModalComponent, DetailItemComponent],
    imports: [ CommonModule ],
    exports: [PeopleModalComponent],
    providers: [],
})
export class PeopleModalModule {}