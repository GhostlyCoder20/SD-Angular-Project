import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../computer.service';
import { Router } from '@angular/router';
import { Computer } from '../computer';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-computer',
  templateUrl: './register-computer.component.html',
  styleUrls: ['./register-computer.component.css']
})
export class RegisterComputerComponent implements OnInit {

  computer: Computer = new Computer;

  constructor(private computerService: ComputerService,private router: Router){}

  ngOnInit(): void {
    console.log(this.computer);
  }


  onSubmit(){
    this.insertComputer()
  }

  insertComputer(){
    this.computerService.postComputerFromApi(this.computer).subscribe(data => {
      console.log(data);
      this.goToComputersList();

    },error => console.error(error));
  }


  goToComputersList(){
    this.router.navigate(['/computers'])
    swal(`Computadora Registrada`,`La computadora ${this.computer.name} ha sido agregada correctamente`,`success`)
  }

}
