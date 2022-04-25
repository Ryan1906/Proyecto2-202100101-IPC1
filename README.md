# Proyecto2-202100101-IPC1
## Tabla de Datos
| Nombre | Ryan José Rodrigo Sigüenza Huertas |
| ------ | ------ |
| Auxiliar |  Javier Oswaldo Mirón Cifuentes |
| Sección |  F |
| Carnet | 202100101 |


## Frontend
Para crear el front end de mi proyecto, fue necesario el uso de las siguientes tecnologías y programas:
- Angular
Angular, fue el framework utilizado, para llevar acabo la parte del front end, donde se generaron archivos, html, css y typescript, los cuales se editaron de manera que la pagina web funcionara de la manera que se necesitaba

#### Manual de uso

![Pojkede1](https://user-images.githubusercontent.com/98917762/165005006-4c9ae91b-f2b5-469b-9e79-cf9725d04325.png)


- Home Page

En nuestra Home page, se pueden observar los distintos pokemones en los cuales se detallan con su nombre, tipo, ataque, y una imagen de referencia, de los cuales podemos tomar en cuenta para poder buscarlos por medio de un cuadro de texto ubicado en la parte superior de la pagina, permitiendo así, buscar pokemones por medio de su nombre, número de pokemón y por tipo.




## Backend
El módulo utilizado para el desarrollo del back end, fue node.js, el cual nos permitió agregar constantes que luego se mandarían a un servidor con formato JSON, para luego poder ser consumida por el front end.
En este proyecto se utilizó el servidor 3000, el cual nos permitió subir todos lo objetos necesarios para llenar la página.

- Endpoint (tipo): Se hizo un endpoint en el cual se filtraba la información de los pokemones por el tipo de pokemón, el cual se divide en: Planta, fuego y agua. Los endpoint, se construyen de la siguiente manera: http://localhost:3000/api/v1/pokemones/("TipodePokemon")
 - Endpoint (Numero): Se hizo un endpoint en el cual se filtraba la información de los pokemones por el numero de pokemon, para construir este endpoint, se hace de la siguiente manera: http://localhost:3000/api/v1/pokemones/("NumerodePokemon")
 -  Endpoint (Nombre): Se hizo un endpoint en el cual se filtraba la información de los pokemones por el nombre de pokemon, para construir este endpoint, se hace de la siguiente manera: http://localhost:3000/api/v1/pokemones/("NombredePokemon")
