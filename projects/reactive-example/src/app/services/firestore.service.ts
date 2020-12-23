import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {

    constructor(private firestore: AngularFirestore) {
    }

    getCollection<T>(path: string): Observable<T[]> {
        return this.firestore.collection<T>(path)
            .snapshotChanges()
            .pipe(
                map(this.mapIdsToCollectionObjects)
            );
    }

    private mapIdsToCollectionObjects<T>(actions: DocumentChangeAction<T>[]): T[] {
        return actions.map((action: DocumentChangeAction<T>) => {
            const data = action.payload.doc.data() as T;
            return {
                ...data,
                id: action.payload.doc.id
            };
        });
    }
}
