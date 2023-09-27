import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeContainerComponent,
    AddUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeContainerComponent,
    AddUserComponent,
    ListUserComponent]
})
export class HomeModule { }
