import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Territory } from 'src/Models/Territory';

@Component({
  selector: 'app-complete-terrtory-popup',
  templateUrl: './complete-terrtory-popup.component.html',
  styleUrls: ['./complete-terrtory-popup.component.css']
})
export class CompleteTerrtoryPopupComponent {
  
  constructor(private dialogRef: MatDialogRef<CompleteTerrtoryPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){}
  
    onCancel(): void {
      this.dialogRef.close();
    }
    
}
