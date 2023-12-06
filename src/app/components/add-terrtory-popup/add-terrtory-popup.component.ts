import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Territory } from 'src/Models/Territory';

@Component({
  selector: 'app-add-terrtory-popup',
  templateUrl: './add-terrtory-popup.component.html',
  styleUrls: ['./add-terrtory-popup.component.css']
})
export class AddTerrtoryPopupComponent {

  dto = {
    _id: this.newGuid(),
    name:"",
    email:"",
    phone:"",
    assigned_territory: this.data.territory._id
  }

  constructor(
    public dialogRef: MatDialogRef<AddTerrtoryPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ){}
  
  onCancel(){
    this.dialogRef.close();
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
