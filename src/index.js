import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import Footer from './footer';
import { BrowserRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

//reportWebVitals();
