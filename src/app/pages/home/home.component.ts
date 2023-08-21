import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { ForoService } from 'src/app/core/service/foro.service';
import { Home } from 'src/app/models/item'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: '<app-home (addModel) = "receiveData($event)>"</app-home>',
})
export class HomeComponent {
  constructor(private ForoService: ForoService){}

  title = 'home';
  public listpublications: any = []


  ngOnInit():void{
    this.loadData()
  }

  public loadData(){
    this.ForoService.getTask('https://pooforoapi.onrender.com/publictpoofo/')
    .subscribe(data =>{
      console.log(data)
      this.listpublications = data
    })
  }
}
