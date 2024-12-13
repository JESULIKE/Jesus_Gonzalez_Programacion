<template>
  <div class="blog-page">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
    <title>Ova Educativo</title>
    <!-- Navegación fija -->
    <nav class="navigation">
      <ul>
        <li v-for="tab in tabs" :key="tab.name" @click="goToPage(tab.link)"
          :class="{ active: currentPage === tab.link }">
          {{ tab.name }}
        </li>
      </ul>
    </nav>

    <!-- Banner -->
    <header class="banner">
      <div class="banner-overlay">
        <h1>Ova Educativo</h1>
        <p>Recursos para aprender y disfrutar.</p>
        <p>¡Descubre tu casa en inglés! Aprende a describir tu hogar con "there is" y "there are"</p>
      </div>
    </header>

    <!-- Contenido Principal -->
    <main class="content">
      <!-- Pestañas lineales -->
      <section class="tabs">
        <div class="tab">
          <div class="tab-image">
            <img src="https://ideogram.ai/assets/progressive-image/balanced/response/z4RF2UNJSTSgjLRjRQjojg" alt="Tab Image" />
          </div>
          <div class="tab-content">
            <h3>INTRODUCCIÓN</h3><br>
            <p>¡Bienvenido a tu nuevo hogar en el mundo del inglés! ¿Alguna vez has querido describir tu casa en inglés 
            pero no sabes cómo empezar? En esta página te enseñaremos de manera fácil y divertida de cómo utilizar 
            las estructuras "there is" y "there are" para hablar sobre los objetos y habitaciones que hay en tu hogar.</p>
        </div>
        </div>
        <div class="tab">
          <div class="tab-image">
            <img src="https://ideogram.ai/assets/progressive-image/balanced/response/NPib91FjSpaXPo51sQPmgQ" alt="Tab Image" />
          </div>
          <div class="tab-content">
            <h3>¿POR QUÉ ES IMPORTANTE APRENDER HOY?</h3><br>
            <ul>
              <li>Comunicación efectiva: Podrás describir tu casa a tus amigos, familiares o compañeros de viaje. </li>
              <li>Ampliación de vocabulario: Aprenderás el nombre de las diferentes partes de la casa y los objetos que las componen. </li>
              <li>Mejora de tu gramática: Practicarás el uso de las estructuras "there is" y "there are", que son fundamentales en inglés.</li>
          </ul>
            </div>
        </div>
        <div class="tab">
          <div class="tab-image">
            <img src="https://i0.wp.com/jackmalcolm.com/wp-content/uploads/2011/09/simplicity.jpg" alt="Tab Image" />
          </div>
          <div class="tab-content">
            <h3>CONCEPTOS BASICOS</h3><br>
            <p>¿Qué son "there is" y "there are"? 
              <br>"There is" se utiliza para indicar que hay un solo objeto o algo que no se puede contar. 
              <br>Ejemplo: There is a bed in my bedroom. (Hay una cama en mi habitación.) 
              <br><br>"There are" se utiliza para indicar que hay varios objetos o algo que se puede contar. 
              <br>Ejemplo: There are two windows in the living room. (Hay dos ventanas en la sala.) 
              <br><br>Partes de la casa en inglés: 
              <br>Habitaciones: bedroom (dormitorio), living room (sala), kitchen (cocina), bathroom (baño), dining room (comedor)...
              <br>Objetos: bed (cama), table (mesa), chair (silla), sofa (sofá), fridge (refrigerador)...</p>
          </div>
        </div>
      </section>

      <!-- Recursos Educativos -->
      <section class="resources">
        <h2>Recursos Educativos</h2>
        <div class="resources-list">
          <div class="card" v-for="resource in resources" :key="resource.title">
            <div class="card-image">
              <img :src="resource.image" alt="Imagen del recurso" />
            </div>
            <div class="card-content">
              <h3>{{ resource.title }}</h3>
              <a :href="resource.link" target="_blank" class="btn">Ver Recurso</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="contact-info">
        <p>Teléfono: +57 301 604 2094</p>
        <p>Correo electrónico: gonzalezhernandezjesus@gmail.com</p>
      </div>
      <div class="social-media">
        <a href="https://www.instagram.com/" target="_blank" class="social-btn instagram">
        </a>
        <a href="https://www.facebook.com/" target="_blank" class="social-btn facebook">
        </a>
        <a href="https://twitter.com/" target="_blank" class="social-btn twitter">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { name: 'Inicio', link: '/' },
        { name: 'Contenidos', link: '/blog' },
        { name: 'Juegos', link: '/blog/juegos' },
        { name: 'Creditos', link: '/blog/creditos' },
      ],

      resources: [
        {
          title: 'Teória',
          link: 'https://elbibliote.com/idiomas/cuadernillos/Ingl%C3%A9s%20A2%2005.pdf',
          image: 'https://ideogram.ai/assets/progressive-image/balanced/response/szJP-CKHR2ey9iVq06mfmg',
        },
        {
          title: 'There is and There are, Ejercicios',
          link: 'https://www.koalatext.com/public/pdf/koalatext_reference_200.pdf',
          image: 'https://ideogram.ai/assets/progressive-image/balanced/response/vEpAQbyjRvKyyM_iNpI7AQ',
        },
        {
          title: 'Partes de la casa, Ejercicios',
          link: 'https://www.uv.mx/pozarica/cadi/files/2013/04/unidad-7.pdf',
          image: 'https://ideogram.ai/assets/image/lossless/response/doThYUQYTCWNTZvP_oNgfQ',
        },
      ],
      currentPage: '/',
    };
  },
  methods: {
    goToPage(link) {
      this.currentPage = link;
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
.blog-page {
  font-family: 'Poppins', sans-serif;
  color: #444;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

/* Navegación fija */
.navigation {
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navigation ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navigation li {
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.3s, border-bottom 0.3s;
}

.navigation li.active {
  color: #b579ae;
  border-bottom: 3px solid #c8b2df;
}

.navigation li:hover {
  color: #b579ae;
}

/* Banner */
.banner {
  position: relative;
  height: 80vh;
  background-image: url("https://i.gifer.com/19Q1.gif");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.banner-overlay {
  padding: 1rem;
}

.banner h1 {
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.banner p {
  font-size: 1.5rem;
  margin-top: 0.5rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

/* Pestañas lineales */
section.tabs {
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px;
  border-bottom: 1px solid #ddd;
  /* Líneas divisorias */
  max-width: 100%;
  margin: 0 auto;
  /* Centrar horizontalmente cada tab */
}

.tab:nth-child(odd) {
  background-color: #ffffff;
  /* Fondo blanco para filas impares */
  flex-direction: row;
  /* Imagen a la izquierda */
}

.tab:nth-child(even) {
  background-color: #f8f9fa;
  /* Fondo gris suave para filas pares */
  flex-direction: row-reverse;
  /* Imagen a la derecha */
}

.tab-image {
  flex-shrink: 0;
  width: 500px;
  height: 500px;
  margin: 0 40px;
  overflow: hidden;
  border-radius: 20px;
  /* Bordes redondeados para la imagen */
}

.tab-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Asegura que la imagen se ajuste correctamente */
}

.tab-content {
  flex-grow: 1;
  text-align: justify;
  max-width: 80%; /* Ajusta este valor según tus necesidades */
  margin: 0 auto; /* Centra horizontalmente el contenido */
  word-spacing: 2px; /* Ajusta este valor según sea necesario */
}

.tab-content h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.tab-content p {
  margin: 0;
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
}

ul {
  margin: 0;
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .tab {
    flex-direction: column;
    align-items: center;
  }

  .tab-image {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
  }

  .tab-content h3 {
    font-size: 1.5rem;
  }

  .tab-content p {
    font-size: 1.1rem;
  }
}


/* Recursos */
.resources {
  margin-top: 2rem;
  text-align: center;
}

.resources h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.resources-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-image img {
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
}

.card-content {
  text-align: center;
  margin-top: 1rem;
}

.card-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.card-content p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.8rem;
}

.card-content a.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #c8b2df, #c8b2df);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;
}

.card-content a.btn:hover {
  background: linear-gradient(135deg, #b579ae, #b579ae);
}

/* #b579ae, #c8b2df, #fefdd8, #cbd277, #96a341 */

/* Footer */
.footer {
  background: #cfd683;
  color: b579ae;
  text-align: center;
  padding: 2rem 1rem;
  margin-top: 2rem;
}

.footer .contact-info {
  margin-bottom: 1rem;
}

.footer .social-media {
  display: flex;
  justify-content: center;
  /* Center the icons horizontally */
  gap: 1rem;
  /* Spacing between icons */
}

.footer .social-btn {
  color: white;
  /* Color del texto de los iconos */
  text-decoration: none;
  padding: 0;
  border: none;
  border-radius: 50%;
  width: 40px;
  /* Aumentamos el tamaño a 40px */
  height: 40px;
  background-color: #333;
  /* Color de fondo base, puedes cambiarlo */
  transition: background-color 0.3s;
}

.footer .instagram {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #E4405F;
  /* Nuevo color de fondo para Instagram */
}

.footer .facebook {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/220px-220px.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #3B5998;
  /* Nuevo color de fondo para Facebook */
}

.footer .twitter {
  background-image: url("https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg?w=360");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000000;
  /* Mantenemos el azul de Twitter por defecto */
}
</style>
