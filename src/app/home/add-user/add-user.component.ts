import { Component, Injectable } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',

})
export class AddUserComponent {
  constructor(private genericService: GenericService) { }
  onSubmit(userForm: any) {
    if (userForm.valid) {
      this.genericService.setData(userForm.value)
    } else {
      // Form is invalid, handle validation errors
    }
  }
}
