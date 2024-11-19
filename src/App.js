import "./styles.css";

import Name from "./components/Name";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div className="App">
      <Name />
      <Welcome />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
