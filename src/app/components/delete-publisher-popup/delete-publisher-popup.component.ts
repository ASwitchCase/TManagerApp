import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-publisher-popup',
  templateUrl: './delete-publisher-popup.component.html',
  styleUrls: ['./delete-publisher-popup.component.css']
})
export class DeletePublisherPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePublisherPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ){}
  
  onCancel(){
    this.dialogRef.close();
  }
}
