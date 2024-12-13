<template>
  <div class="welcome-page">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

    <title>Ova Educativo</title>
    <div class="content">
      <h1>¡Bienvenido a nuestra Ova!</h1>
      <p>Un espacio donde las ideas cobran vida.</p>
      <button @click="goToBlog">Entrar a los contenidos</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToBlog() {
      this.$router.push('/blog'); // Redirige a la página principal del blog
    },
  },
};
</script>

<style scoped>
.welcome-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #96a341, #96a341);
  color: #333;
  font-family: 'Arial', sans-serif;
}

.content {
  text-align: center;
}

h1 {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fefdd8;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

p {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  color: #fefdd8;
}

/* #b579ae, #c8b2df, #fefdd8, #cbd277, #96a341 */

button {
  background-color: #E8EAF6;
  color: #b579ae;
  padding: 0.8rem 2.5rem;
  font-size: 1rem;
  border: 2px solid #c8b2df;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s, background-color 0.3s, color 0.3s;
}

button:hover {
  background-color: #D5C8E9;
  color: #333;
  transform: scale(1.1);
}
</style>