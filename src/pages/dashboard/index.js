import React, { useEffect, useState } from "react";

import axios from "../../service/api";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Paper,
} from "@material-ui/core";

import { FaSearch } from "react-icons/fa";
import { PaginationComponent } from "../../components/pagination";

import { Container, ContentBody } from "./style";

export const Dashboard = () => {
  const [values, setValues] = useState();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerpage] = useState(10);

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const currentUsers = data.slice(firstIndex, lastIndex);

  function getListUsers() {
    axios
      .get(`/api/?results=50`)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getListUsers();
  }, []);

  function paginate(number) {
    setCurrentPage(number);
  }

  function search() {
    const secundaryArray = [];
    currentUsers.map((item) => {
      if (
        (values.length !== 0 &&
          values[0].toUpperCase() + values.slice(1).toLowerCase() ===
            item.name.first) ||
        values === item.gender
      ) {
        if (values === "female" || values === "male") {
          secundaryArray.push(item);
          setData(secundaryArray);
        } else {
          setData([item]);
        }
      }
    });
  }

  return (
    <Container>
      <ContentBody>
        <FormControl style={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            placeholder="pesquise"
            onChange={(event) => setValues(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => search()}
                  edge="end"
                >
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Birth</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUsers &&
                currentUsers.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.name.first}</TableCell>
                    <TableCell align="center">{row.gender}</TableCell>
                    <TableCell align="center">{row.dob.date}</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PaginationComponent
          usersPerPage={usersPerPage}
          totalUsers={data.length}
          paginate={paginate}
        />
      </ContentBody>
    </Container>
  );
};
