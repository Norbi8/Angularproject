import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../shared/services/drink.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'] // Note: Use styleUrls instead of styleUrl
})
export class DrinkComponent implements OnInit {
  chosenImage: any;
  loadedImages: any[]=[];
  allProducts:any[]=[];
  searchQuery:string = '';
  loggedInUser?: firebase.default.User | null;

  loggedIn = false ;

  constructor(private authService:AuthService,private drinkService: DrinkService,private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.drinkService.getAll('__credits.json').subscribe((data: Array<any>) => {
      this.loadImage(data);
    });

    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      if(this.loggedInUser!==null){
          this.loggedIn=true;
      }
    }, error => {
     // console.error(error);
    })

  }

  loadImage(imageObject: any) {
    this.allProducts = imageObject;
    /*console.log(this.allProducts);
    if (imageObject) {
      for (let index = 0; index < imageObject.length; index++) {
        this.drinkService.loadImage(imageObject[index].imgurl).subscribe(data => {
          this.loadedImages?.push(data);
        });
      }
    }*/
  }

  sortdesc(){
    this.drinkService.getItemsSortedByPriceDescending()
      .subscribe((data: any[]) => {
        this.allProducts = data;
    });
  }

  sortasc(){
    this.drinkService.getItemsSortedByPriceAscending()
      .subscribe((data: any[]) => {
        this.allProducts = data;
    });
  }

  search() {
    if(this.searchQuery==''){
      this.drinkService.getAll('__credits.json').subscribe((data: Array<any>) => {
        this.loadImage(data);
      });
    }else{
      this.drinkService.searchProducts(this.searchQuery)
        .subscribe((data: any[]) => {
         this.allProducts = data;
        });
    }
  }

  deleteProduct(id:string){
    this.drinkService.delete(id)
      .then(() => {
        console.log('sikeres törlés');
      })
      .catch(error => {
        //console.error('sikertelen törlés', error);
      });
    
  }

}
