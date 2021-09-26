# Vehiculos

Pasos en la creación del proyect.

1.- ng new vehiculos
2.- se vacia el HTML del componente principal
3.- se instala y configura json-server
4.- se define el modelo de objetos JSON en db.json
5.- se define el modelo de datos en nuestra aplicación: vehiculo.ts
6.- preparo algunas dependencias. En el modulo principal (AppModule) incorporo: 
    
    - ReactiveFormsModule (para controlar los formulatrios)
    - HttpClientModule (para poder programar mi cliente HTTP)

7.- programo en environment.ts la URL (http://localhost:3000)
8.- creo un nuevo servicio (vehiculo.service.ts) para los servicios Http con vehiculos (ng g s services/vehiculo)

9.- creamos el componente listado-vehiculos.component.ts (ng g c components/listado-vehiculos)
10.- "pintamos" el ListadoVehiculosComponent en el componente principal. Luego ya se programarán las rutas...
11.- programamos el ListadoVehiculosComponent y nos aseguramos de que los datos lleguen. (en esta fase va muy bien utilizar el pipe json. ejemplo: {{vehiculos | json}})
12.- Ahora que llegan los datos, vamos a pintarlos en una tabla de HTML (más o menos bien)

13.- creamos el componente alta-vehiculo.component.ts (ng g c components/alta-vehiculo)
14.- creamos el componente home.component.ts (ng g c components/home)

14.- configuramos las rutas y el sistema de navegación en el AppComponent (nos podemos basar en pedigest)

15.- programamos el componente de altas (AltaVehiculoComponent). Nos podemos basar en el alta de productos de pedigest









