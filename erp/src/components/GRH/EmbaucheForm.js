import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Select } from "./DatePicker";
import useStyles from "./styles";
export const EmbaucheForm = () => {
  const dispatch=useDispatch();
    const classes = useStyles();
    const [info, setInfo] = useState({
        fonction : "",
        dateEmbauche
    })
    const handleChange =(e)=>{
      setInfo({...info , [e.target.name]:e.target.value})
    }
    const handleChangeDate=(a)=>{
      setInfo({...info , dateEmbauche:d})
    }
    useEffect(()=>{
      dispatch(loadEmbauche())
    },[]);
    
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6">Embauche Form</Typography>
        <TextField
          name="fonction"
          type="text"
          variant="outlined"
          label="fonction"
          fullWidth
          onChange={handleChange}
        />
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>
            Date Embauche :
            <Select name="dateEmbauche" onDateChange={handleChangeDate} />
          </Form.Label>
        </Form.Group>
        
      </form>
    </Paper>
  );
};
