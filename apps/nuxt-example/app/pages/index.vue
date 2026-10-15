<template>
  <main class="main">
    <div class="container">
      <header class="header">
        <h1 class="title">Contact Us</h1>
        <p class="subtitle">
          Nuxt example using
          <a
            href="https://www.staticforms.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            StaticForms.dev
          </a>
        </p>
      </header>
      <ContactForm />
      <p class="footer">
        <a href="https://www.staticforms.dev/blog/using-staticforms-with-nuxtjs">
          Read the Nuxt tutorial
        </a>
        ·
        <a href="https://github.com/static-forms/static-forms-examples/tree/main/apps/nuxt-example">
          View source
        </a>
      </p>
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

.footer {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.subtitle a {
  color: var(--accent);
  text-decoration: none;
}

.subtitle a:hover {
  text-decoration: underline;
}
</style>

