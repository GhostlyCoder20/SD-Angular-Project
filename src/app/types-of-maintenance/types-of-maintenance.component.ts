import { Component, OnInit } from '@angular/core';
import { Typemaintenance } from './typemaintenance';
import { TypemaintenanceService } from './typemaintenance.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-types-of-maintenance',
  templateUrl: './types-of-maintenance.component.html',
  styleUrls: ['./types-of-maintenance.component.css']
})
export class TypesOfMaintenanceComponent implements OnInit {

  typeMaintenances: Typemaintenance[];

  constructor(private typeMaintenanceService: TypemaintenanceService,private router: Router){}

  ngOnInit(): void {
    this.listAllTypesMaintenance();
  }



  private listAllTypesMaintenance(){
    this.typeMaintenanceService.getTypesMaintenanceFromApi().subscribe(data => {
      this.typeMaintenances = data
    })
  }


  deleteTypeMaintenance(id:number){

    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el Laboratorio",
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
        this.typeMaintenanceService.deleteTypeMaintenanceFromApi(id).subscribe(data => {
          console.log(data)
          this.listAllTypesMaintenance();
          swal(
            'Laboratorio eliminado',
            'El Laboratorio ha sido eliminado con exito',
            'success'
          )
        })
        
      }
    })

  }


  goToRegisterTypeMaintenance(){
    this.router.navigate(['/registertypemaintenance'])
  }

  goToUpdateTypeMaintenance(id:number){
    this.router.navigate(['/updatetypemaintenance',id])
  }

}
