import { Component, OnInit } from '@angular/core';
import { Laboratory } from '../laboratory';
import { LaboratoryService } from '../laboratory.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-laboratory',
  templateUrl: './update-laboratory.component.html',
  styleUrls: ['./update-laboratory.component.css']
})
export class UpdateLaboratoryComponent implements OnInit {


  id: number
  laboratory:Laboratory = new Laboratory();


  constructor(private laboratoryService:LaboratoryService,private router: Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.laboratory = new Laboratory();
    this.laboratoryService.getLaboratoryByIdFromApi(this.id).subscribe(data =>{ 
      this.laboratory = data;
    },error => console.log(error)
      );
  }


  goTolistAllLaboratory(){
    this.router.navigate(['/laboratories'])
    swal(`Laboratorio Actualizado`,`El ${this.laboratory.name} ha sido actualizado correctamente`,`info`)
    
  }


  onSubmit(){
    this.laboratoryService.putLaboratoryFromApi(this.id,this.laboratory).subscribe(data => {
      this.goTolistAllLaboratory()

    });
  }

  

  

}
