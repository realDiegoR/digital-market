<h1 align="center" id="title">Digial Market - Frontend</h1>

<p id="description">💻 Aplicación Frontend de Digital Market</p>


<h2>🛠️ Pasos de instalación:</h2>

<p>1. Clone el repositorio en su máquina local utilizando claves SSH.</p>

```
git clone git@github.com:realDiegoR/digital-market.git
```

<p>2. Instalar dependencias utilizando el gestor de paquetes PNPM.</p>

```
pnpm install
```

<p>3. Iniciar un entorno de desarrollo y comenzar a realizar cambios.</p>

```
pnpm dev
```  

<h2>📂 Estructura de carpetas</h2>

* <code>.husky/</code>: incluye los "git hooks" del repositorio. Son comandos que se ejecutan antes o después de un comando de git para asegurar que se siguen protocolos en el desarrollo. Por ejemplo, correr <code>eslint</code> antes de un commit.
* <code>public/</code>: archivos que no serán manipulados por Vite. Serán utilizados "como son". Por ejemplo, el archivo <code>favicon.ico</code>.
* <code>.env / .env.example</code>: el archivo .env almacena variables secretas de la aplicación que nadie debe conocer, como podría ser una llave secreta de una API. Como este archivo no se sube al repositorio, debes crearlo tú mismo y rellenar su contenido. El archivo <code>.env.example</code> contiene el nombre de todas las variables que deberías tener en tu archivo <code>.env</code> local.
* <code>src/</code>.
  * <code>common/</code>: componentes pequeños y reutilizables en toda la aplicación. No poseen lógica, comúnmente llamados "stateless".
  * <code>components/</code>: componentes medianos y reutilizables en toda la aplicación. Poseen lógica para el correcto funcionamiento de la aplicación, comunnmente llamados "stateful".
  * <code>layouts/</code>: componentes que representan una maquetación reutilizable por varias páginas.
  * <code>pages/</code>: componentes que representan el contenido de una URL.
  * <code>hooks/</code>: custom hooks que abstraen lógica de la aplicación de los componentes.
  * <code>stores/</code>: stores que almacenan los estados globales de la aplicación.
  * <code>main.jsx</code>: archivo de entrada de la aplicación. A partir de él se renderiza toda la aplicación cuando se ejecuta <code>pnpm dev/</code> o <code>pnpm build/</code>.
  * <code>main.css</code>: único archivo CSS de toda la aplicación. Importa todas las clases de Tailwind que se usarán posteriormente.

<h2>⚙️ Flujo de trabajo con GitHub</h2>

<h3>Nombre de commits</h3>

Los commits deben ser escritos bajo la convención Conventional Commits. Este <a href="https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/">artículo</a> lo describe muy bien.

Los nombres de las ramas deben seguir esta convención también. Los dos puntos (:) se reemplazan por un slash (/). 

Esta convención ayuda mucho a entender el propósito de cambios y modificaciones.

<h4>Ejemplo</h4>

* Rama que arregla un typo en la página de Home: <code>fix/typo in homepage</code>
* Commit que agrega un nuevo componente: <code>feat: add button component</code>

<h3>Marco de trabajo para trabajar en el código</h3>

Para crear y modificar código en este proyecto, se debe seguir el marco de trabajo llamado <a href="https://docs.github.com/es/get-started/quickstart/github-flow">GitHub Flow</a>.<h4>

<h4>Reglas a resaltar sobre el GitHub Flow</h4>

* Nunca hacer ningún cambio en la rama main. Para hacer cualquier tipo de cambio al código, se debe crear una rama nueva de git.
* Ninguna rama debe ser "mergeada" manualmente a la rama main. Cuando una rama esté lista para ser integrada al proyecto, se debe hacer un push de la rama hacia el repositorio remoto y crear una <a href="https://docs.github.com/es/pull-requests">Pull Request</a>.
* Cada Pull Request (PR) debe ser revisada por los miembros del equipo utilizando las herramientas de GitHub. Si se aprueban los cambios, la rama puede ser mergeada a la rama main.
* Cada rama y Pull Request debe cumplir con un solo proposito en especifico. No es el deber ser que en una rama hayan demasiados cambios y nuevo código. Eso puede ser una señal de que se están haciendo muchas cosas distintas en una sola rama.

<h2>💻 Construido con</h2>

Tecnologías utilizadas en el proyecto:

* React.js → Librería UI.
* React Router DOM → Manejador del enrutamiento y la transferencia de datos entre páginas.
* Tailwind CSS → Framework de CSS. Es altamente personalizable y basado en utility-classes.
* Vite.js → Empaquetador de módulos.
* ESLint → Code linting
* Prettier → Formateo de código
* Husky → Git Hooks
