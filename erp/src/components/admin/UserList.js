import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const UserList = ({ userList }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {userList &&
          userList.map((elm) => (
            <tr>
              <td>
                <Link to={`/user/${elm._id}`}>{elm._id}</Link>
              </td>
              <td>
                <Link to={`/user/${elm._id}`}>{elm.personnelId.nom}</Link>
              </td>
              <td>
                <Link to={`/user/${elm._id}`}>{elm.personnelId.prenom}</Link>
              </td>
              <td>
                <Link to={`/user/${elm._id}`}>{elm.login}</Link>
              </td>
              <td>
                <Link to={`/user/${elm._id}`}>{elm.role.titre}</Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default UserList;
