<h1 align="center" id="title">Digital Market - Frontend</h1>

<p id="description">💻 Aplicación Frontend de Digital Market</p>


<h2>🛠️ Pasos de instalación:</h2>

<p>1. Clone el repositorio en su máquina local utilizando claves SSH.</p>

```
git clone git@github.com:realDiegoR/digital-market.git
```

<p>2. Instalar dependencias utilizando el gestor de paquetes PNPM. Si no lo tienes instalado, esta es la <a href='https://pnpm.io/installation'>guía oficial</a>.</p>

```
pnpm install
```

<p>3. Iniciar un entorno de desarrollo y comenzar a realizar cambios.</p>

```
pnpm dev
```  

<h2>📂 Estructura de carpetas</h2>

* <code>.github/</code>: incluye datos de configuración del repositorio remoto, como por ejemplo correr pruebas automatizadas.
* <code>.husky/</code>: incluye los "git hooks" del repositorio. Son comandos que se ejecutan antes o después de un comando de git para asegurar que se siguen protocolos en el desarrollo. Por ejemplo, correr <code>eslint</code> antes de un commit.
* <code>public/</code>: archivos que no serán manipulados por Vite. Serán utilizados "como son". Por ejemplo, el archivo <code>favicon.ico</code>.
* <code>.env / .env.example</code>: el archivo .env almacena variables secretas de la aplicación que nadie debe conocer, como podría ser una llave secreta de una API. Como este archivo no se sube al repositorio, debes crearlo tú mismo y rellenar su contenido. El archivo <code>.env.example</code> contiene el nombre de todas las variables que deberías tener en tu archivo <code>.env</code> local.
* <code>src/</code>
  * <code>common/</code>: componentes pequeños y reutilizables en toda la aplicación. No poseen lógica, comúnmente llamados "stateless".
  * <code>components/</code>: componentes medianos y reutilizables en toda la aplicación. Poseen lógica para el correcto funcionamiento de la aplicación, comunnmente llamados "stateful".
  * <code>layouts/</code>: componentes que representan una maquetación reutilizable por varias páginas.
  * <code>hooks/</code>: custom hooks que abstraen lógica de la aplicación de los componentes.
  * <code>constants/</code>: información constante de la aplicación que es mejor abstraerla en su propio módulo para ser reutilizada o intuitiva.
  * <code>services/</code>: funciones asíncronas que cumplen un único propósito.
  * <code>stores/</code>: stores que almacenan los estados globales de la aplicación.
  * <code>pages/</code>: componentes que representan el contenido de una URL.
  	* <code>app.jsx</code>: núcleo de la aplicación. Representa cada ruta existente con su información y comportamiento.
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

Para crear y modificar código en este proyecto, se debe seguir el marco de trabajo llamado <a href="https://docs.github.com/es/get-started/quickstart/github-flow">GitHub Flow</a>.

<h4>Reglas a resaltar sobre el GitHub Flow</h4>

* Nunca hacer ningún cambio en la rama main. Para hacer cualquier tipo de cambio al código, se debe crear una rama nueva de git.
* Ninguna rama debe ser "mergeada" manualmente a la rama main. Cuando una rama esté lista para ser integrada al proyecto, se debe hacer un push de la rama hacia el repositorio remoto y crear una <a href="https://docs.github.com/es/pull-requests">Pull Request</a>.
* Cada Pull Request (PR) debe ser aprobada por los miembros los líderes de equipo utilizando las herramientas de GitHub y debe pasar las pruebas automatizadas. Si se estos campos se cumplen, la rama puede ser mergeada a la rama main. <strong>IMPORTANTE</strong>: esto que he mencionado se puede configurar de forma <strong>estricta</strong> en un repositorio público, pero en repositorios privados se debe tener un plan Team, el cual <strong>no tenemos</strong>. Por lo tanto, una rama puede ser mergeada sin haber pasado los tests o sin aprobación de un Code Reviewer, o incluso se puede modificar la rama main sin ningún tipo de protección. <strong>No permitimos bajo ninguna circunstancia este comportamiento, y sugerimos ser cuidadosos con acciones tomadas en este repositorio de GitHub</strong>.
* Cada rama y Pull Request debe cumplir con un solo proposito en especifico. No es el deber ser que en una rama hayan demasiados cambios y nuevo código. Eso puede ser una señal de que se están haciendo muchas cosas distintas en una sola rama.

<h2>💻 Construido con</h2>

Tecnologías utilizadas en el proyecto:

* React.js → Librería UI.
* React Router DOM → Manejador del enrutamiento y la transferencia de datos entre páginas.
* Zustand → Manejador del estado global de la aplicación.
* TanStack Query (a.k.a. React Query) → Manejador de estados asíncronos.
* Axios → Cliente HTTP utilizado para realizar peticiones asíncronas.
* Tailwind CSS → Framework de CSS. Es altamente personalizable y basado en utility-classes.
* Vite.js → Empaquetador de módulos.
* Vitest/React Testing Library → Corredor de test unitarios y de integración.
* ESLint → Code linting
* Prettier → Formateo de código
* Husky → Git Hooks
