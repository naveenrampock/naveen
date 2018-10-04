import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor(private ps:PersonService) { }

  ngOnInit() {
    // this.ps.getPersons()
    this.ps.getPersons().subscribe(response=>{
      console.log(response)
    })
  }


}
