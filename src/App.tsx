import { useEffect } from "react";
import Main from "./pages/Main";
import "./sass/app.scss";

//
const App = () => {
  //
  useEffect(() => {
    window.oncontextmenu = () => {
      return false;
    }
  }, []);
  //
  return (
    <>
      <Main />
    </>
  )
}

export default App;
