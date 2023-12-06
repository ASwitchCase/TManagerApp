import { Component,EventEmitter,Input,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Territory } from 'src/Models/Territory';
import { AddTerrtoryPopupComponent } from '../add-terrtory-popup/add-terrtory-popup.component';
import { CompleteTerrtoryPopupComponent } from '../complete-terrtory-popup/complete-terrtory-popup.component';
import { DetailsPopupComponent } from '../details-popup/details-popup.component';

@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent {
  @Input() territory! : Territory
  @Output() onUpdateTerritoryE: EventEmitter<any> = new EventEmitter()
  @Output() onEmptyTerritoryE: EventEmitter<any> = new EventEmitter()

  constructor(
    private dialogRef : MatDialog,
    private snackBar: MatSnackBar,
  ){}
  
  onOpenDetails(){
    this.dialogRef.open(DetailsPopupComponent,{
      width:'350px',
      height:'400px',
      data: {territory:this.territory}
    })
  }

  onOpenAddPublisher(territory : Territory){
    this.dialogRef.open(AddTerrtoryPopupComponent,{
      width:'350px',
      data: {territory:territory}
    }).afterClosed().subscribe(dto=>{
      if(dto !== undefined){
        this.territory.assigned_publisher = dto
        this.onUpdateTerritorys(this.territory)
      }
      
    })
  }

  onOpenCompleteTerritory(territory : Territory){
    this.dialogRef.open(CompleteTerrtoryPopupComponent,{
      width:'350px',
      data: {territory:territory}
    }).afterClosed().subscribe(isComplete=>{
      if(isComplete){
        this.onEmptyTerritory(territory)
      }
    })
  }
  
  onUpdateTerritorys(terrtory : Territory){
    this.onUpdateTerritoryE.emit(terrtory)
  }

  onEmptyTerritory(territory : Territory){
    this.onEmptyTerritoryE.emit(territory)
  }
}
