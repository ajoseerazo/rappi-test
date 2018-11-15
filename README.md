
## Demo
La aplicación se puede ver corriendo en Heroku [aquí]([https://murmuring-chamber-91344.herokuapp.com/)

## Instalación
Para instalar el proyecto ejecutar

### `yarn install`
o
### `npm run install`


## Ejecución
Para ejecutar el proyecto ejecutar: 

### `yarn start`
  o
  ### `npm run start`

La aplicación correrá en modo de desarrollo.<br>

Abrir [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

  
## Solución

Para resolver el problema se decidió utilizar el framework ReactJS + Redux.

La base del proyecto se obtuvo usando `create-react-app` y luego se realizó un `eject` para modificar algunas cosas del webpack.

La aplicación se desarrolló a través de componentes presentacionales y contendores, conjuntamente con un manejador de estado a través de Redux.
Dado que los datos fueron proporcionados, no hubo la necesidad de realizar llamados de API's a backend. En caso de ser requerido se podría usar `redux-thunk` o  `redux-saga`. La aplicación se desarrolló de tal manera que incluir llamados a API's se puede realizar de una manera muy sencilla. 

Dado que no habia backend, la lógica de búsqueda y filtrados de datos requirió manipulación de arrays en el código para poder cumplir con los requerimientos establecidos, para lo cual se hizo uso de la librería `lodash` y ésta lógica fue agregada en el archivo `src/utils/index.js`

Se hizo deploy de la solución en [Heroku](https://murmuring-chamber-91344.herokuapp.com/) como demostración del funcionamiento de la misma. Dado que no había un diseño de referencia, se usaron algunos colores y layouts de la web de Rappi.



