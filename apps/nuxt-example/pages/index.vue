<template>
  <main class="main">
    <div class="container">
      <header class="header">
        <h1 class="title">Contact Us</h1>
        <p class="subtitle">
          Nuxt example using
          <a
            href="https://www.staticforms.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            StaticForms.xyz
          </a>
        </p>
      </header>
      <ContactForm />
    </div>
  </main>
</template>

<style scoped>
.main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  width: 100%;
  max-width: 480px;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.subtitle a {
  color: var(--accent);
  text-decoration: none;
}

.subtitle a:hover {
  text-decoration: underline;
}
</style>

