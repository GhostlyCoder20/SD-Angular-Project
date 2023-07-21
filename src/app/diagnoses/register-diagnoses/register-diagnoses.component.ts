import { Component, OnInit } from '@angular/core';
import { Diagnostic } from '../diagnostic';
import { Laboratory } from 'src/app/laboratories/laboratory';
import { DiagnosesService } from '../diagnoses.service';
import { Router } from '@angular/router';
import { LaboratoryService } from 'src/app/laboratories/laboratory.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-diagnoses',
  templateUrl: './register-diagnoses.component.html',
  styleUrls: ['./register-diagnoses.component.css']
})
export class RegisterDiagnosesComponent implements OnInit {

  diagnostic:Diagnostic = new Diagnostic;
  laboratories: Laboratory[];

  constructor(private diagnosesService: DiagnosesService, private router: Router, private laboratoryService: LaboratoryService){}

  ngOnInit(): void {
    this.listAllLaboratories();
  }

  onSubmit(){
    this.insertDiagnostic();
  }

  insertDiagnostic(){
    this.diagnosesService.postDiagnosticFromApi(this.diagnostic).subscribe(data => {
      console.log(data);
      this.goToDiagnosesList();

    },error => console.error(error));

  }




  private listAllLaboratories(){
    this.laboratoryService.getLaboratoriesFromApi().subscribe(data => {
      this.laboratories = data
    })
  }

  goToDiagnosesList(){
    this.router.navigate(['/diagnoses'])
    swal(`Mantenimiento Registrado`,`El diagnositco  ha sido agregado correctamente`,`success`)
  }

}
