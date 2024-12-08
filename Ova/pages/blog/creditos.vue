<template>
  <div class="credits-page">
    <!-- Banner -->
    <header class="banner">
      <h1>Créditos</h1>
      <p>Reconocemos y agradecemos el esfuerzo y dedicación de todos los involucrados.</p>
    </header>

    <!-- Navegación -->
    <nav class="navigation">
        <ul>
          <li v-for="tab in tabs" :key="tab.name" @click="goToPage(tab.link)">
            {{ tab.name }}
          </li>
        </ul>
      </nav>
  

    <!-- Contenido Principal -->
    <main class="content">
      <section class="credits">
        <h2>Sobre este Proyecto</h2>
        <p>
          Este blog fue desarrollado como parte del curso de 
          <strong>Fundamentos de Programación</strong>, orientado por el profesor 
          <strong>Aly</strong>. Nuestro objetivo fue explorar herramientas web modernas y 
          fomentar el aprendizaje interactivo. agradecemos su paciencia y apoyo durante el desarrollo de este proyecto y su motivación nos impulsó a crear algo significativo.
        </p>

        <h2>Autores</h2>
        <ul class="authors">
          <li>Jesús González</li>
          <li>Pedro Romero</li>
          <li>Royner Díaz</li>
        </ul>

        <h2>Agradecimientos Especiales</h2>
        <p>
          Agradecemos a la profesora <strong>Yuli Ney</strong> por brindarnos el tema a desarollar en este ova y estar al tanto del ova realizado
        </p>
      </section>
    </main>
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
    };
  },
  methods: {
    goToPage(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
.credits-page {
  font-family: 'Arial', sans-serif;
  color: #333;
}

/* Banner */
.banner {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
}

.banner h1 {
  font-size: 2.5rem;
  margin: 0;
}

.banner p {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

/* Contenido */
.content {
  padding: 2rem 1rem;
}

.credits {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.credits h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.credits p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.authors {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.authors li {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-weight: bold;
}

.navigation {
    background-color: #f4f4f4;
    border-bottom: 1px solid #ddd;
  }
  
  .navigation ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .navigation li {
    padding: 1rem 1.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: color 0.3s, border-bottom 0.3s;
  }
  
  .navigation li:hover {
    color: #2575fc;
    border-bottom: 2px solid #2575fc;
  }
</style>