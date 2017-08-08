## Decoradores

Los decoradores son declaraciones en forma de función que pueden ser aplicados a clases, métodos, propiedades, accesores (get, set) y parámetros. Se puede aplicar más de un decorador a una expresión y cumplen con el principio de composibilidad. Los decoradores usan la nomenclatura `@nombre` y pueden o recibir parámetros:

```typescript
( @f · @g )(x) == @f( @g(x) ) != ( @g · @f )(x) == @g( @f(x) )
```

Los decoradores también pueden ser usados de forma "vertical"

```typescript
@f
@g
class X {}
```

No es objetivo de esta inducción revisar en detalle el funcionamiento interno de los decoradores, sin embargo es necesario familiarizarse con el concepto ya que son ampliamente usados en Angular para declarar componentes, directivas, servicios entre otras `API`s internas del framework:

Por ejemplo: 

```typescript
@Component({
  selector: 'app-component',
  template: `
    <h1 class="title"
        #item>
      {{ title }}
    </h1> 
  `
})
export class AppComponent {
  @Input() title: string;
  @ViewChild('item') itemElement: ElementRef;
  
  @HostListener('click', ['$event'])
  doSomethingOnTitleClick() {
    // ...
  };
}
```

