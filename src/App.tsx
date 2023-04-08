import { useEffect } from "react";
import "./sass/app.scss";
import RouteConfig from "./routes/routes";
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
    <RouteConfig />
  )
}

export default App;
