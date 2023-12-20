import { Component, inject} from '@angular/core';
import {Firestore, collectionData} from '@angular/fire/firestore'
import { collection } from 'firebase/firestore';
import { Observable, map } from 'rxjs';
import { Publisher } from 'src/Models/Publisher';
import { Territory } from 'src/Models/Territory';
import { EmailService } from 'src/app/services/email.service';
import { PublisherService } from 'src/app/services/publisher.service';
import { TerritoryService } from 'src/app/services/territory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private firestore: Firestore = inject(Firestore)
  territories$ : Territory[] = []
  publishers$ : Publisher[] = []

  constructor(
    private territoryService : TerritoryService, 
    private publisherService : PublisherService, 
    private emailService: EmailService
    ){
    //const territoryCollection = collection(this.firestore,'territories')
    //const publisherCollection = collection(this.firestore,'publishers')

    //this.publishers$ = collectionData(publisherCollection) as Observable<Publisher[]>
    //this.territories$ =collectionData(territoryCollection) as Observable<Territory[]>
  }

  ngOnInit(): void {
    this.mapTerritories()
    this.mapPublishers()
  }

  mapTerritories(){
    this.territoryService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.territories$ = data;
    });
  }

  mapPublishers(){
    this.publisherService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.publishers$ = data;
    });
  }

  handleUpdateTerritory(territory : Territory){
    let isInList = false

    for(let publisher of this.publishers$){
      if(publisher.name === territory.assigned_publisher?.name){
        isInList = true
      }
    }

    if(isInList && territory.assigned_publisher){
      this.publisherService.update(territory.assigned_publisher?._id,territory.assigned_publisher)
    }else{
      this.publisherService.create(territory.assigned_publisher)
    }

    this.territoryService.update(territory._id, territory )
    if(territory.assigned_publisher !== null){
      this.emailService.notifyPublisher(territory.assigned_publisher,territory).subscribe(res =>{})
    }
    
  }

  handleEmptyTerritory(territory : Territory){
    if(territory.assigned_publisher){
      let newPub : Publisher = {
        _id : territory.assigned_publisher._id,
        name : territory.assigned_publisher.name,
        phone : territory.assigned_publisher.phone,
        email : territory.assigned_publisher.email,
        assigned_territory : null
      }
      this.publisherService.update(territory.assigned_publisher._id,newPub)
    }
    territory.assigned_publisher = null
    this.territoryService.update(territory._id, territory)
  }

  handleDeletePublisher(publisher : Publisher){
    if(publisher.assigned_territory !== null){
      this.territories$.find(t => {
        if(t._id === publisher.assigned_territory){
          t.assigned_publisher = null
          this.territoryService.update(t._id,t)
        }
      })
    }
      
    this.publisherService.delete(publisher._id)
  }

}
