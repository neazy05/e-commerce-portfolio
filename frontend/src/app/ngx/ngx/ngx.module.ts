import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TooltipModule} from "ngx-bootstrap/Tooltip"
import { AccordionModule} from "ngx-bootstrap/Accordion"
import { CarouselModule} from "ngx-bootstrap/Carousel"
import { PaginationModule} from "ngx-bootstrap/pagination"
import { PopoverModule} from "ngx-bootstrap/popover"
import { ModalModule} from "ngx-bootstrap/modal"


const ngxComponents = [
  CarouselModule.forRoot(),
  TooltipModule.forRoot(),
  ModalModule.forRoot(),
  PopoverModule.forRoot(),
  AccordionModule.forRoot(),
  PaginationModule.forRoot(),
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngxComponents
  ],
  exports: [
    ngxComponents
  ]
})
export class NgxModule {
  
}
