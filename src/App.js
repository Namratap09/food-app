import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"

const AppLayout = () => (
  <div>
    <Header />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);