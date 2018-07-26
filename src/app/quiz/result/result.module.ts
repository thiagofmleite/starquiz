import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ResultComponent],
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    exports: [ResultComponent],
    providers: [],
})
export class ResultModule {}