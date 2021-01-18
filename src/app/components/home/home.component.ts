import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = false
  public cards: {
    image: string;
    title: string;
    subtitle: string;
    content: string;
  }[] = [
      {
        image: 'https://2.bp.blogspot.com/-hdaftqVwPe0/VLffgk0CAfI/AAAAAAAABss/fvIb7mhWAFI/s1600/Shen_OriginalSkin.jpg',
        title: 'Shen',
        subtitle: 'El ojo del crepusculo',
        content: 'Shen, un enigma tanto para el reina espiritual como el reino mortal, no pertenece a ninguno. A pesar de haber nacido en una de las familias mas veneradas del norte de Navori, fuel el rol de padre como Ojo del Crepusculo lo que verdaderamente fijo su destino en la orden Kinkou. Como hijo del gran maestro Kusho, estaba inmerso en la cultura de la orden y sus principios fundamentales eran tan familiares para el como un atardecer en Jonia. Conocio la necesidad de podar el arbol, la determinacion de recorrer el sol, pero sobre todo, aprendio la sabiduria de observar las estrellas. Medito y estudio durante toda su infancia, siendo considerado un alumno ejemplar por todos sus maestros.'
      },
      {
        image: 'https://2.bp.blogspot.com/-hdaftqVwPe0/VLffgk0CAfI/AAAAAAAABss/fvIb7mhWAFI/s1600/Shen_OriginalSkin.jpg',
        title: 'Shen',
        subtitle: 'El ojo del crepusculo',
        content: 'Shen, un enigma tanto para el reina espiritual como el reino mortal, no pertenece a ninguno. A pesar de haber nacido en una de las familias mas veneradas del norte de Navori, fuel el rol de padre como Ojo del Crepusculo lo que verdaderamente fijo su destino en la orden Kinkou. Como hijo del gran maestro Kusho, estaba inmerso en la cultura de la orden y sus principios fundamentales eran tan familiares para el como un atardecer en Jonia. Conocio la necesidad de podar el arbol, la determinacion de recorrer el sol, pero sobre todo, aprendio la sabiduria de observar las estrellas. Medito y estudio durante toda su infancia, siendo considerado un alumno ejemplar por todos sus maestros.'
      },
      {
        image: 'https://2.bp.blogspot.com/-hdaftqVwPe0/VLffgk0CAfI/AAAAAAAABss/fvIb7mhWAFI/s1600/Shen_OriginalSkin.jpg',
        title: 'Shen',
        subtitle: 'El ojo del crepusculo',
        content: 'Shen, un enigma tanto para el reina espiritual como el reino mortal, no pertenece a ninguno. A pesar de haber nacido en una de las familias mas veneradas del norte de Navori, fuel el rol de padre como Ojo del Crepusculo lo que verdaderamente fijo su destino en la orden Kinkou. Como hijo del gran maestro Kusho, estaba inmerso en la cultura de la orden y sus principios fundamentales eran tan familiares para el como un atardecer en Jonia. Conocio la necesidad de podar el arbol, la determinacion de recorrer el sol, pero sobre todo, aprendio la sabiduria de observar las estrellas. Medito y estudio durante toda su infancia, siendo considerado un alumno ejemplar por todos sus maestros.'
      },
      {
        image: 'https://2.bp.blogspot.com/-hdaftqVwPe0/VLffgk0CAfI/AAAAAAAABss/fvIb7mhWAFI/s1600/Shen_OriginalSkin.jpg',
        title: 'Shen',
        subtitle: 'El ojo del crepusculo',
        content: 'Shen, un enigma tanto para el reina espiritual como el reino mortal, no pertenece a ninguno. A pesar de haber nacido en una de las familias mas veneradas del norte de Navori, fuel el rol de padre como Ojo del Crepusculo lo que verdaderamente fijo su destino en la orden Kinkou. Como hijo del gran maestro Kusho, estaba inmerso en la cultura de la orden y sus principios fundamentales eran tan familiares para el como un atardecer en Jonia. Conocio la necesidad de podar el arbol, la determinacion de recorrer el sol, pero sobre todo, aprendio la sabiduria de observar las estrellas. Medito y estudio durante toda su infancia, siendo considerado un alumno ejemplar por todos sus maestros.'
      },
      {
        image: 'https://2.bp.blogspot.com/-hdaftqVwPe0/VLffgk0CAfI/AAAAAAAABss/fvIb7mhWAFI/s1600/Shen_OriginalSkin.jpg',
        title: 'Shen',
        subtitle: 'El ojo del crepusculo',
        content: 'Shen, un enigma tanto para el reina espiritual como el reino mortal, no pertenece a ninguno. A pesar de haber nacido en una de las familias mas veneradas del norte de Navori, fuel el rol de padre como Ojo del Crepusculo lo que verdaderamente fijo su destino en la orden Kinkou. Como hijo del gran maestro Kusho, estaba inmerso en la cultura de la orden y sus principios fundamentales eran tan familiares para el como un atardecer en Jonia. Conocio la necesidad de podar el arbol, la determinacion de recorrer el sol, pero sobre todo, aprendio la sabiduria de observar las estrellas. Medito y estudio durante toda su infancia, siendo considerado un alumno ejemplar por todos sus maestros.'
      }
    ];

  constructor() { }

  ngOnInit(): void { }

}
