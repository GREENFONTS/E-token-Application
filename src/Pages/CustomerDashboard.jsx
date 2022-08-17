import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import CustomerList from "../components/CustomerList";

const CustomerDashBoard = () => {
  return (
    <Box p="4" m="auto" fontWeight="600" w="90%">
      <Box bgColor="#1c940f" width="25%" textAlign="center" color="white" p="4">
        <Text fontWeight="600">SME & StartUp</Text>
      </Box>

      <Box
        border="1px solid black"
        borderLeft="1px solid white"
        mt="5"
        p="5"
        w="100%"
        fontSize="20px"
      >
        <Flex justifyContent="space-between" alignItems="center" p="5">
          <Flex h="100px">
            <Flex
              borderRadius="50%"
              h="50px"
              w="50px"
              mt="-5"
              border="1px solid black"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="/images/Frame 3119.png"
                alt="logo"
                h="40px"
                w="40px"
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

        <Box bgColor="#D9D9D9" h="50vh" mt="5" ml="5" p="5">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>Transaction History</Text>
            <Button bgColor="#1c940f" color="white" w="10%">
              Halt
            </Button>
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
      </Box>
    </Box>
  );
};

export default CustomerDashBoard;
