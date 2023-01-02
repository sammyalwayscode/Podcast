import Router from "./components/Router/Router";
import BoardRoute from "./components/Dashboard/Board/Router/Router";

const App = () => {
  return (
    <div>
      <Router />
      <BoardRoute />
    </div>
  );
};

export default App;
