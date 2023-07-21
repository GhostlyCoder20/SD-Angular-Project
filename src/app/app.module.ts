import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComputersComponent } from './computers/computers.component';
import { DiagnosesComponent } from './diagnoses/diagnoses.component';
import { LaboratoriesComponent } from './laboratories/laboratories.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TypesOfMaintenanceComponent } from './types-of-maintenance/types-of-maintenance.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterLaboratoryComponent } from './laboratories/register-laboratory/register-laboratory.component';
import { UpdateLaboratoryComponent } from './laboratories/update-laboratory/update-laboratory.component';
import { RegisterComputerComponent } from './computers/register-computer/register-computer.component';
import { UpdateComputerComponent } from './computers/update-computer/update-computer.component';
import { UpdatetypemaintenanceComponent } from './types-of-maintenance/updatetypemaintenance/updatetypemaintenance.component';
import { RegistertypemaintenanceComponent } from './types-of-maintenance/registertypemaintenance/registertypemaintenance.component';
import { RegisterMaintenanceComponent } from './maintenance/register-maintenance/register-maintenance.component';
import { UpdateMaintenanceComponent } from './maintenance/update-maintenance/update-maintenance.component';
import { UpdateDiagnosesComponent } from './diagnoses/update-diagnoses/update-diagnoses.component';
import { RegisterDiagnosesComponent } from './diagnoses/register-diagnoses/register-diagnoses.component';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ComputersComponent,
    DiagnosesComponent,
    LaboratoriesComponent,
    MaintenanceComponent,
    TypesOfMaintenanceComponent,
    RegisterLaboratoryComponent,
    UpdateLaboratoryComponent,
    RegisterComputerComponent,
    UpdateComputerComponent,
    UpdatetypemaintenanceComponent,
    RegistertypemaintenanceComponent,
    RegisterMaintenanceComponent,
    UpdateMaintenanceComponent,
    UpdateDiagnosesComponent,
    RegisterDiagnosesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
