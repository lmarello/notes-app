import React from "react";
import {Container} from "@chakra-ui/react";

import BoardScreen from "./screens/Board";

const Layout: React.FC = ({children}) => {
  return (
    <Container alignSelf="center" height="100vh" maxWidth="container.xl">
      <BoardScreen>{children}</BoardScreen>
    </Container>
  );
};

export default Layout;
