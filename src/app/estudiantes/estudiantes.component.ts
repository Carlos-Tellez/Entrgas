import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
    arrayEstudiante: any[] = [
      {
        perfil : "Profile (1).jpg",
        nombre : "Shinobu Makanochi",
        curso : "Decimo 10-1",
        materiaApr : "8",
        materiaRep : "2"

      },

      {
        perfil : "Profile (2).jpg",
        nombre : "Kakashi Hatake",
        curso : " Once 11-1",
        materiaApr : "9",
        materiaRep : "1"

      },

      {
        perfil : "Profile (3).jpg",
        nombre : "Sakura ",
        curso : " Noveno 9-1",
        materiaApr : "7",
        materiaRep : "3"

      },

      {
        perfil : "Profile (4).jpg",
        nombre : "Zoro Roronoa",
        curso : " Octavo 8-1",
        materiaApr : "10",
        materiaRep : "0"

      },

      {
        perfil : "Profile (5).jpg",
        nombre : "Luffy",
        curso : "Octavo 8-1",
        materiaApr : "6",
        materiaRep : "4"

      },
      {
        perfil : "Profile (6).jpg",
        nombre : "Nammi",
        curso : " Decimo 10-1",
        materiaApr : "10",
        materiaRep : "0"

      },

    ]
}
