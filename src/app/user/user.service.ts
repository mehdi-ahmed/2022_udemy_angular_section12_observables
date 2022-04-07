import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  // Old way
  // activatedEmitter = new EventEmitter<boolean>();

  // Better way
  activatedEmitterBetter = new Subject<boolean>();
}
