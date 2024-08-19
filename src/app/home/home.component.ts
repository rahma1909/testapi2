import { Component, inject, OnInit } from '@angular/core';
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { GeneralService } from '../general.service';
import { Iproduct } from '../core/iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  data:Iproduct[]=[]
 private readonly _general=inject(GeneralService)
ngOnInit(): void {
    this._general.getallproducte().subscribe({
      next:(data)=>{
        this.data=data
        console.log(this.data);

              },
              error:(err)=>{
                console.log(err);

              }
    })
}
}
