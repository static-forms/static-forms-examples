import * as React from "react";
import type { HeadFC } from "gatsby";
import ContactForm from "../components/ContactForm";

export default function IndexPage() {
  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1 className="title">Contact Us</h1>
          <p className="subtitle">
            Gatsby example using{" "}
            <a href="https://www.staticforms.dev" target="_blank" rel="noopener noreferrer">
              StaticForms.dev
            </a>
          </p>
        </header>
        <ContactForm />
        <p className="footer">
          <a href="https://www.staticforms.dev/blog/using-staticforms-with-gatsby">Read the Gatsby tutorial</a>{" "}
          ·{" "}
          <a href="https://github.com/static-forms/static-forms-examples/tree/main/apps/gatsby-example">
            View source
          </a>
        </p>
      </div>
    </main>
  );
}

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>StaticForms - Gatsby Example</title>
    <meta name="description" content="A simple contact form using StaticForms.dev" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </>
);
