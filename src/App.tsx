import React, { useState } from "react";
import { Home } from "./pages/home";
import { Navbar } from "./components/Navbar";

export default function App () {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Navbar/>

      <body className="flex w-auto h-screen overflow-auto">
        <Home
          handleOpen={handleOpen}
          open={open}
        />
      </body>

    </div>
  );
}
