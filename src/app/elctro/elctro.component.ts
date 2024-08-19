import { Component, inject } from '@angular/core';
import { Iproduct } from '../core/iproduct';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-elctro',
  standalone: true,
  imports: [],
  templateUrl: './elctro.component.html',
  styleUrl: './elctro.component.css'
})
export class ElctroComponent {
  elctrodata:Iproduct[]=[]
 private readonly _general=inject(GeneralService)
ngOnInit(): void {
    this._general.getSpecificElctro().subscribe({
      next:(data)=>{
this.elctrodata=data
console.log(this.elctrodata);

      },
      error:(err)=>{
        console.log(err);

      }
    })
}
}
