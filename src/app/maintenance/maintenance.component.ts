import { Component, OnInit } from '@angular/core';
import { Maintenance } from './maintenance';
import { MaintenanceService } from './maintenance.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  maintenances: Maintenance[];

  constructor(private maintenanceService: MaintenanceService,private router: Router){}


  ngOnInit(): void {
    this.listAllMaintenances()
  }

  private listAllMaintenances(){
    this.maintenanceService.getMaintenanceFromApi().subscribe(data => {
      this.maintenances = data
    })
  }

  goToRegisterMaintenance(){
    this.router.navigate(['/registermaintenance'])
  }

  goToUpdateMaintenance(id:number){
    this.router.navigate(['/updatemaintenance',id])
  }

  deleteMaintenance(id:number){

    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el Mantenimiento",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.maintenanceService.deleteMaintenanceFromApi(id).subscribe(data => {
          console.log(data)
          this.listAllMaintenances();
          swal(
            'Mantenimiento eliminado',
            'El Mantenimiento ha sido eliminado con exito',
            'success'
          )
        })
        
      }
    })

  }



}
