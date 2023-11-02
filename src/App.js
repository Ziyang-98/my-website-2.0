import styles from "./App.module.scss";
import Home from "views/home";
function App() {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Home />
      </div>
    </div>
  );
}

export default App;
