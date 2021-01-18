import React from "react";
import { Select } from "./DatePicker";
import useStyles from "./styles";
export const EmbaucheForm = () => {
    const classes = useStyles();
    const [info, setInfo] = useState({
        fonction : "",
        dateEmbauche
    })
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
            <Select name="dateEmbauche" onDateChange={handleDateChange} />
          </Form.Label>
        </Form.Group>
        
      </form>
    </Paper>
  );
};
