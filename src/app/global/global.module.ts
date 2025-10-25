import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [],
  exports: [
    // modules
    CommonModule,
    FormsModule,
    TranslateModule,

    // components
  ]
})
export class GlobalModule { }
