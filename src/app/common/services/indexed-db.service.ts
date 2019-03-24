import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

const DB_NAME = 'YouTube';
const DB_VERSION = 1;

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {
  dbSubject = new Subject<IDBDatabase>();
  db: IDBDatabase = null;
  request: IDBOpenDBRequest;
  initDb: boolean;

  constructor() {
    this.request = window.indexedDB.open(DB_NAME, DB_VERSION);
    this.init();
  }

  private init(): void {
    this.request.onsuccess = (e: any) => {
      this.db = e.target.result;
      // this.dbSubject.next(this.db);
      // this.initDb = true;
      console.log(`openDb ${DB_NAME} version ${DB_VERSION}`, this.db);
    };
    this.request.onerror =  (e: any) => {
      console.log(`erorr: ${e.target.errorCode}`);
    };
    this.request.onupgradeneeded = (e: any) => {
      this.onUpgrade(e);
    };
  }

  add(table: string, data: any): void {
    let transaction = this.db.transaction([table], 'readwrite');
    let objectStore = transaction.objectStore(table);
    objectStore.add(data)
  }

  get(
    transactionName: string,
    objectStoreName: string, 
    indexName: string,
    value: any
  ): Observable<any> {
    return Observable.create((observer)=>{
      const objectStore = this.db.transaction(transactionName).objectStore(objectStoreName);
      const request = objectStore.index(indexName).get(value);
      request.onsuccess = () => {
        observer.next(request.result);
        observer.unsubscribe();
      };
    });
  }

  onUpgrade(e: any): void {
    const thisDB = e.target.result;
    if (!thisDB.objectStoreNames.contains('favorites')) {
      const store = thisDB.createObjectStore('favorites', { keyPath: 'id', autoIncrement: true });
      store.createIndex('videoId', 'videoId', { unique: true });
      store.add({videoId:'iVRbH_-Bdvo'});
    }
  }
}
