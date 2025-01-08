### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

En el proyecto nos encontramos con 3 componentes simples y modularizados que manejan la lógica y view del proyecto

-El ListaTareas que se encarga de listar los elementos y displayear el header con sus funciones para el correcto funcionamiento

-El HeaderTareas que es la sección de botón agregar e input modularizado para futuras modificaciones sobre el header

-El ItemLista, también una modularizacion de los elementos que luego se dispayean sobre el componente ListaTareas


La idea es que sea fácil de leer y de mantener, sin que tampoco sea una infinita minimalizacion de los componentes teniendo sentido y cohesión en las tareas que le corresponde a cada uno 

Por el lado del testing, se generaron 3 unit test para cada componente en el que se testean las tareas esenciales de cada componente. Se utilizó la librería react testing library para hacer los mismos

Con respecto al manejo de estados, se optó por mantener los estados locales sin utilizar una herramienta de manejo de estado global, ya que para el tamaño de la app y las funciones que tenía, hubiera sido redundante utilizar alguna herramienta como context o redux. Sin embargo se agregó como adicional un local storage que permitiese al usuario poder cerrar el navegador y abrirlo o 
actualizar la página y poder seguir manteniendo la lista de tareas con sus estados. Transformándolo en una funcionalidad más simple y acorde al tamaño del proyecto

Si bien es una aplicación muy sencilla se abordaron elementos como un listener en el header para permitir tener un evento con la tecla enter y facilitar la interacción del usuario
Utilicé tailwind como herramienta de css, ya que soluciona muchos estilos y los estandariza para que toda la app tenga una misma línea de estilo


Como buenas prácticas podemos nombrar:
La modularizacion de los elementos para su facilidad de uso y lectura

Un diseño responsivo gracias a tailwind 

Mejoras de accesibilidad como aria-label en los botones para lectores de pantalla

Testing sobre las funcionalidades principales(en estas encontramos test desde que se haya encontrado el clic, que se hayan eliminado los elementos cuando debieran o que correctamente se llame al localstorage . Todas tareas que buscan encontrar errores en su 
funcionalidad individual)

Se documentó extra solo en las funciones que podían llegar a ser menos autoexplicativas

Lo más demandante fue estilizarlo para que fuese intuitivo pero sin ser demasiado simple
