import { Component, OnInit } from '@angular/core';
import { Maintenance } from '../maintenance';
import { MaintenanceService } from '../maintenance.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Computer } from 'src/app/computers/computer';
import { ComputerService } from 'src/app/computers/computer.service';

@Component({
  selector: 'app-update-maintenance',
  templateUrl: './update-maintenance.component.html',
  styleUrls: ['./update-maintenance.component.css']
})
export class UpdateMaintenanceComponent implements OnInit {

  id:number;
  maintenance: Maintenance = new Maintenance();
  computers: Computer[];


  constructor(private computerService: ComputerService,private maintenanceService: MaintenanceService,private router: Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.listAllComputers();
    this.id = this.route.snapshot.params['id'];
    this.maintenance = new Maintenance();
    this.maintenanceService.getMaintenanceByIdFromApi(this.id).subscribe(data => {
      this.maintenance = data

    },error => console.log(error));
   
  }

  goToMaintenancesList(){
    this.router.navigate(['/maintenance'])
    swal(`Computadora Actualizada`,`El mantenimientoo ha sido actualizado correctamente`,`info`)
  }

  onSubmit(){
    this.maintenanceService.putMaintenanceFromApi(this.id,this.maintenance).subscribe(data => {
      this.goToMaintenancesList()

    });
  }


  private listAllComputers(){
    this.computerService.getComputersFromApi().subscribe(data => {
      this.computers = data
    })
  }

  

}
