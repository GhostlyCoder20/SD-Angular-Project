import { Component, OnInit } from '@angular/core';
import { Typemaintenance } from '../typemaintenance';
import { TypemaintenanceService } from '../typemaintenance.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-updatetypemaintenance',
  templateUrl: './updatetypemaintenance.component.html',
  styleUrls: ['./updatetypemaintenance.component.css']
})
export class UpdatetypemaintenanceComponent implements OnInit {

  id: number
  typeMaintenance:Typemaintenance = new Typemaintenance();


  constructor(private typeMaintenanceService:TypemaintenanceService,private router: Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.typeMaintenance = new Typemaintenance();
    this.typeMaintenanceService.getTypeMaintenanceByIdFromApi(this.id).subscribe(data =>{ 
      this.typeMaintenance = data;
    },error => console.log(error)
      );
  }

  goToTypeMaintenanceLaboratory(){
    this.router.navigate(['/typemaintenance'])
    swal(`Laboratorio Actualizado`,`El ${this.typeMaintenance.name} ha sido actualizado correctamente`,`info`)
    
  }


  onSubmit(){
    this.typeMaintenanceService.putTypeMaintenanceFromApi(this.id,this.typeMaintenance).subscribe(data => {
      this.goToTypeMaintenanceLaboratory();

    });
  }


}
