import React from "react";
import { HashRouter,Route,Routes} from "react-router-dom";

import HomeView from "./views/HomeView"

const App = () => {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </HashRouter>
  );
};

export default App;