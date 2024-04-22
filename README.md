# PWA_REACT

## Proyecto To-Do List

### Descripción:
Esta aplicación de lista de tareas fue desarrollada como parte de un trabajo práctico para la asignatura de Programación Web Avanzada en la Universidad Nacional del Comahue. 
La aplicación permite a los usuarios agregar tareas, modificar el estado de las mismas y eliminarlas.

## Desarrolladores:
* Exequiel Calderon FAI-4432
* Jonathan Alveal FAI-3581

## Guia de Instalación:
### Requisitos Previos:
Asegúrate de tener instalado Git y Node.js. Puedes ejecutar los siguientes comandos en tu terminal:

* Para verificar la versión de Node.js (Usaremos la versión 10 o superior):
``` bash
node -v
```
* Para verificar la versión de Git:
``` bash
git --version
```
Si no tienes instalado alguno de estos requisitos, puedes descargarlos e instalarlos desde los siguientes enlaces:
* [Descargar Node.js](https://nodejs.org/en/download)
* [Descargar Git](https://git-scm.com/downloads)

### Instalación del Proyecto

1. Clona este repositorio. Abre tu terminal en la carpeta deseada y ejecuta el siguiente comando:
``` bash
git clone https://github.com/CalderonExe22/react-pwa.git
```
2. Accede al directorio del proyecto ejecutando el siguiente comando:
``` bash
cd react-pwa
```
3. Instala las dependencias del proyecto ejecutando el siguiente comando:
``` bash
npm install
```
4. Una vez completada la instalación de las dependencias, puedes iniciar el proyecto ejecutando:
``` bash
npm start
```

## Función de Archivos Iniciales:
### index.js:

El archivo "index.js" es el primer punto de contacto de una aplicación React, un marco de trabajo popular para la construcción de interfaces web interactivas. Su función principal es llevar a cabo el proceso de mostrar el componente principal de la aplicación dentro del navegador. Generalmente, este componente principal es conocido como <App />, aunque su identificación puede variar dependiendo de la configuración específica del proyecto. En términos simples, "index.js" inicia la aplicación React y asegura que se integre sin problemas con la estructura HTML proporcionada por el navegador.
### index.css:

El archivo "index.css" en un proyecto de React cumple un papel fundamental en la definición y aplicación de estilos para la interfaz de usuario de la aplicación. Se encarga de establecer reglas de estilo globales que afectan a toda la aplicación, como configuraciones de fuentes, márgenes, espaciados y colores de fondo. Además, puede contener reglas para normalizar estilos entre diferentes navegadores, asegurando una apariencia coherente en diversas plataformas y dispositivos. Este archivo también puede incluir estilos específicos para el componente principal de la aplicación, como el componente "App.js", así como importar otros archivos CSS que contienen estilos adicionales para componentes individuales o módulos de la aplicación.
### App.js:

El archivo "App.js" en un proyecto de React es el componente principal que organiza la estructura y la lógica de la interfaz de usuario de la aplicación. Actúa como el punto central donde se definen y se organizan otros componentes para construir la aplicación. Además de ser responsable del renderizado de componentes hijos, "App.js" puede gestionar el enrutamiento, el estado global y los eventos que afectan a toda la aplicación.
### package.json:

El archivo "package.json" es un archivo de configuración esencial en un proyecto de React que se utiliza para gestionar las dependencias, scripts y metadatos del proyecto. Funciona como un punto central de control, especificando las dependencias necesarias para la aplicación, incluidas sus versiones exactas o rangos permitidos. Además, permite definir scripts personalizados que automatizan tareas comunes de desarrollo, como la ejecución del servidor de desarrollo o la construcción de la aplicación para producción. Este archivo también contiene metadatos del proyecto, como el nombre, la descripción, el autor y la versión, proporcionando información importante sobre el proyecto.

## Documentación Relevante

### Función `handleDeleteTask` que se encuentra en el Archivo `ListarTareas.jsx`:
![handleDeleteTask](https://github.com/CalderonExe22/react-pwa/assets/94760108/12de5dc6-e5e3-449d-b521-07bf643e4b67)
Función que elimina una tarea en especifico, llamada en el evento `onclick` de los botones eliminar. Se utiliza el método `filter()` para crear un nuevo arreglo de tareas que excluye la tarea con el id especificado `(taskId)`. Este método recorre todas las tareas en la lista y solo mantiene aquellas cuyo id sea diferente al `taskId` proporcionado. Se setan las tareas filtradas y se setean las tareas atraves del set que ingresa por parametros.

### Función `handleDragStart` que se encuentra en el Archivo `Estados.jsx`:
![handleDragStart](https://github.com/CalderonExe22/react-pwa/assets/94760108/3a9a162e-8933-4eba-a4d0-c487c14a1129)
Esta función se activa cuando comienza un evento de arrastre `(dragstart)` en un elemento que tiene la propiedad `draggable` establecida en `true`, como las tarjetas de tarea TarjetasTask el método `setData()` del objeto `dataTransfer` del evento para establecer datos que serán transferidos durante el evento de arrastre. En este caso, estamos configurando un dato con la clave `taskId` y el valor `taskId`, que es el identificador único de la tarea que se está arrastrando de forma predeterminada.

### Función `handleDragOver` que se encuentra en el Archivo `Estados.jsx`:
![handleDragOver](https://github.com/CalderonExe22/react-pwa/assets/94760108/fc06c162-e294-4a84-a763-1b482f3a9d99)
Esta función se crea ya que los navegadores no permiten soltar elementos en otras áreas. Por eso llamamos a un `preventDefault` para que el elemento arrastrable se suelte en el área que está escuchando eventos de `dragover`.

### Función `handleDrop` que se encuentra en el Archivo `Estados.jsx`:
![handleDrop](https://github.com/CalderonExe22/react-pwa/assets/94760108/c6d32fe4-4ad0-44fe-8c48-2b7194872458)
Esta función se activa cuando se suelta un elemento arrastrable sobre un área del evento drop. Dentro de la función, primero obtenemos el identificador único de la tarea que se está soltando utilizando el método `getData()` del objeto `dataTransfer` del evento. Este identificador se había establecido previamente en la función `handleDragStart`. Luego, actualizamos el estado de las tareas utilizando el método `map()` para recorrer todas las tareas. Si el identificador de la tarea coincide con el `taskId` obtenido del evento de soltar, actualizamos el estado de esa tarea con el estado proporcionado `(completed)`. De lo contrario, dejamos la tarea sin cambios.