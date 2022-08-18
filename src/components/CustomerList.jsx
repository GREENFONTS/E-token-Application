import {
  Flex,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Divider,
  VStack,
  Image,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { TbRecycle } from "react-icons/tb";

const CustomerList = ({ number, text }) => {
  const { isOpen, onClose } = useDisclosure();
  const [modalShow, setModalShow] = useState(false);
  return (
    <Flex
      bgColor="#ffffff"
      borderRadius="5px"
      w="100%"
      h="40px"
      p="3"
      mb="2"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex>
        <Text mr="5"> 0{number}</Text>
        <Text> To Addie</Text>
      </Flex>
      <Text>{text}</Text>
      <Text>28th August, 2022</Text>
      <Text>N5,000,000</Text>
      <Button
        bgColor="#1c940f"
        color="white"
        w="6%"
        h="30px"
        fontSize="12px"
        onClick={() => setModalShow(true)}
      >
        View
      </Button>

      <Modal isOpen={modalShow} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton onClick={() => setModalShow(false)} />
          <ModalBody>
            <Flex w="100%" justifyContent="center" alignItems="center" mt="5">
              <Box>
                <Alert
                  status="success"
                  bgColor="white"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="100px"
                  w="100%"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                    Transaction Details
                  </AlertTitle>
                </Alert>
              </Box>
            </Flex>
            <Divider />
            <Flex mt="5">
              <Flex w="60%">
                <VStack w="100%" p="3">
                  <Box w="100%">
                    <Box mb="2">
                      <Text fontSize="10px">Amount</Text>
                      <Text>N5,000,000</Text>
                    </Box>
                    <Divider w="100%" />
                  </Box>

                  <Box w="100%">
                    <Box mb="2">
                      <Text fontSize="10px">Transaction Date</Text>
                      <Text>2022-10-20 8:54pm</Text>
                    </Box>
                    <Divider w="100%" />
                  </Box>

                  <Box w="100%">
                    <Box mb="2">
                      <Text fontSize="10px">From wallet ID</Text>
                      <Text>7G1F23QT839LR5950KB87222</Text>
                    </Box>
                    <Divider w="100%" />
                  </Box>

                  <Box w="100%">
                    <Box mb="2">
                      <Text fontSize="10px">From Beneficiary</Text>
                      <Text>Adide Supermarket</Text>
                    </Box>
                    <Divider w="100%" />
                  </Box>

                  <Box w="100%">
                    <Box mb="2">
                      <Text fontSize="10px">Beneficiary ID</Text>
                      <Text>4244929941</Text>
                    </Box>
                    <Divider w="100%" />
                  </Box>
                </VStack>
              </Flex>
              <Flex mt="20px">
                <Divider orientation="vertical" height="270px" />
              </Flex>

              <Flex p="4" w="35%">
                <Box mt="10px" w="100%" p="0">
                  <Text fontWeight="600">Download</Text>

                  <Button
                    bgColor="#1c940f"
                    color="white"
                    w="100%"
                    h="30px"
                    fontSize="12px"
                    borderRadius="3px"
                    mt="3"
                  >
                    <Icon as={BsPrinter} mr="2" /> PRINT RECIEPT
                  </Button>

                  <Button
                    bgColor="white"
                    color="#1c940f"
                    w="100%"
                    h="30px"
                    fontSize="12px"
                    borderRadius="3px"
                    mt="3"
                    border="1px solid #1c940f"
                  >
                    <Icon as={TbRecycle} mr="2" /> REPAY BILL
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="whatsapp" onClick={() => setModalShow(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
export default CustomerList;
