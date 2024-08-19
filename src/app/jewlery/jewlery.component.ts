import { Component, inject } from '@angular/core';
import { Iproduct } from '../core/iproduct';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-jewlery',
  standalone: true,
  imports: [],
  templateUrl: './jewlery.component.html',
  styleUrl: './jewlery.component.css'
})
export class JewleryComponent {
  jewdata:Iproduct[]=[]
 private readonly _general=inject(GeneralService)
ngOnInit(): void {
    this._general.getSpecificjewelery().subscribe({
      next:(data)=>{
this.jewdata=data
console.log(this.jewdata);

      },
      error:(err)=>{
        console.log(err);

      }
    })
}
}
