# PrgBackPE

Alumno: Ing. Moises Alejandro Gonzalez Moran
Comision: 70215
Tutor: Geronimo Zamora

---

Objetivos de la coinsigna:

Se debe entregar:

1- Desarrollar el servidor basado en Node.JS y express, que escuche en el puerto 8080 y disponga de dos grupos de rutas: /products y /carts. Dichos endpoints estarán implementados con el router de express, con las siguientes especificaciones:

Para el manejo de productos, el cual tendrá su router en /api/products/ , configurar las siguientes rutas:

//[x]La ruta raíz GET / deberá listar todos los productos de la base. (Incluyendo la limitación ?limit del desafío anterior)

//[x]La ruta GET /:pid deberá traer sólo el producto con el id proporcionado

//[]La ruta raíz POST / deberá agregar un nuevo producto con los campos:

-id: Number/String (A tu elección), el id NO se manda desde body, se autogenera como lo hemos visto desde los primeros entregables, asegurando que NUNCA se repetirán los ids en el archivo.
{title:String,
-description:String
-code:String
-price:Number
-status:Boolean
-stock:Number
-category:String
}

thumbnails:Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto
Status es true por defecto.
Todos los campos son obligatorios, a excepción de thumbnails

//[x]La ruta PUT /:pid deberá tomar un producto y actualizarlo por los campos enviados desde body. NUNCA se debe actualizar o eliminar el id al momento de hacer dicha actualización.
//[x]La ruta DELETE /:pid deberá eliminar el producto con el pid indicado.

formato:
product: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo)
quantity: debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.

//[]Además, si un producto ya existente intenta agregarse al producto, incrementar el campo quantity de dicho producto.
La persistencia de la información se implementará utilizando el file system, donde los archivos “productos,json” y “carrito.json”, respaldan la información.
No es necesario realizar ninguna implementación visual, todo el flujo se puede realizar por Postman o por el cliente de tu preferencia.
