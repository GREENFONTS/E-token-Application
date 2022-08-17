import { Flex, Text } from "@chakra-ui/react";

const SmallBox = ({ text, width }) => {
  return (
    <Flex
      w={width}
      borderRight="1px solid #1c940f"
      p="3"
      alignItems="center"
      justifyContent="center"
    >
      <Text>{text}</Text>
    </Flex>
  );
};

export default SmallBox;
