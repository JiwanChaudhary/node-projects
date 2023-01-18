import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { editUser, getUser } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

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

const EditUser = () => {
  const [user, setUser] = useState(inputValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    // console.log(response.data.user);
    setUser(response.data.user);
  };

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
    await editUser(user, id);
    navigate("/allusers");
  };

  return (
    <>
      <Container>
        <Typography align="center" variant="h5">
          Edit User
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
            Edit User
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditUser;
