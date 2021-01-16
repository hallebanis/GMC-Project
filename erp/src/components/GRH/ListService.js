import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadService } from "../../actions/GRH/personnelActions";

export const ListService = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadService());
  }, []);
  const personnel = useSelector((state) => state.personnel);
  const [test, setTest] = useState(personnel.service);

  /*     const {service}=personnel;
   */ const dispatch = useDispatch();

  return (
    <div>
      {console.log(personnel)}
      {/*            { service.map((el=><div>{el.nom}</div>))}
       */}{" "}
    </div>
  );
};
