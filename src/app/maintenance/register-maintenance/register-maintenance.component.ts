import { Component, OnInit } from '@angular/core';
import { Maintenance } from '../maintenance';
import { MaintenanceService } from '../maintenance.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Computer } from 'src/app/computers/computer';
import { ComputerService } from 'src/app/computers/computer.service';

@Component({
  selector: 'app-register-maintenance',
  templateUrl: './register-maintenance.component.html',
  styleUrls: ['./register-maintenance.component.css']
})
export class RegisterMaintenanceComponent implements OnInit{
  
  maintenance: Maintenance = new Maintenance;
  computers: Computer[];

  constructor(private maintenanceService: MaintenanceService,private router: Router, private computerService:ComputerService){}

  ngOnInit(): void {
    this.listAllComputers();
  }

  onSubmit(){
    this.insertMaintenance()
  }

  insertMaintenance(){
    this.maintenanceService.postMaintenanceFromApi(this.maintenance).subscribe(data => {
      this.goToMaintenancesList();
    },error => console.error(error));
  }

  private listAllComputers(){
    this.computerService.getComputersFromApi().subscribe(data => {
      this.computers = data
    })
  }


  goToMaintenancesList(){
    this.router.navigate(['/maintenances'])
    swal(`Mantenimiento Registrado`,`El mantenimiento  ha sido agregado correctamente`,`success`)
  }

}
