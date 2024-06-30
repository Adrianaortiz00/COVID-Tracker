# COVID tracker 🦠

## Índice

- [**Descripción**](#descripción)
- [**Objetivos del proyecto**](#objetivos-del-proyecto)
- [**Instalación**](#instalación)
  - [Requisitos previos](#requisitos-previos)
  - [Pasos para instalar el proyecto](#pasos-para-instalar-el-proyecto)
- [**Uso**](#uso)
  - [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)
  - [Ejemplos de uso](#ejemplos-de-uso)
- [**Estructura del Proyecto**](#estructura-del-proyecto)
- [**Funcionalidades**](#funcionalidades)
- [**Tecnologías Utilizadas**](#tecnologías-utilizadas)
- [**Contribución**](#contribución)
- [**Autores**](#autores)
- [**Capturas de Pantalla**](#capturas-de-pantalla)
- [**Licencia**](#licencia)

## Descripción

COVID tracker es un proyecto estudiantil cuyo objetivo es desarrollar con REACT el front-end de un dashboard de Gestión de Datos de Pandemias, con un enfoque inicial en el Covid-19. que muestra de manera dinámica la información de la API de Disease covimap. 

El diseño de la interfaz ha sido proporcionado por la empresa, por lo que en esta ocasión no será necesario realizar maquetas ni prototipos. Nos centraremos en la implementación del front-end siguiendo las especificaciones y el diseño proporcionado.

## Objetivos del Proyecto

- **Proporcionar una Plataforma Interactiva de Visualización de Datos:**

    - Permitir a los usuarios interactuar con gráficos y tablas que muestran datos relevantes sobre la pandemia.
    - Facilitar la comprensión y el análisis de datos a través de visualizaciones intuitivas y atractivas.

- **Análisis de Datos en Tiempo Real:**

    - Actualizar los datos de manera continua para reflejar la situación actual de la pandemia.
    - Ofrecer insights inmediatos que puedan ayudar en la toma de decisiones rápidas y basadas en datos.

- **Escalabilidad para Futuras Pandemias:**

    - Diseñar la plataforma de manera que pueda adaptarse y escalarse fácilmente para gestionar datos de futuras pandemias.
    - Asegurar que la infraestructura y el código sean flexibles para soportar diferentes tipos de datos y volúmenes de información.

## Instalación

### Requisitos previos

- Node.js: [Descargar Node.js](https://nodejs.org/)
- npm: Viene con la instalación de Node.js

### Pasos para instalar el proyecto

1. Clona el repositorio:
    ```bash
    git clone https://github.com/BettyLopo/Google-Store-React.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

### Cómo ejecutar el proyecto

1. Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```
2. Abre el local host en tu navegador para ver la aplicación.

### Ejemplos de uso

- Navega de la homepage al tracker 
- Filtra los datos por país, fecha, y otros parámetros relevantes.

## Estructura del Proyecto

```plaintext
/
├── public/
│   ├── images/
├── src/
│   ├── components/
│   ├── config/
│   ├── customHooks/
│   ├── data/
│   ├── layout/
│   ├── pages/
│   ├── router/
│   ├── services/
│   ├── styles/
│   ├── App.js
│   ├── index.js
├── README.md
├── package.json
└── tailwind.config.js

```
- **public/:**  Contiene archivos estáticos accesibles al público.
    - **images/:** Contiene imágenes utilizadas en la aplicación.
- **src/:** Contiene fonts utilizadas en la aplicación.
    - **assets/:** Contiene recursos estáticos como imágenes.
    - **components/:** Componentes reutilizables organizados por categorías (footer, general, home, sidebar, tracker).
    - **config/:** Archivos de configuración.
    - **customHooks/:** Hooks personalizados.
    - **data/:** Datos estáticos utilizados en la aplicación.
    - **layout/:** Componentes de layout.
    - **pages/:** Páginas de la aplicación organizadas por secciones.
    - **router/:** Configuración de rutas.
    - **services/:** Servicios y llamadas a la API.
    - **styles/:** Archivos de estilos.
    - **App.js:** Componente principal de la aplicación.
- **index.html:** Archivo HTML principal.
- **README.md:** Archivo de documentación del proyecto.
- **package.json:** Archivo de configuración del proyecto y dependencias.
- **tailwind.config.js:** Archivo de configuración de Tailwind CSS.



## Funcionalidades

- Barra de navegación que redirige a la páginas de los trackers.
- Menú desplegable en tamaño mobile.
- Cambio de color del ícono en el sidebar de los tracker en hoover y al seleccionar el tracker.
- Gráficos interactivos que muestran la evolución de casos. 
- Posibilidad de filtrar datos por país, fecha, y otros parámetros relevantes.
- Mapas que ilustran la distribución geográfica de los casos.
- Redirección a redes sociales desde el footer.
- Diseño responsive

## Tecnologías Utilizadas

- [HTML5](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS/CSS3)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React](https://reactjs.org/)
- [React simple maps](https://www.react-simple-maps.io/)
- [React Router](https://reactrouter.com/en/main/start/overview)
- [Vite](https://vitejs.dev/)
- [Themify Icons](https://themify.me/themify-icons)
- [Taildwind CSS](https://tailwindcss.com/docs/installation)
- [Disease API](https://disease.sh/) 
- [TanStack](https://tanstack.com/)
- [Vitest](https://vitest.dev/guide/)
- [Modal]( https://flowbite-react.com/docs/components/modal)


## Contribución

Nos encanta recibir contribuciones de la comunidad. Si deseas contribuir, por favor sigue estas pautas:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica
```bash
git checkout -b feature/nueva-caracteristica
```
3. Haz commit de tus cambios
```bash
git commit -m 'Añadir nueva característica'
```
4. Haz push a la rama
```bash
git push origin feature/nueva-caracteristica
```
5. Abre un Pull Request.

Por favor, asegúrate de seguir el [Código de Conducta de GitHub](https://docs.github.com/en/github/building-a-strong-community/code-of-conduct).

## Developers 

- [Isabel Afonso](https://github.com/IsaLagu)
- [Adriana Aguirre](https://github.com/Adrianaortiz00)
- [Rebeca García](https://github.com/rebkg87)
- [Laura Gil](https://github.com/LauraGDev)
- [Eugenia Saravia](https://github.com/Euge-Saravia)

## Capturas de Pantalla 

![Screenshot 2024-06-28 140824](https://github.com/Adrianaortiz00/COVID-Tracker/assets/168748252/099b0315-7785-48c5-9c4f-8d7f040cb850)
![Screenshot 2024-06-28 151724](https://github.com/Adrianaortiz00/COVID-Tracker/assets/168748252/05c6ad0a-edd7-4958-8884-2fa99895885f)

## Licencia

Puedes copiar y pegar este contenido en tu archivo `README.md` y ajustarlo según sea necesario. ¡Buena suerte con tu proyecto!


