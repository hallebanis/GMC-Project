import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../actions/admin/usersActions";
import UserList from "../../components/admin/UserList";

const UsersListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const users = useSelector((state) => state.users);
  const [nameFilter, setNameFilter] = useState("");
  return (
    <div>
      <div>
        <h3>Filter</h3>
        <label>Nom :</label>
        <input
          type="text"
          name="nameFilter"
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>
      <UserList
        userList={
          users
            ? users.users.filter((elm) =>
                elm.personnelId.nom
                  ? elm.personnelId.nom
                      .toLowerCase()
                      .includes(nameFilter.toLowerCase()) ||
                    elm.personnelId.prenom
                      .toLowerCase()
                      .includes(nameFilter.toLowerCase())
                  : null
              )
            : null
        }
      />
    </div>
  );
};

export default UsersListPage;
