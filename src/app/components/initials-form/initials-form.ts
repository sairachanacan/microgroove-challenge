import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface InitialsFormModel {
  name: AbstractControl<string | null>;
}

@Component({
  selector: 'app-initials-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './initials-form.html',
  styleUrl: './initials-form.scss',
})
export class InitialsForm {
  initialForm!: FormGroup<InitialsFormModel>;
  @Output() intialFormSubmitEvent = new EventEmitter<string>();
  @ViewChild(FormGroupDirective) formGroupDir!: FormGroupDirective;


  constructor() {
    this.initialForm = new FormGroup<InitialsFormModel>({
      name: new FormControl<string | null>("", [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    if (this.initialForm.valid) {
      const name = this.initialForm.value.name;
      if (name) {
        this.intialFormSubmitEvent.emit(name);
        this.formGroupDir.resetForm();
      }
    }
  }
}
