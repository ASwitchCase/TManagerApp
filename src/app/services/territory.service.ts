import { Injectable, inject } from '@angular/core';
import {Firestore, collectionData} from '@angular/fire/firestore'
import { collection, doc, setDoc} from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Territory } from 'src/Models/Territory';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class TerritoryService {
  private dbPath = '/territories';

  dbRef: AngularFirestoreCollection<Territory>;

  constructor(private db: AngularFirestore) {
    this.dbRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Territory> {
    return this.dbRef;
  }

  update(id: string, territory: Territory): Promise<void> {
    return this.dbRef.doc(id).update(territory);
  }
  
}
