import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  confirm1(event: Event) {
   
}


  qrResultString: string = '';

  onCodeResult(resultString: string) {
    this.confirmationService.confirm({
    
      message: 'Are you sure that '+resultString+' is Sold?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
  });
    this.  qrResultString = resultString;
  }

}
