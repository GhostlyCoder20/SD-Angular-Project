import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer';
import { ComputerService } from '../computer.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-computer',
  templateUrl: './update-computer.component.html',
  styleUrls: ['./update-computer.component.css']
})
export class UpdateComputerComponent implements OnInit {

  id:number;
  computer:Computer = new Computer();


  constructor(private computerService: ComputerService,private router: Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.computer= new Computer();
    this.computerService.getComputerByIdFromApi(this.id).subscribe(data =>{ 
      this.computer = data;
    },error => console.log(error)
      );
  }



  goToComputersList(){
    this.router.navigate(['/computers'])
    swal(`Computadora Actualizada`,`La computadora ${this.computer.name} ha sido actualizada correctamente`,`info`)
  }


  onSubmit(){
    this.computerService.putComputerFromApi(this.id,this.computer).subscribe(data => {
      this.goToComputersList()

    });
  }

  


  


}
