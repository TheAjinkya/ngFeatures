import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AirlineService } from 'src/app/core/services/airline.service';


@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AirlineComponent implements OnInit {

  constructor(private airlineService : AirlineService, private spinner:NgxSpinnerService) { }
  
  passenger: any[] = []; 
  page: number = 1;
  isDataAvailable:boolean = false;
  itemsPerPage = 6;
  totalItems : any; 

  
  ngOnInit(): void {

    // this.passenger = this.airlineService.getAllPassengerData();
    this.spinner.show();
    this.airlineService.getAllPassengerData(1, this.itemsPerPage).subscribe((response:any)=>{
      console.log(response.data);
      this.passenger= response.data.map((element:any) => {
        return(element.airline[0]);
      });
      this.totalItems = response.totalPassengers;
      console.log(this.passenger);
      this.page =  0
      this.isDataAvailable = true;
      this.spinner.hide();
    }) 
  }

  gty(page: any){
    this.airlineService.getAllPassengerData(page, this.itemsPerPage).subscribe((data: any) => {
      // this.passenger =  data.data;
      data.data.forEach((iterator:any)=>iterator.airline)
      this.totalItems = data.totalPassengers;
    })
  }

}
