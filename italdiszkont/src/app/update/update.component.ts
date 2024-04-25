import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DrinkService } from '../shared/services/drink.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  updateForm = new FormGroup({
    nev: new FormControl(''),
    leiras: new FormControl(''),
    tipus: new FormControl(''),
    alkohol: new FormControl(''),
    ar: new FormControl(''),
    id : new FormControl(''),
    imgurl : new FormControl(''),
  });
  data : any ;
  
  constructor(private router:Router,private drinkService:DrinkService,private storage: AngularFireStorage,private afs:AngularFirestore,private route: ActivatedRoute ){}
  
  
  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      const productId = params['id'];
      
      if (productId) {
        this.loadProduct(productId); // Termék betöltése az ID alapján
      }
    });
  }

  loadProduct(productId: string) {
    this.drinkService.getDataById(productId).subscribe(product=>{
      if(product.exists){
        this.data = product.data();
        this.updateForm.patchValue(this.data); 
      }else{
        console.log('A termék nem található.');
      }
    });
  }


  update(){
    console.log(this.data);
    const updatedData = this.updateForm.value;
    this.drinkService.update(updatedData)
      .then(() => {
        console.log('sikeres frissítés');
        this.router.navigateByUrl('/drink') ;
      })
      .catch(error => {
        //console.error('sikertelen frissítés', error);
      });
    }
}
