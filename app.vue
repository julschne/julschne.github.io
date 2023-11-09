<template>
  <v-app>
    <div
      class="hello-section pa-3 d-flex justify-center align-center flex-column"
    >
      <h1 class="welcome">
        turn your <span class="ideas rounded-pill px-5">ideas</span> into
        <span class="projects">projects</span>.
      </h1>
      <h2>That's all what matters.</h2>
      <div class="socials d-flex justify-center align-center flex-row">
        <div class="mail">
          <a href="mailto:julian.schneider@varlix.io"
            ><v-icon>mdi-mail</v-icon></a
          >
        </div>
        <div class="github">
          <a href="https://github.com/julschne"><v-icon>mdi-github</v-icon></a>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="copyright">
        &copy; 2023 <span class="varlix">varlix.io</span>
      </div>
      <v-divider vertical class="mx-2" />
      <a href="imprint" class="imprint">Impressum</a>
    </div>
  </v-app>
</template>

<style>
html {
  overflow: hidden !important;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

a:hover {
  text-decoration: none;
  /* Color on hover */
  color: #ff6a6a;
}

.hello-section {
  background: #1f1c2c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #928dab,
    #1f1c2c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #928dab,
    #1f1c2c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;
  overflow: hidden;
}

.welcome {
  color: white;
  font-weight: 500;
}

.ideas,
.projects {
  color: inherit;
  font-weight: 700;
  font-size: 3rem;
}

.ideas {
  background-color: #00dbde;
  background-image: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
}

.projects {
  color: #ff6a6a;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  /* Make the font gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: white;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
}

.imprint {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.imprint:hover {
  color: #ff6a6a;
}

.varlix {
  /* transition: all 0.3s ease-in-out; */
  transition: all 0.5s ease-in-out;
}

.varlix:hover {
  /* Animated gradient while hover */
  font-weight: 600;
  font-size: 1.3rem;
  background: linear-gradient(
    90deg,
    #00dbde,
    #fc00ff,
    #ff3cac,
    #784ba0,
    #2b86c5
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: varlix 10s ease infinite;
}

@keyframes varlix {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.socials {
  margin-top: 2rem;
  font-size: 2rem;
  color: #fff;
  font-weight: 300;
}

.socials > * {
  margin: 0 12px;
}
</style>
