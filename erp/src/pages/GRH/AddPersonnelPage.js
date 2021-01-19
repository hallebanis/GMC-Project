import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPersonnel } from "../../actions/GRH/personnelActions";
import { AddPersonnelForm } from "../../components/GRH/AddPersonnelForm";
import AdminDashboardSidebar from "../../components/admin/AdminDashboardSidebar";

const AddPersonnelPage = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonnel());
  }, []);
  return (
    <div>
      <AdminDashboardSidebar
        color="blue"
        linkList={[
          {
            categorie: "Personnel",
            elements: [
              {
                title: "Add Personnel",
                link: "/grh-dashboard/addpersonnel",
              },
              {
                title: "personnel list",
                link: "/grh-dashboard/listpersonnel",
              },
            ],
          },
          {
            categorie: "Contrat",
            elements: [
              {
                title: "Add Contrat",
                link: "/grh-dashboard/contrat",
              },
            ],
          },
          {
            categorie: "Service",
            elements: [
              {
                title: "Add Service",
                link: "/grh-dashboard/AddService",
              },
              {
                title: "List Service",
                link: "/grh-dashboard/ListService",
              },
            ],
          },
        ]}
      />
      <AddPersonnelForm history={history} />
    </div>
  );
};

export default AddPersonnelPage;
