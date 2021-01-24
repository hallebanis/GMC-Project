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
import AddClient from "./pages/GV/AddClient";
import AdminPrivateRoute from "./routes/authentification/AdminPrivateRoute";
import { AddServicePage } from "./pages/GRH/AddServicePage";
import { ListServicePage } from "./pages/GRH/ListService";
import FullPageIntroWithFixedTransparentNavbar, {
  ServiceDetailsPage,
} from "./pages/GRH/ServiceDetailsPage";
import DemandeCongePage from "./pages/user/DemandeCongePage";
import Demande from "./pages/user/DemandeCongePage";
import { AvancePage } from "./pages/GRH/AvancePage";

import ListeClients from "./pages/GV/ListeClients";

import PointagePage from "./pages/GRH/PointagePage";

import Commande from "./pages/GV/Commande";

import AddCommand from "./pages/GV/AddCommande";

import Produits from "./pages/GA/Produit";
import Categorie from "./pages/GA/Categorie";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <AdminPrivateRoute
          exact
          path="/user-dashboard/:id"
          component={UserDashboard}
        />
        <AdminPrivateRoute
          exact
          path="/admin-dashboard"
          component={AdminDashboard}
        />
        <AdminPrivateRoute
          exact
          path="/admin-dashboard/users"
          component={UsersListPage}
        />
        <AdminPrivateRoute
          exact
          path="/admin-dashboard/adduser"
          component={AddUser}
        />
        <AdminPrivateRoute exact path="/user/:id" component={UserDetailsPage} />
        <AdminPrivateRoute
          exact
          path="/admin-dashboard/roles"
          component={RolePage}
        />
        <AdminPrivateRoute
          exact
          path="/grh-dashboard"
          component={GrhDashboard}
        />
        <AdminPrivateRoute exact path="/ga-dashboard" component={GaDashboard} />
        <AdminPrivateRoute exact path="/gv-dashboard" component={GvDashboard} />
        <AdminPrivateRoute
          exact
          path="/personnel/:id"
          component={PersonnelDetailsPage}
        />
        <AdminPrivateRoute
          exact
          path="/grh-dashboard/addpersonnel"
          component={AddPersonnelPage}
        />
        <AdminPrivateRoute
          exact
          path="/grh-dashboard/contrat"
          component={ContratForm}
        />
        <AdminPrivateRoute
          exact
          path="/grh-dashboard/listpersonnel"
          component={ListPersonnelPage}
        />
        <AdminPrivateRoute
          exact
          path="/gv-dashboard/addclient"
          component={AddClient}
        />
        <AdminPrivateRoute
          exact
          path="/grh-dashboard/AddService"
          component={AddServicePage}
        />
        <AdminPrivateRoute
          exact
          path="/grh-dashboard/ListService"
          component={ListServicePage}
        />
        <AdminPrivateRoute
          exact
          path="/grh-dashboard/ListService/editService/:id"
          component={ServiceDetailsPage}
        />
        <AdminPrivateRoute
          exact
          path={`/user-dashboard/:id/demande/new`}
          component={Demande}
        />
        <AdminPrivateRoute
          exact
          path="/grh-dashboard/AddAvance"
          component={AvancePage}
        />

        <AdminPrivateRoute
          exact
          path="/gv-dashboard/listeClients"
          component={ListeClients}
        />

        <AdminPrivateRoute
          exact
          path="/grh-dashboard/pointage"
          component={PointagePage}
        />

        <AdminPrivateRoute
          exact
          path="/gv-dashboard/commande"
          component={Commande}
        />

        <AdminPrivateRoute
          exact
          path="/gv-dashboard/commande/addCommande"
          component={AddCommand}
        />

        <AdminPrivateRoute
          exact
          path="/ga-dashboard/produits"
          component={Produits}
        />
        <AdminPrivateRoute
          exact
          path="/ga-dashboard/categorie"
          component={Categorie}
        />
      </Switch>
    </Router>
  );
}

export default App;
