<template>
    <div class="welcome-page">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

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
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: #fff;
    font-family: 'Arial', sans-serif;
  }
  
  .content {
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  button {
    background-color: #fff;
    color: #794497;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
  }
  
  button:hover {
    background-color: #f6e1ff;
    transform: scale(1.05);
  }
  </style>