import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AlertService } from './services/alert.service';
import { AlertComponent} from './directives/alert/alert.component';

 //fake backend 
import { fakeBackendProvider } from '../shared/helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, MdlModule],
  declarations: [AlertComponent],
  exports: [AlertComponent,
    CommonModule, FormsModule, RouterModule, MdlModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AlertService,  fakeBackendProvider,
        MockBackend,
        BaseRequestOptions]
    };
  }
}
