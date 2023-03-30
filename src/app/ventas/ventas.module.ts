import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// pipes
import { CapitalLetterPipe } from './pipes/capital.pipe';

// modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [
    NumbersComponent,
    NoCommonComponent,
    BasicsComponent,
    OrderComponent,

    // pipes
    CapitalLetterPipe,
    FlyPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NoCommonComponent,
    BasicsComponent,
    OrderComponent,
  ],
})
export class VentasModule {}
