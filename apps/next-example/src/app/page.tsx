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
  );
}

