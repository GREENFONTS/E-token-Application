import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  useDisclosure,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Text,
  Button,
  Icon,
  Link,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DrawerComponent = (props) => {
  const nav = useNavigate();
  const { onClose } = useDisclosure();
  return (
    <Drawer
      isOpen={props.drawerState}
      onClose={onClose}
      placement="left"
      isFullHeight={false}
    >
      <DrawerOverlay />
      <DrawerContent bg="#1c940f">
        <DrawerHeader p="4" m="0">
          <Flex
            w="100%"
            align="center"
            justify="space-between"
            textColor="white"
          >
            <Flex alignItems="center">
              <Image
                src={"/images/Vector2.png"}
                alt="logo"
                boxSize="30px"
                mr="3"
              />
              <Text fontWeight="600" fontSize="20px">
                Dashboard
              </Text>
            </Flex>
            <Button
              h={10}
              w={10}
              variant="unstyled"
              m={3}
              onClick={() => props.setDrawerState(false)}
            >
              x
            </Button>
          </Flex>
        </DrawerHeader>
        <DrawerBody p="0" m="0">
          <Flex
            p="5"
            justifyContent="space-between"
            textColor="white"
            alignItems="center"
          >
            <Flex
              alignItems="center"
              onClick={() => {
                nav("/");
                props.setDrawerState(false);
              }}
            >
              <Image
                src={"/images/Vector.png"}
                alt="logo"
                boxSize="20px"
                mr="3"
              />
              <Text fontSize="20px">Applications</Text>
            </Flex>
            <Icon as={MdOutlineKeyboardArrowRight} fontSize="20px" />
          </Flex>

          <Flex
            p="5"
            justifyContent="space-between"
            textColor="white"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Image
                src={"/images/Group.png"}
                alt="logo"
                boxSize="20px"
                mr="3"
              />
              <Text fontSize="20px">Borrowing</Text>
            </Flex>
            <Icon as={MdOutlineKeyboardArrowRight} fontSize="20px" />
          </Flex>

          <Flex
            p="5"
            justifyContent="space-between"
            textColor="white"
            alignItems="center"
          >
            <Flex
              alignItems="center"
              onClick={() => {
                nav("/LoanDashboard");
                props.setDrawerState(false);
              }}
            >
              <Image
                src={"/images/Vector.png"}
                alt="logo"
                boxSize="20px"
                mr="3"
              />
              <Text fontSize="20px">Loans</Text>
            </Flex>
            <Icon as={MdOutlineKeyboardArrowRight} fontSize="20px" />
          </Flex>

          <Flex
            p="5"
            justifyContent="space-between"
            textColor="white"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Image
                src={"/images/Vector.png"}
                alt="logo"
                boxSize="20px"
                mr="3"
              />
              <Text fontSize="20px">Repayments</Text>
            </Flex>
            <Icon as={MdOutlineKeyboardArrowRight} fontSize="20px" />
          </Flex>

          <Flex
            p="5"
            justifyContent="space-between"
            textColor="white"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Image
                src={"/images/Vector.png"}
                alt="logo"
                boxSize="20px"
                mr="3"
              />
              <Text fontSize="20px">Reports</Text>
            </Flex>
            <Icon as={MdOutlineKeyboardArrowRight} fontSize="20px" />
          </Flex>

          <Flex
            p="5"
            justifyContent="space-between"
            textColor="white"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Image
                src={"/images/Vector.png"}
                alt="logo"
                boxSize="20px"
                mr="3"
              />
              <Text fontSize="20px">Collateral Register</Text>
            </Flex>
            <Icon as={MdOutlineKeyboardArrowRight} fontSize="20px" />
          </Flex>

          <Flex
            p="5"
            justifyContent="space-between"
            textColor="white"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Image
                src={"/images/Vector.png"}
                alt="logo"
                boxSize="20px"
                mr="3"
              />
              <Text fontSize="20px">Collections Sheets</Text>
            </Flex>
            <Icon as={MdOutlineKeyboardArrowRight} fontSize="20px" />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
