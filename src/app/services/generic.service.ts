import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  public readonly data$ = this.dataSubject.asObservable();

  setData(data: any) {
    // Get the current data
    const currentData = this.dataSubject.getValue();

    // Push the new data to the array
    currentData.push(data);

    // Set the updated data
    this.dataSubject.next(currentData);
  }
}
