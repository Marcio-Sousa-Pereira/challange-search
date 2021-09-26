import React from "react";
import { FaUser } from "react-icons/fa";
import { BsImageFill } from "react-icons/bs";

import { Container, List } from "./style";

export const Header = () => {
  return (
    <Container>
      <BsImageFill className="logo-type" size="45" color="#fff" />
      <List>
        <li className="profile">
          <FaUser size="23" color="#CECECE" />
        </li>
      </List>
    </Container>
  );
};
