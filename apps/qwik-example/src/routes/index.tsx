import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ContactForm } from "~/components/contact-form/contact-form";

export default component$(() => {
  return (
    <main class="main">
      <div class="container">
        <header class="header">
          <h1 class="title">Contact Us</h1>
          <p class="subtitle">
            Qwik example using{" "}
            <a href="https://www.staticforms.dev" target="_blank" rel="noopener noreferrer">
              StaticForms.dev
            </a>
          </p>
        </header>
        <ContactForm />
        <p class="footer">
          <a href="https://www.staticforms.dev/blog/jamstack-contact-form">Read the Jamstack forms guide</a>{" "}
          ·{" "}
          <a href="https://github.com/static-forms/static-forms-examples/tree/main/apps/qwik-example">
            View source
          </a>
        </p>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "StaticForms - Qwik Example",
  meta: [
    {
      name: "description",
      content: "A simple contact form using StaticForms.dev",
    },
  ],
};
