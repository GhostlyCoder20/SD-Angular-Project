import { Component, OnInit } from '@angular/core';
import { Computer } from './computer';
import { Router } from '@angular/router';
import { ComputerService } from './computer.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  computers: Computer[];

  constructor(private computerService: ComputerService,private router: Router){}


  ngOnInit(): void {
    this.listAllComputers()
  }

  private listAllComputers(){
    this.computerService.getComputersFromApi().subscribe(data => {
      this.computers = data
    })
  }


  goToRegisterComputer(){
    this.router.navigate(['/registercomputer'])
  }

  goToUpdateComputer(id:number){
    this.router.navigate(['/updatecomputer',id])
  }


  deleteComputer(id:number){

    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar La computadora",
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
        this.computerService.deleteComputerFromApi(id).subscribe(data => {
          console.log(data)
          this.listAllComputers();
          swal(
            'Computadora eliminada',
            'La computadora ha sido eliminado con exito',
            'success'
          )
        })
        
      }
    })

  }

}
