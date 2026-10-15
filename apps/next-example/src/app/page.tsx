import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Next.js example using{" "}
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
        <p className={styles.footer}>
          <a href="https://www.staticforms.dev/blog/using-staticforms-with-nextjs">
            Read the Next.js tutorial
          </a>{" "}
          ·{" "}
          <a href="https://github.com/static-forms/static-forms-examples/tree/main/apps/next-example">
            View source
          </a>
        </p>
      </div>
    </main>
  );
}

