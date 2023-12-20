import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Publisher } from 'src/Models/Publisher';
import { DeletePublisherPopupComponent } from '../delete-publisher-popup/delete-publisher-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssignToPublisherPopupComponent } from '../assign-to-publisher-popup/assign-to-publisher-popup.component';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent {
  @Input() publisher! : Publisher
  @Output() onDeletePublisherE: EventEmitter<any> = new EventEmitter()

  constructor(
    private dialogRef : MatDialog,
    private snackBar: MatSnackBar,
  ){}

  openDeletePublisher(publisher:Publisher){
    this.dialogRef.open(DeletePublisherPopupComponent,{
      width:'350px',
      data: {publisher:this.publisher}
    }).afterClosed().subscribe(isDeleted=>{
      if(isDeleted){
        this.onDeletePublisher(publisher)
      }
    })
  }

  openAssignTerritory(publisher:Publisher){
    this.dialogRef.open(AssignToPublisherPopupComponent,{
      width:'350px',
      data: {publisher:publisher}
    }).afterClosed().subscribe(res =>{
      
    })
  }

  onDeletePublisher(publisher:Publisher){
    return this.onDeletePublisherE.emit(publisher)
  }

}
