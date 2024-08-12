import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
