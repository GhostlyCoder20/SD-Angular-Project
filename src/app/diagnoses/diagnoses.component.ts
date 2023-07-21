import { Component, OnInit } from '@angular/core';
import { Diagnostic } from './diagnostic';
import { Laboratory } from '../laboratories/laboratory';
import { DiagnosesService } from './diagnoses.service';
import { LaboratoryService } from '../laboratories/laboratory.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-diagnoses',
  templateUrl: './diagnoses.component.html',
  styleUrls: ['./diagnoses.component.css']
})
export class DiagnosesComponent implements OnInit {

  diagnoses:Diagnostic[];
  
  constructor(private diagnosesService: DiagnosesService, private router: Router){}

  ngOnInit(): void {

    this.listAllDiagnoses();

  }

  listAllDiagnoses(){
    this.diagnosesService.getDiagnosticFromApi().subscribe(data => {
      this.diagnoses = data
    })
  }

  goToRegisterDiagnostic(){
    this.router.navigate(['/registerdiagnoses'])
  }

  goToUpdateDiagnostic(id:number){
    this.router.navigate(['/updatediagnoses',id])
  }


  deleteDiagnostic(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el Diagnostico",
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
        this.diagnosesService.deleteDiagnosticFromApi(id).subscribe(data => {
          console.log(data)
          this.listAllDiagnoses();
          swal(
            'Diagnostico eliminado',
            'El Diagnostco ha sido eliminado con exito',
            'success'
          )
        })
        
      }
    })

  }

}
