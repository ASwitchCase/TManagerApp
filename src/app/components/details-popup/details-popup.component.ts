import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.css']
})
export class DetailsPopupComponent {
  path : string = `assets/imgs/TerritoryCards/${this.data.territory.territory_id}.png`
  constructor(
    public dialogRef: MatDialogRef<DetailsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ){}
  
  onCancel(){
    this.dialogRef.close();
  }

}
