import { Flex, Text, Button } from "@chakra-ui/react";

const CustomerList = ({ number, text }) => {
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
      <Button bgColor="#1c940f" color="white" w="6%" h="30px" fontSize="12px">
        View
      </Button>
    </Flex>
  );
};
export default CustomerList;
