import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/admin/Login";
import Register from "./pages/admin/Register";
import Home from "./pages/Home";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UsersListPage from "./pages/admin/UsersListPage";
import UserDetailsPage from "./pages/admin/UserDetailsPage";
import AddUser from "./pages/admin/AddUser";
import RolePage from "./pages/admin/RolePage";
import GaDashboard from "./pages/GA/GaDashboard";
import GvDashboard from "./pages/GV/GvDashboard";
import GrhDashboard from "./pages/GRH/GrhDashboard";
import AddPersonnelPage from "./pages/GRH/AddPersonnelPage";
import { PersonnelDetailsPage } from "./pages/GRH/PersonnelDetailsPage";
import { ListPersonnelPage } from "./pages/GRH/ListPersonnelPage";
import { ContratForm } from "./components/GRH/ContratForm";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/user-dashboard/:id" component={UserDashboard} />
        <Route exact path="/admin-dashboard" component={AdminDashboard} />
        <Route exact path="/admin-dashboard/users" component={UsersListPage} />
        <Route exact path="/admin-dashboard/adduser" component={AddUser} />
        <Route exact path="/user/:id" component={UserDetailsPage} />
        <Route exact path="/admin-dashboard/roles" component={RolePage} />
        <Route exact path="/grh-dashboard" component={GrhDashboard} />
        <Route exact path="/ga-dashboard" component={GaDashboard} />
        <Route exact path="/gv-dashboard" component={GvDashboard} />
        <Route exact path="/grh-dashboard/listpersonnel" component={ListPersonnelPage}/>
        <Route exact path="/personnel/:id" component={PersonnelDetailsPage} />
        <Route exact path="/grh-dashboard/addpersonnel" component={AddPersonnelPage}/>
        <Route exact path="/grh-dashboard/addpersonnel/contrat" component={ContratForm}/>

        
      </Switch>
    </Router>
  );
}

export default App;
