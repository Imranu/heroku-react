import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import ListClientsComponent from "./components/ListClientsComponent";
import AddClientComponent from "./components/AddClientComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListClientsComponent/>}></Route>
            <Route path="/clients" element={<ListClientsComponent/>}></Route>
            <Route path="/add-client" element={<AddClientComponent/>}></Route>
            <Route path="/edit-client/:id" element={<AddClientComponent/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
