import { BrowserRouter, Routes } from "react-router-dom";
import { renderRoutesMain } from "./route/route";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>{renderRoutesMain()}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
