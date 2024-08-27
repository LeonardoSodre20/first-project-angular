import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = 'Leonardo Vieira Sodré'
  age = 23
  urlOnePiece = 'https://wallpapers.com/images/hd/one-piece-pictures-bjm9tdff9yzguoup.jpg'
  taskList: string[] = []


  insertNewTask(newTask: string) {
    return this.taskList = [...this.taskList, newTask]
  }
}
