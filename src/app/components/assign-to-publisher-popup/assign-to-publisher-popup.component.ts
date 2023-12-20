import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Territory } from 'src/Models/Territory';

@Component({
  selector: 'app-assign-to-publisher-popup',
  templateUrl: './assign-to-publisher-popup.component.html',
  styleUrls: ['./assign-to-publisher-popup.component.css']
})
export class AssignToPublisherPopupComponent {
  constructor(private dialogRef: MatDialogRef<AssignToPublisherPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){}
  
    onCancel(): void {
      this.dialogRef.close();
    }
}
