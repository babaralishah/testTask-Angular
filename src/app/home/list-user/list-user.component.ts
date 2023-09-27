import { Component } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.ts.scss']
})
export class ListUserComponent {
  userData: any[] = [];

  constructor(private genericService: GenericService) {
    this.genericService.data$.subscribe(data => {
      if (data) {
        console.log(data)
        this.userData = data
      }
    });
  }

}
