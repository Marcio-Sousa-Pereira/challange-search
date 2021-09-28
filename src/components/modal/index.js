import React from 'react'

import { Modal, ModalBody, Row, Col } from 'reactstrap'
import { regex } from '../../regex'

import { MdClose } from 'react-icons/md'
import { ProfileUser, ModalHeader, Label } from './style'

export const ModalCompoenent = ({ toggleModal, isOpen, data }) => {
  const styledModal = {
    top: '50px',
    zIndex: '20',
    background: '#fff'
  }

  return (
    <Modal
      className="modal-lg"
      style={styledModal}
      isOpen={isOpen}
      toggle={toggleModal}
    >
      <ProfileUser src={data && data.picture.medium} />
      <ModalHeader>
        <MdClose
          className="svg-icon-close-modal"
          onClick={toggleModal}
          size="23"
          type="button"
        />
      </ModalHeader>
      <ModalBody>
        {data && (
          <>
            <Row>
              <Col md="12">
                <Label><h5>Informações básica</h5></Label>
              </Col>
              <Col md="7">
                <Label>Nome: {data.name.first + ' ' + data.name.last}</Label>
              </Col>
              <Col md="5">
                <Label>ID: {data.id.value}</Label>
              </Col>
              <Col md="7">
                <Label>Genêro: {data.gender}</Label>
              </Col>
              <Col md="5">
                <Label>Nascimento: {data.dob.date.match(regex)[0]}</Label>
              </Col>
              <Col md="7">
                <Label>Telefone: {data.phone}</Label>
              </Col>
              <Col md="5">
                <Label>Nacionalidade: {data.nat}</Label>
              </Col>
              <Col md="12">
                <Label>Email: {data.email}</Label>
              </Col>
              <Col md="12">
                <Label><h5>Localização</h5></Label>
              </Col>
              <Col md="12">
                <Label>País: {data.location.country}</Label>
              </Col>
              <Col md="12">
                <Label>Estado: {data.location.state}</Label>
              </Col>
              <Col md="12">
                <Label>Cidade: {data.location.city}</Label>
              </Col>
              <Col md="12">
                <Label>Rua: {data.location.street.name}</Label>
              </Col>
              <Col md="12">
                <Label>Número: {data.location.street.number}</Label>
              </Col>
              <Col md="12">
                <Label>Código Postal: {data.location.postcode}</Label>
              </Col>
            </Row>
            <Row></Row>
          </>
        )}
      </ModalBody>
    </Modal>
  )
}
