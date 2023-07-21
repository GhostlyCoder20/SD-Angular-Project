import { Component, OnInit } from '@angular/core';
import { Diagnostic } from '../diagnostic';
import { DiagnosesService } from '../diagnoses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboratoryService } from 'src/app/laboratories/laboratory.service';
import { Laboratory } from 'src/app/laboratories/laboratory';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-diagnoses',
  templateUrl: './update-diagnoses.component.html',
  styleUrls: ['./update-diagnoses.component.css']
})
export class UpdateDiagnosesComponent implements OnInit{

  id: number;
  diagnostic: Diagnostic = new Diagnostic();
  laboratories: Laboratory[];

  constructor(private diagnosesService: DiagnosesService, private router: Router,  private route:ActivatedRoute ,private laboratoryService: LaboratoryService){}


  ngOnInit(): void {
    this.listAllLaboratories();
    this.id = this.route.snapshot.params['id'];
    this.diagnostic = new Diagnostic();
    this.diagnosesService.getDiagnosticByIdFromApi(this.id).subscribe(data => {
      this.diagnostic = data

    },error => console.log(error));
  }


  private listAllLaboratories(){
    this.laboratoryService.getLaboratoriesFromApi().subscribe(data => {
      this.laboratories = data
    })
  }

  onSubmit(){

    this.diagnosesService.putDiagnosticFromApi(this.id,this.diagnostic).subscribe(data => {
      this.goToDiagnosesList()

    });

  }

  goToDiagnosesList(){
    this.router.navigate(['/diagnoses'])
    swal(`Mantenimiento Actualizado`,`El diagnositco  ha sido actualizado correctamente`,`info`)
  }




}
