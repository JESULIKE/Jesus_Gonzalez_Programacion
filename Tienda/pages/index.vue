<template>
  <div class="home-page">
    <div class="hero-section">
      <img src="https://pcgamermexico.com/stupload/stswiper/pcgamerbanner-scaled.png" alt="Imagen de fondo de la tienda de juegos de mesa" class="hero-image">
      <div class="hero-content">
        <h1 class="hero-title">Bienvenidos a Tu Tienda de Juegos de Mesa</h1>
        <p class="hero-text">Explora juegos increíbles para todas las edades y gustos. ¡Diversión garantizada para compartir con familia y amigos!</p>
        <NuxtLink to="/dashboard/">
          <v-btn color="warning" large>Descubre nuestros juegos</v-btn>
        </NuxtLink>
      </div>
    </div>

    <div class="counter-section">
      <h2>Hemos recibido {{ this.$store.state.count }} visitas</h2>
      <p class="counter-text">¡Gracias por ser parte de nuestra comunidad de amantes de los juegos de mesa!</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
.home-page {
  text-align: center;
  padding: 30px;
  font-family: 'Arial', sans-serif;
}

.hero-section {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: #f8ede3;
}

.hero-image {
  width: 100%;
  height: 50%;
  object-fit: cover;
  opacity: 0.8;
  margin-top: -500px;
}

.hero-content {
  position: absolute;
  text-align: center;
  color: #333;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 10px;
  color: #5a3921;
  font-weight: bold;
}

.hero-text {
  font-size: 1.25rem;
  margin-bottom: 20px;
  color: #5a3921;
}

.v-btn {
  background-color: #ffca3a !important;
  color: #333 !important;
  font-weight: bold;
  border-radius: 8px;
}

.counter-section {
  background-color: #fdf6f0;
  padding: 40px;
  margin-top: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.counter-section h2 {
  font-size: 2rem;
  color: #5a3921;
}

.counter-text {
  font-size: 1rem;
  color: #333;
}
</style>