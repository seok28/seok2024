import React, { useEffect } from "react";
import { HashRouter,Route,Routes} from "react-router-dom";

import HomeView from "./views/HomeView";
import link from "./utils/link";
import smooth from "./utils/smooth";

const App = () => {
  useEffect(()=> {
    smooth();
    link();
  }, []);
  
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </HashRouter>
  );
};

export default App;