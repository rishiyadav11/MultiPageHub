import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
const Template1 = {
  html: `<div class="text-center p-10 bg-blue-500 text-white"><h1>Welcome to Template 1</h1></div>`,
  css: `body { font-family: Arial, sans-serif; }`,
};
const Template2 = {
  html: `<div class="text-center p-10 bg-green-500 text-white"><h1>Welcome to Template 2</h1></div>`,
  css: `body { font-family: Arial, sans-serif; }`,
};

  
const templates = [
  { id: 1, name: "Landing Page 1", component: Template1 },
  { id: 2, name: "Landing Page 2", component: Template2 },
];

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Choose a Landing Page</h1>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <Link key={template.id} to={`/editor/${template.id}`} className="p-4 border rounded shadow hover:bg-gray-100">
            {template.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Editor() {
  const { id } = useParams();
  const selectedTemplate = templates.find((t) => t.id === parseInt(id));
  if (!selectedTemplate) return <div>Template Not Found</div>;
  
  const [html, setHtml] = useState(selectedTemplate.component.html);
  const [css, setCss] = useState(selectedTemplate.component.css);

  const copyCode = () => {
    navigator.clipboard.writeText(`<style>${css}</style>\n${html}`);
    alert("Code copied!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{selectedTemplate.name}</h1>
      <div className="border p-4 mb-4">
        <iframe srcDoc={`<style>${css}</style>${html}`} className="w-full h-96 border" title="Preview"></iframe>
      </div>
      <button onClick={copyCode} className="px-4 py-2 bg-blue-500 text-white rounded">Copy Code</button>
    </div>
  );
}

function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p>This app provides various landing page templates that you can preview, customize, and copy the code.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>Email: support@example.com</p>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
