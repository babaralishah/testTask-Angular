// src/app/list/list.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../list/users/users.component.ts';
import { HomeModule } from '../home/home.module.js';


@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, HomeModule]
})
export class ListModule { }

