import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TimerComponent } from './header/timer/timer.component';

@NgModule({
    declarations: [HeaderComponent, TimerComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent],
    providers: [],
})
export class CoreModule { }