import { Component, inject, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { Iproduct } from '../core/iproduct';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent implements OnInit{
  mendata:Iproduct[]=[]
 private readonly _general=inject(GeneralService)
ngOnInit(): void {
    this._general.getSpecificMen().subscribe({
      next:(data)=>{
this.mendata=data
console.log(this.mendata);

      },
      error:(err)=>{
        console.log(err);

      }
    })
}
}
