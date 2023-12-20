import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Publisher } from 'src/Models/Publisher';
import { Territory } from 'src/Models/Territory';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private dbPath = '/publishers';

  dbRef: AngularFirestoreCollection<Publisher>;

  constructor(private db: AngularFirestore) {
    this.dbRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Publisher> {
    return this.dbRef;
  }

  create(publisher: any): any {
    return this.dbRef.doc(publisher._id).set(publisher);
  }

  update(id: string, publisher : Publisher): Promise<void> {
    return this.dbRef.doc(id).update(publisher);
  }

  delete(id: string){
    return this.dbRef.doc(id).delete();
  }
}
