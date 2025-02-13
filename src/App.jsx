import React from "react";

import Navbar from "./sections/Navbar/Navbar";
import { IdiomaProvider } from "./contexts/IdiomaContext";

const App = () => {
  return <IdiomaProvider><Navbar />
  </IdiomaProvider>;
};

export default App;
