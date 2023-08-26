# Frontend de Foro - Documentación

Este es el frontend de un foro construido utilizando Angular y TypeScript. El frontend interactúa con el backend implementado en Node.js y MongoDB para proporcionar una experiencia completa de la aplicación.

## Estructura del Proyecto

La estructura del proyecto frontend se organiza de la siguiente manera:

- `angular/`: Contiene el proyecto Angular.
- `node_modules/`: Contiene las dependencias del proyecto.
- `src/`: Directorio fuente del proyecto Angular.
  - `app/`: Contiene componentes y archivos relacionados con la aplicación.
    - `app-routing.module.ts`: Definición de rutas de la aplicación.
    - `app.component.css`, `app.component.html`, `app.component.spec.ts`, `app.component.ts`: Componente principal de la aplicación.
    - `app.module.ts`: Módulo principal de la aplicación.
    - `core/`: Contiene componentes y servicios compartidos.
      - `aside/`: Componente del menú lateral.
      - `header/`: Componente de la cabecera.
      - `services/`: Contiene servicios compartidos.
      - `core.module.ts`: Módulo central para importar servicios y componentes compartidos.
    - `models/`: Contiene definiciones de modelos de datos.
      - `item.ts`: Interfaz para los datos que se importan desde el backend.
    - `pages/`: Contiene las páginas principales de la aplicación.
      - `home/`, `login/`, `profile/`, `register/`: Carpetas de componentes para cada página.
      - `pages.module.ts`: Módulo para importar y declarar las páginas de la aplicación.
  - `favicon.ico`, `index.html`, `main.ts`, `style.css`: Archivos principales de la aplicación.
  
- `.editorconfig`: Archivo para definir las configuraciones del editor.
- `.gitignore`: Archivo para especificar archivos y carpetas que deben ser ignorados por Git.
- `angular.json`: Archivo de configuración de Angular.
- `package-lock.json` y `package.json`: Archivos de gestión de dependencias.
- `tsconfig.app.json`, `tsconfig.json`, `tsconfig.spec.json`: Archivos de configuración de TypeScript.

## Uso y Despliegue

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona este repositorio en tu máquina.
3. Navega a la carpeta del proyecto y ejecuta `npm install` para instalar las dependencias.
4. Utiliza el comando `ng serve` para iniciar el servidor de desarrollo.
5. Abre tu navegador y ve a `http://localhost:4200` para acceder a la aplicación en desarrollo.

## Componentes

- `home`: Página de inicio que muestra publicaciones y actividades recientes.
- `login`: Página de inicio de sesión para usuarios registrados.
- `profile`: Página de perfil de usuario con información personal y actividades.
- `register`: Página de registro para nuevos usuarios.

## Contribuciones

Si deseas contribuir a este proyecto, ¡estamos abiertos a pull requests! Asegúrate de seguir las mejores prácticas de desarrollo de Angular y TypeScript.

## Contacto

Si tienes preguntas o sugerencias, no dudes en ponerte en contacto con el equipo de desarrollo en [correo: elhuxley277@gmail.com,Maribelaristizabal079@gmail.com,sebastiantincon834@gmail.com,jaljordan77@gmail.com,palacioalexander5@gmail.com,ruizvalencia78@gmail.com,brayantandap@gmail.com].

---
Proyecto desarrollado por [Heisenberg Diaz,Maribel saaavedra,Alexander Palacio,Nicolas paez,Sebastian Beltran,Juan Ruiz,Brayan/ Foopo].

