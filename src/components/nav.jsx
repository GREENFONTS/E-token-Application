import { Box, Container, Image, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import DrawerComponent from "./Drawer";

const NavComponent = () => {

  const [drawerState, setDrawerState] = useState(false)
  return (
    <>
      <Flex
        bgColor="#1c940f"
        boxShadow="base"
        h="70px"
        alignItems="center"
        p="5"
      >
        <Flex alignItems="center">
          <Image
            src={"/images/Frame 3119.png"}
            boxSize="50px"
            alt="logo"
            mr="5"
          />
          <Text color="white" fontSize="20px">
            Central Bank Of Nigeria
          </Text>
        </Flex>
      </Flex>

      <Flex p="3" alignItems="center">
        <Flex p="5" alignItems="center" width="30%">
          <Image src={"/images/Vector3.png"} alt="logo" boxSize="40px" mr="3"  onClick={() => setDrawerState(current => !current)} />
          <Text fontWeight="600" fontSize="20px">
            Dashboard
          </Text>
        </Flex>
        <Flex width="40%" justifyContent="center">
          <Text fontWeight="600" fontSize="25px">
            Loan application dashboard
          </Text>
        </Flex>
      </Flex>
      <DrawerComponent drawerState={drawerState} setDrawerState={setDrawerState}/>
    </>
  );
};

export default NavComponent;
