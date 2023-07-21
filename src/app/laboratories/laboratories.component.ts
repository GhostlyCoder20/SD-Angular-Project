import { Component, OnInit } from '@angular/core';
import { Laboratory } from './laboratory';
import { Router } from '@angular/router';
import { LaboratoryService } from './laboratory.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css']
})
export class LaboratoriesComponent implements OnInit {


  laboratories: Laboratory[];

  constructor(private laboratoryService: LaboratoryService,private router: Router){}

  ngOnInit(): void {
    this.listAllLaboratories();
  }


  private listAllLaboratories(){
    this.laboratoryService.getLaboratoriesFromApi().subscribe(data => {
      this.laboratories = data
    })
  }

  deleteLaboratory(id:number){

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
        this.laboratoryService.deleteLaboratoryFromApi(id).subscribe(data => {
          console.log(data)
          this.listAllLaboratories();
          swal(
            'Laboratorio eliminado',
            'El Laboratorio ha sido eliminado con exito',
            'success'
          )
        })
        
      }
    })

  }

  goToRegisterLaboratory(){
    this.router.navigate(['/registerlaboratory'])
  }

  goToUpdateLaboratory(id:number){
    this.router.navigate(['/updatelaboratory',id])
  }



}
