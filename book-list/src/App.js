import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import scifi from "./books/scifi.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="Danger" />
        <MyBadge text="New" color="secondary" />
        <SingleBook book={scifi[29]} />
        <BookList book={scifi} />
      </header>
    </div>
  );
}

export default App;
