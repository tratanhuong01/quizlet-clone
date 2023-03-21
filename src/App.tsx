import { useEffect } from "react";
import Login from "./pages/Login";
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
      {/* <Main /> */}
      <Login />
    </>
  )
}

export default App;
