<template>
    <div class="blog-page">
      <!-- Banner -->
      <header class="banner">
        <h1>Mi Ova Educativo</h1>
        <p>Explora recursos para aprender y divertirte.</p>
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
        <!-- Recursos Educativos -->
        <section class="resources">
          <h2>Recursos Educativos</h2>
          <div class="resources-grid">
            <!-- Tarjetas de Recursos -->
            <div class="card" v-for="resource in resources" :key="resource.title">
              <img :src="resource.image" alt="Imagen del recurso" />
              <h3>{{ resource.title }}</h3>
              <a :href="resource.link" target="_blank" class="btn">
                Ver Recurso
              </a>
            </div>
          </div>
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
        resources: [
          {
            title: 'Partes de la Casa (Inglés)',
            link: 'https://www.educaplay.com/learning-resources/2314898-partes_de_la_casa_en_ingles.html',
            image: 'https://ideogram.ai/assets/progressive-image/balanced/response/6nsSkD0jRVCrJZzdCvkrbw',
          },
          {
            title: 'There Is and There Are Actividad',
            link: 'https://www.educaplay.com/learning-resources/1354763-there_is_and_there_are.html',
            image: 'https://ideogram.ai/assets/progressive-image/balanced/response/LjtBNl1gRI-E1WlD46rdWg',
          },
          {
            title: 'Evaluacion Partes de la casa',
            link: 'https://es.educaplay.com/recursos-educativos/2550158-partes_de_la_casa_ingles.html',
            image: 'https://ideogram.ai/assets/image/lossless/response/utz8Pd8JTBGD-S-5bIxGXg',
          },
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
  .blog-page {
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  
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
  
  .content {
    padding: 2rem 1rem;
  }
  
  /* Recursos */
  .resources {
    margin-top: 2rem;
  }
  
  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
  }
  
  .card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1rem;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .card img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }
  
  .card h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
  
  .card a.btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #2575fc;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s;
  }
  
  .card a.btn:hover {
    background: #6a11cb;
  }
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  </style>
  