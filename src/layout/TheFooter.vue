<template>
  <footer class="footer">
    <div class="social-media-icons">
      <a href="https://www.facebook.com" target="_blank" class="icon"
        ><font-awesome-icon :icon="['fab', 'facebook-f']"
      /></a>
      <a href="https://www.twitter.com" target="_blank" class="icon"
        ><font-awesome-icon :icon="['fab', 'twitter']"
      /></a>
      <a href="https://www.instagram.com" target="_blank" class="icon"
        ><font-awesome-icon :icon="['fab', 'instagram']"
      /></a>
      <a href="https://www.linkedin.com" target="_blank" class="icon"
        ><font-awesome-icon :icon="['fab', 'linkedin-in']"
      /></a>
    </div>
    <p class="copyright">© 2023 by Varveroglou</p>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background-color: #f0f0f0;
  text-align: center;
  padding: 20px;
  width: 100%;
}

.social-media-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  padding: 0.5rem;
  font-size: 24px;
  margin: 0 10px;
  color: #333;
  cursor: pointer;
  animation: rainbow 3s linear infinite, rainbowShadow 3s linear infinite;
}

@keyframes rainbow {
  0%,
  100% {
    color: red;
  }
  14% {
    color: orange;
  }
  28% {
    color: yellow;
  }
  42% {
    color: green;
  }
  57% {
    color: blue;
  }
  71% {
    color: indigo;
  }
  85% {
    color: violet;
  }
}

@keyframes rainbowShadow {
  0%,
  100% {
    box-shadow: 0 0 10px red;
  }
  14% {
    box-shadow: 0 0 10px orange;
  }
  28% {
    box-shadow: 0 0 10px yellow;
  }
  42% {
    box-shadow: 0 0 10px green;
  }
  57% {
    box-shadow: 0 0 10px blue;
  }
  71% {
    box-shadow: 0 0 10px indigo;
  }
  85% {
    box-shadow: 0 0 10px violet;
  }
}

.copyright {
  margin-top: 20px;
  font-size: 14px;
}
</style>
