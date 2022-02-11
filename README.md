# Cocinas

## El objetivo.
### Crear un formulario y almacenar los datos recogidos.

## Pasos en la creación del proyect.

### 1.- ng new cocinas

### 2.- se vacia el HTML del componente principal

### 3.- se instala y configura json-server

### 4.- se define el modelo de objetos JSON en db.json

### 5.- se define el modelo de datos en nuestra aplicación: cocina.ts

### 6.- preparo algunas dependencias. En el modulo principal (AppModule) incorporo: 
    
    - ReactiveFormsModule (para controlar los formulatrios)
    - HttpClientModule (para poder programar mi cliente HTTP)

### 7.- programo en environment.ts la URL (http://localhost:3000/api/cocinas) para nuestro proyecto y se levanta con npm run api.

### 8.- creo un nuevo servicio (cocina.service.ts) para los servicios Http con vehiculos (ng g s services/cocina)

### 9.- creamos el componente listado-cocinas.component.ts (ng g c components/listado-cocinas)

### 10.- "pinto" el ListadoCocinasComponent en el componente principal. Luego ya se programarán las rutas...

### 11.- programo el ListadoCocinasComponent y me aseguro de que los datos lleguen. (en esta fase va muy bien utilizar el pipe json. ejemplo: {{cocinas | json}})

### 12.- Ahora que llegan los datos, voy a pintarlos en una tabla de HTML 

### 13.- creo el componente alta-cocina.component.ts (ng g c components/alta-cocina)

### 14.- creo el componente home.component.ts (ng g c components/home)

### 14.- configuro las rutas y el sistema de navegación en el AppComponent 

### 15.- programo el componente de altas (AltaCocinaComponent).

## Listado de cocinas

![cocina](https://github.com/danideveloperweb/Portfolio/blob/main/src/assets/img/cocina.JPG)

## Alta cocinas

![cocina2](https://github.com/danideveloperweb/Portfolio/blob/main/src/assets/img/cocina2.JPG)

## Tecnologías
#### Angular 12,  javascript,  Typescript,  css,  html.

## Despliegue
### Cuando se baje el repositorio necesitara instalar el npm install.

### Autor
#### Daniel Guillen







