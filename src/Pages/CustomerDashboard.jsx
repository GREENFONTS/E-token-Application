import { Box, Flex, Text, Image, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CustomerList from "../components/CustomerList";

const CustomerDashBoard = () => {
  const [halt, setHalt] = useState(false);
  return (
    <Box pl="4" m="auto" fontWeight="600" w="90%">
      <Box bgColor="#1c940f" width="25%" textAlign="center" color="white" p="4">
        <Text fontWeight="600">SME & StartUp</Text>
      </Box>

      <Box
        border="1px solid black"
        borderLeft="1px solid white"
        mt="3"
        pl="5"
        p="3"
        w="100%"
        fontSize="20px"
      >
        <Flex justifyContent="space-between" alignItems="center" p="3">
          <Flex h="100px">
            <Flex
              borderRadius="50%"
              h="50px"
              w="50px"
              mt="-5"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="/images/Ellipse 21.png"
                alt="logo"
                h="50px"
                w="50px"
              />
            </Flex>
          </Flex>

          <Flex>
            <Box>
              <Text>Business Name : Ladi's Poultry</Text>
              <Text>Module Name : Mr Sistus Oladele</Text>
              <Text>Amount : N5,000,000</Text>
              <Text>Term : 4 years</Text>
              <Text>Tracking Number : BW02072018001</Text>
            </Box>
          </Flex>

          <Flex>
            <Box>
              <Text>Account Number : BW02072018001</Text>
              <Text>E-Token ID : BW02072018001</Text>
              <Text>Wallet ID : BW02072018001</Text>
              <Text>Request ID : BW02072018001</Text>
              <Text>Transaction Number : BW02072018001</Text>
            </Box>
          </Flex>

          <Flex>
            <Box>
              <Text>Total amount Payable : N6,300,000</Text>
              <Text>Interest : 26%</Text>
              <Text>Rate Type : Fixed</Text>
              <Text>Phone Number : 09193948486</Text>
              <Text>Loan Ref : BW02072018001</Text>
            </Box>
          </Flex>
        </Flex>

        {halt ? (
          <Box h="50vh" mt="3" ml="5" p="3">
            <Box bgColor="#D9D9D9" h="50px" w="90%" m="auto" p="2">
              <Text ml="5"> Process Halted</Text>
            </Box>

            <VStack
              w="90%"
              m="auto"
              p="2"
              mt="50px"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing="20px"
            >
              <Button bgColor="#1c940f" color="white" w="15%" h="45px">
                Contact Customer
              </Button>
              <Button bgColor="#1c940f" color="white" w="15%" h="45px">
                Create dispute
              </Button>
              <Button
                bgColor="#1c940f"
                color="white"
                w="15%"
                h="45px"
                onClick={() => setHalt(false)}
              >
                UnHalt/Resolved
              </Button>
            </VStack>
          </Box>
        ) : (
          <Box bgColor="#D9D9D9" h="50vh" mt="3" ml="5" p="3">
            <Flex justifyContent="space-between" alignItems="center" p="0">
              <Text>Transaction History</Text>
              <Button
                bgColor="#1c940f"
                color="white"
                w="10%"
                onClick={() => setHalt(true)}
              >
                Halt
              </Button>
            </Flex>

            <Flex w="100%" justifyContent="space-between" alignItems="center">
              <Flex>
                <Text mr="5">S/N </Text>
                <Text> Name</Text>
              </Flex>
              <Text>Title</Text>
              <Text>Date</Text>
              <Text>Amount</Text>
              <Text></Text>
            </Flex>

            <Box mt="2">
              <CustomerList number={1} text={"Purchase of Land"} />

              <CustomerList number={2} text={"Purchase of Land"} />

              <CustomerList number={3} text={"Purchase of Land"} />
              <CustomerList number={4} text={"Purchase of Land"} />
              <CustomerList number={5} text={"Purchase of Land"} />
              <CustomerList number={6} text={"Purchase of Land"} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CustomerDashBoard;
