import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../services/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const inputValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(inputValue);

  // useEffect(() => {
  //   console.log(user);
  // });

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // Here, name and value is key value pair
    // console.log(user);
  };

  const onFormSubmit = async () => {
    await addUser(user);
  };

  return (
    <>
      <Container>
        <Typography align="center" variant="h5">
          Add User
        </Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={onValueChange} name="name" value={user.name} />
        </FormControl>
        <FormControl>
          <InputLabel>username</InputLabel>
          <Input
            onChange={onValueChange}
            name="username"
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={onValueChange} name="email" value={user.email} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={onValueChange} name="phone" value={user.phone} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={onFormSubmit}>
            Add User
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddUser;
