import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//componentes
import { MenuComponent } from './menu/menu.component';
import { MisTerrapiasComponent } from './mis-terrapias/mis-terrapias.component';



@NgModule({
  declarations: [
    MenuComponent,
    MisTerrapiasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    
  ],
  exports: [
    MenuComponent,
    MisTerrapiasComponent
  ],
})
export class ComponentsModule { }
