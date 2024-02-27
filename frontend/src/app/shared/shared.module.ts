import { NgModule } from '@angular/core';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DateEsPipe } from './pipes/date-es.pipe';
import { FilterTableComponent } from './components/filter-table/filter-table.component';


@NgModule({
  declarations: [
    TableInfoComponent,
    SpinnerComponent,
    LoaderComponent,
    DateEsPipe,
    FilterTableComponent
  ],
  imports: [

  ],
  exports: [
    TableInfoComponent,
    SpinnerComponent, 
    LoaderComponent,
    DateEsPipe,
    FilterTableComponent
  ],
})
export class SharedModule {}
