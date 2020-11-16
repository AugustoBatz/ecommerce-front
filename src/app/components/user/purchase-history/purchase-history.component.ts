import { Component, OnInit } from '@angular/core';
import { DateReport } from 'src/app/models/dateReport';
import { APIService } from 'src/app/services/backend/api.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.sass']
})
export class PurchaseHistoryComponent implements OnInit {
  date_start: string = '2020-11-10'; 
  date_finish: string = '2020-11-16'; 
  generated: boolean = false; 
  history: DateReport[] = []; 
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
  }
  datePickedStart(){
    console.log(this.date_start); 
  }
  datePickedFinish(){
    console.log(this.date_finish);
  }
  generateHistory(){
    this.apiService.generateUserHistory(this.date_start, this.date_finish)
    .subscribe(
      (res: DateReport[])=>
      {
        this.history= res;
        this.generated=true; 
      },
      err=>console.log(err)
    );
  }
  reformatDate(date: string){
    let reformat = new Date(date).toString();
    return reformat; 
  }
}
