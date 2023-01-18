import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { getUsers } from "../services/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 30px auto 0 auto;
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
    // console.log(getAllUsers());
  }, [users]);

  const getAllUsers = async () => {
    let allUsers = await getUsers();
    // let UserDetails = await allUsers.json();
    // console.log(allUsers.data.allUsers);
    // console.log(setUsers(async () => await allUsers.data));
    setUsers(allUsers.data.allUsers);
  };
  // console.log(users.length);
  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
