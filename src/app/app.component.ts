import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello, World</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'basics';
  imgURL = 'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'
  name = 'kehinde';
  images = [
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300/?blur',
    'https://picsum.photos/id/870/200/300?grayscale&blur=2'
  ]
  currentDate = new Date()
  cost = 2000
  temp = 25.3
  pizza = {
    toppings:['Garri', 'Beans', 'Dodo']
  }
  blueClass = false
  // greenClass = 
  fontSize = 16

  // currentDate = 

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string){
    console.log(event)

  }
}
