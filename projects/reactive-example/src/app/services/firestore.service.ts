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

    getDocument<T>(path: string): Observable<T | null> {
        return this.firestore.doc<T>(path)
            .snapshotChanges()
            .pipe(
                map((snapshot) => {
                    return snapshot.payload.exists
                        ? {
                            ...snapshot.payload.data() as T,
                            id: snapshot.payload.id
                        }
                        : null;
                })
            );
    }

    getDocumentsByProperty<T>(path: string, property: string, value: any): Observable<T[]> {
        return this.firestore.collection<T>(path, ref => ref.where(property, '==', value))
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
