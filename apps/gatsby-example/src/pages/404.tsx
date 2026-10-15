import * as React from "react";
import { Link, type HeadFC } from "gatsby";

export default function NotFoundPage() {
  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1 className="title">Page not found</h1>
          <p className="subtitle">
            <Link to="/">Back to the contact form</Link>
          </p>
        </header>
      </div>
    </main>
  );
}

export const Head: HeadFC = () => <title>Not found - StaticForms Gatsby Example</title>;
