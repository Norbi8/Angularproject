import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Drink } from '../interface/drink';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  collectionName = 'italok'

  constructor(private http:HttpClient, private afs:AngularFirestore,private storage: AngularFireStorage) { 

  }

  getAll(metaUrl:string): Observable< Array<Drink>>{
    return this.afs.collection<Drink>(this.collectionName).valueChanges();
  }

  /*loadImage(imageUrl:string){
    return this.storage.ref(imageUrl).getDownloadURL();
  }*/

  create(drink:Drink | any){
    //drink.imgurl = 'italdiszkont/'+drink.id+'.jpg';
    return this.afs.collection<Drink>(this.collectionName).doc(drink.id).set(drink);
  }

  /*uploadImage(drink:any, file: File) {
    return this.storage.upload('italdiszkont/'+drink.id+'.jpg', file).snapshotChanges();
  }*/

  update(user:User| any){
    return this.afs.collection<Drink>(this.collectionName).doc(user.id).set(user);
  }

  delete(id :string){
    return this.afs.collection<Drink>(this.collectionName).doc(id).delete();
  }
  
  getDataById(id: string) {
    return this.afs.collection<Drink>(this.collectionName).doc(id).get();
  }

  searchProducts(searchQuery: string): Observable<any[]> {
    return this.afs.collection('italok', ref => ref.where('nev', '==', searchQuery.toString())).valueChanges();
  }

  getItemsSortedByPriceDescending(): Observable<Drink[]> {
    return this.afs.collection<any>(this.collectionName, ref => ref.orderBy('ar', 'desc')).valueChanges();
  }

  getItemsSortedByPriceAscending(): Observable<Drink[]> {
    return this.afs.collection<any>(this.collectionName, ref => ref.orderBy('ar', 'asc')).valueChanges();
  }

}
