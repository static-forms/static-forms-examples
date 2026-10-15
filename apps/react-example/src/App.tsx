import ContactForm from './ContactForm.tsx'

export default function App() {
  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1 className="title">Contact Us</h1>
          <p className="subtitle">
            React example using{' '}
            <a href="https://www.staticforms.dev" target="_blank" rel="noopener noreferrer">
              StaticForms.dev
            </a>
          </p>
        </header>
        <ContactForm />
        <p className="footer">
          <a href="https://www.staticforms.dev/blog/react-contact-form-email-tutorial">
            Read the React tutorial
          </a>{' '}
          ·{' '}
          <a href="https://github.com/static-forms/static-forms-examples/tree/main/apps/react-example">
            View source
          </a>
        </p>
      </div>
    </main>
  )
}
