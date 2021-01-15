import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../actions/admin/usersActions";

const UserList = ({ userList, history }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    let conf = window.confirm("Are you sure to delete");
    if (conf) {
      dispatch(deleteUser(id));
      history.push("/admin-dashboard/users");
    }
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {userList.length > 0 &&
          userList.map((elm, i) => (
            <tr id={i}>
              <td id={`${elm._id}${i}`}>
                <Link to={`/user/${elm._id}`}>{elm._id}</Link>
              </td>
              <td id={`${elm.personnelId.nom}${i}`}>
                <Link to={`/user/${elm._id}`}>{elm.personnelId.nom}</Link>
              </td>
              <td id={`${elm.personnelId.prenom}${i}`}>
                <Link to={`/user/${elm._id}`}>{elm.personnelId.prenom}</Link>
              </td>
              <td id={`${elm.login}${i}`}>
                <Link to={`/user/${elm._id}`}>{elm.login}</Link>
              </td>
              <td id={`${elm.role.titre}${i}`}>
                <Link to={`/user/${elm._id}`}>{elm.role.titre}</Link>
              </td>
              <Button
                variant="danger"
                onClick={() => {
                  handleDelete(elm._id);
                }}
              >
                Delete
              </Button>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default UserList;
