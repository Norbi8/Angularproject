import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DrinkService } from '../shared/services/drink.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  selectedFile!: File;
  addForm = new FormGroup({
    nev: new FormControl(''),
    leiras: new FormControl(''),
    tipus: new FormControl(''),
    alkohol: new FormControl(''),
    ar: new FormControl(''),
    id : new FormControl(''),
    imgurl : new FormControl(''),
  });

  constructor(private router: Router,private drinkService:DrinkService,private storage: AngularFireStorage,private afs:AngularFirestore ){}

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }

  upload(){
    const id = this.afs.createId();
    this.addForm.controls['id'].setValue(id);
    this.addForm.controls['imgurl'].setValue(id);

    this.drinkService.create(this.addForm.value).then(_ =>{
      this.router.navigateByUrl('/drink') ;
    }).catch(error=>{
      //console.error(error);
    });

    /*this.drinkService.uploadImage(this.addForm.value,this.selectedFile).subscribe(
      () => {
        console.log("Fájl sikeresen feltöltve!");
      },
      (error: any) => {
        console.error("Hiba történt a fájl feltöltése közben:", error);
      }
    );*/
  }


}
