import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationServiceService } from 'src/services/validation-service/validation-service.service';

@Component({
  selector: 'app-error-messages',
  template: `<div *ngIf="errorMessage !== null" class="validators2 animated fadeIn">{{errorMessage}}</div>`
})
export class ErrorMessagesComponent {
  @Input() control: FormControl;
  constructor() { }
  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationServiceService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
