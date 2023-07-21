import { Component, OnInit } from '@angular/core';
import { Typemaintenance } from '../typemaintenance';
import { TypemaintenanceService } from '../typemaintenance.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registertypemaintenance',
  templateUrl: './registertypemaintenance.component.html',
  styleUrls: ['./registertypemaintenance.component.css']
})
export class RegistertypemaintenanceComponent implements OnInit{

  typeMaintenance: Typemaintenance = new Typemaintenance;

  constructor(private typeMaintenanceService:TypemaintenanceService,private router: Router){}


  ngOnInit(): void {
    console.log(this.typeMaintenance);
  }


  insertTypeMaintenance(){
    this.typeMaintenanceService.postTypeMaintenanceFromApi(this.typeMaintenance).subscribe(data => {
      console.log(data);
      this.gotToTypesMaintenanceList();

    },error => console.error(error));
  }

  gotToTypesMaintenanceList(){
    this.router.navigate(['/typemaintenance'])
    swal(`Laboratorio Registrado`,`El ${this.typeMaintenance.name} ha sido agregado correctamente`,`success`)
  }



  onSubmit() {

    this.insertTypeMaintenance();

  }
}
