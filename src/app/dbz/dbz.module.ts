import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPagesComponents } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [MainPagesComponents, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainPagesComponents]
})
export class DbzModule { }
