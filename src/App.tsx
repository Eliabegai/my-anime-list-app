import React, { useState } from "react";
import { Home } from "./pages/home";
import { Navbar } from "./components/Navbar";


export default function App() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);


  return (
    <div>
      <Navbar/>

      <body>
        <Home 
          handleOpen={handleOpen}
          open={open}
        />
      </body>

    </div>
  );
}