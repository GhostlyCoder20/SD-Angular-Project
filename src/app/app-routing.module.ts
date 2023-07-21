import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComputersComponent } from './computers/computers.component';
import { DiagnosesComponent } from './diagnoses/diagnoses.component';
import { LaboratoriesComponent } from './laboratories/laboratories.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TypesOfMaintenanceComponent } from './types-of-maintenance/types-of-maintenance.component';
import { RegisterLaboratoryComponent } from './laboratories/register-laboratory/register-laboratory.component';
import { UpdateLaboratoryComponent } from './laboratories/update-laboratory/update-laboratory.component';
import { RegisterComputerComponent } from './computers/register-computer/register-computer.component';
import { UpdateComputerComponent } from './computers/update-computer/update-computer.component';
import { UpdatetypemaintenanceComponent } from './types-of-maintenance/updatetypemaintenance/updatetypemaintenance.component';
import { RegistertypemaintenanceComponent } from './types-of-maintenance/registertypemaintenance/registertypemaintenance.component';
import { RegisterMaintenanceComponent } from './maintenance/register-maintenance/register-maintenance.component';
import { UpdateMaintenanceComponent } from './maintenance/update-maintenance/update-maintenance.component';
import { RegisterDiagnosesComponent } from './diagnoses/register-diagnoses/register-diagnoses.component';
import { UpdateDiagnosesComponent } from './diagnoses/update-diagnoses/update-diagnoses.component';

const routes: Routes = [

  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'computers', component: ComputersComponent},
  {path:'maintenances', component: MaintenanceComponent},
  {path:'diagnoses', component: DiagnosesComponent},
  {path:'registerdiagnoses', component: RegisterDiagnosesComponent},
  {path:'updatediagnoses/:id', component: UpdateDiagnosesComponent},
  {path:'laboratories', component: LaboratoriesComponent},
  {path:'maintenance', component: MaintenanceComponent},
  {path:'typemaintenance', component: TypesOfMaintenanceComponent},
  {path:'registerlaboratory', component: RegisterLaboratoryComponent},
  {path:'updatelaboratory/:id', component: UpdateLaboratoryComponent},
  {path:'registercomputer',component: RegisterComputerComponent},
  {path:'updatecomputer/:id' , component: UpdateComputerComponent},
  {path:'updatetypemaintenance/:id' , component: UpdatetypemaintenanceComponent},
  {path:'registertypemaintenance' , component: RegistertypemaintenanceComponent},
  {path:'registermaintenance' , component: RegisterMaintenanceComponent},
  {path:'updatemaintenance/:id' , component: UpdateMaintenanceComponent}



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
