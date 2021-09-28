import React, { useEffect, useState } from 'react'

import axios from '../../service/api'
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
} from '@material-ui/core'

import { regex } from '../../regex/index'

import { FaEye } from 'react-icons/fa'
import { PaginationComponent } from '../../components/pagination'
import { ModalCompoenent } from '../../components/modal'

import { Container, ContentBody } from './style'

export const Dashboard = () => {
  const [initialData, setInitialData] = useState([])
  const [dataSearch, setDataSearch] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [dataUserModal, setDataUserModal] = useState()

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerpage] = useState(10)

  const lastIndex = currentPage * usersPerPage
  const firstIndex = lastIndex - usersPerPage

  const currentUsers = dataSearch.slice(firstIndex, lastIndex)

  function getListUsers() {
    axios
      .get(`/api/?results=50`)
      .then((response) => {
        const responseData = response.data.results
        setInitialData(responseData)
        setDataSearch(responseData)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    getListUsers()
  }, [])

  function paginate(number) {
    setCurrentPage(number)
  }

  function toggleModal() {
    setIsOpenModal(!isOpenModal)
  }

  const showAndSendDataUser = (param) => {
    setDataUserModal(param)
    toggleModal()
  }

  function handleSearch({ target }) {
    if (!target.value) {
      setDataSearch(initialData)
      return
    }

    const filterUsers = dataSearch.filter(
      (user) =>
        user.name.first.includes(
          target.value[0].toUpperCase() + target.value.slice(1).toLowerCase(),
        ) ||
        user.nat.includes(target.value[0].toUpperCase()) ||
        user.gender.includes(target.value),
    )

    setDataSearch(filterUsers)
  }

  return (
    <Container>
      <ModalCompoenent
        data={dataUserModal}
        toggleModal={toggleModal}
        isOpen={isOpenModal}
      />
      <ContentBody>
        <FormControl style={{ width: '100%' }}>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            placeholder="pesquise por nome, genêro ou país"
            onChange={handleSearch}
            label="Search"
          />
        </FormControl>
        <TableContainer style={{ height: '290px' }}>
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
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{row.name.first}</TableCell>
                    <TableCell align="center">{row.gender}</TableCell>
                    <TableCell align="center">
                      {row.dob.date.match(regex)[0]}
                    </TableCell>
                    <TableCell align="center">
                      <FaEye
                        onClick={() => showAndSendDataUser(row)}
                        size="23"
                        color="gray"
                        type="button"
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PaginationComponent
          usersPerPage={usersPerPage}
          totalUsers={dataSearch.length}
          paginate={paginate}
          page={currentPage}
        />
      </ContentBody>
    </Container>
  )
}
