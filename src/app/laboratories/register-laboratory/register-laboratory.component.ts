import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';
import { LaboratoryService } from '../laboratory.service';
import { Laboratory } from '../laboratory';

@Component({
  selector: 'app-register-laboratory',
  templateUrl: './register-laboratory.component.html',
  styleUrls: ['./register-laboratory.component.css']
})
export class RegisterLaboratoryComponent implements OnInit {

  laboratory: Laboratory = new Laboratory;

  constructor(private laboratoryService:LaboratoryService,private router: Router ){}

  ngOnInit(): void {
    console.log(this.laboratory);
  }

  insertLaboratory(){
    this.laboratoryService.postLaboratoryFromApi(this.laboratory).subscribe(data => {
      console.log(data);
      this.gotToLaboratoriesList();

    },error => console.error(error));
  }

  gotToLaboratoriesList(){
    this.router.navigate(['/laboratories'])
    swal(`Laboratorio Registrado`,`El ${this.laboratory.name} ha sido agregado correctamente`,`success`)
  }


  onSubmit(){
    this.insertLaboratory();
    
  }

}
