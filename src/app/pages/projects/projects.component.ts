import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    list: any = [
      {
        image: 'assets/brasil.jpg',
        title: 'cristo redentor',
        pais: 'brasil'
      },
      {
        image: 'assets/francia2.jpg',
        title: 'torre ',
        pais: 'francia'
      },
      {
        image: 'assets/obelisco2.jpg',
        title: 'obelisco',
        pais: 'argentina'
      },
    ]
}
