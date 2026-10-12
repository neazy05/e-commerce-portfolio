import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
const materials = [
  MatFormFieldModule,
];



@NgModule({
  
  imports: [materials],
  exports: [materials]
    
})
export class MaterialModule { }
