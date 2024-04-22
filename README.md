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