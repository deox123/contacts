import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class Detail extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      lastName: props.surname,
      phone: props.phone,
      city: props.city,
      address: props.address,
    };
  }

  componentDidMount() {
    //   this.props.actions
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          required
        />
        <TextField
          required
          id="lastName"
          label="Last Name"
          defaultValue={this.state.lastName}
          className={classes.textField}
          onChange={this.handleChange("lastname")}
          margin="normal"
        />

        <TextField
          disabled
          id="createdDate"
          label="Disabled"
          defaultValue="02.02.1988."
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="city"
          label="City"
          className={classes.textField}
          value={this.state.city}
          onChange={this.handleChange("city")}
          margin="normal"
          required
        />
        <TextField
          id="address"
          label="Address"
          className={classes.textField}
          value={this.state.address}
          onChange={this.handleChange("address")}
          margin="normal"
          required
        />
        <TextField
          id="number"
          label="Number"
          value={this.state.phone}
          onChange={this.handleChange("phone")}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
      </form>
    );
  }
}

export default withStyles(styles)(Detail);
