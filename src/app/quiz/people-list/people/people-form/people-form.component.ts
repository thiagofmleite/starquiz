import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-people-form',
    templateUrl: './people-form.component.html',
})
export class PeopleFormComponent implements OnInit {
    @Output() peopleName = new EventEmitter<string>();
    guessForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void { 
        this.guessForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    submit() {
        const name = this.guessForm.get('name').value as string;
        this.peopleName.emit(name.trim().toLowerCase().replace(/-/g, ''));
    }
}
