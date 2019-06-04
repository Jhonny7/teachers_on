import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessagesComponent } from 'src/components/control-messages/control-messages.component';
import { ErrorMessagesComponent } from 'src/components/error-messages/error-messages.component';
import { LoaderComponent } from 'src/components/loader/loader.component';

@NgModule({
  declarations: [ControlMessagesComponent, ErrorMessagesComponent, LoaderComponent],
  exports: [ControlMessagesComponent, ErrorMessagesComponent, LoaderComponent],
  entryComponents: [
    ControlMessagesComponent, ErrorMessagesComponent, LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {

}
