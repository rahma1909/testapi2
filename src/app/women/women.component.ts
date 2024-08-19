import { Component, inject } from '@angular/core';
import { Iproduct } from '../core/iproduct';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
  womendata:Iproduct[]=[]
 private readonly _general=inject(GeneralService)
ngOnInit(): void {
    this._general.getSpecificWomen().subscribe({
      next:(data)=>{
this.womendata=data
console.log(this.womendata);

      },
      error:(err)=>{
        console.log(err);

      }
    })
}
}
