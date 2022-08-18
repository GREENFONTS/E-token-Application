import {
  Flex,
  Image,
  Box,
  Text,
  FormControl,
  Input,
  FormLabel,
  Select,
  HStack,
  VStack,
  Checkbox,
  Button
} from "@chakra-ui/react";

const Register = () => {
  return (
    <Flex>
      <Flex w="75%">
        <Image src="/images/landingImage.png" alt="Image" w="100%" h="100vh" />
        <Box position="absolute" left="50" p="5">
          <Image
            src="/images/eNairaLogo.png"
            alt="eNairaLogo"
            w="100%"
            h="50px"
          />
        </Box>
      </Flex>

      <Flex w="25%" alignItems="center" justifyContent="center">
        <Box h="80vh" m="auto" p="5">
          <Box textAlign="center">
            <Text fontSize="24px" fontWeight="600">
              Welcome to e-Naira WebApp
            </Text>
            <Box p="5">
              <Text fontSize="13px" fontWeight="500" color="gray">
                Create Individual / Business account and start the adventure
              </Text>
            </Box>
          </Box>

          <VStack spacing="10px">
            <FormControl>
              <FormLabel>Account Type</FormLabel>
              <Select placeholder="Select Account type">
                <option value="option1">Individual</option>
                <option value="option2">Business</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Email Address</FormLabel>
             <Input placeholder="email@gmail.com" type="email" />
            </FormControl>

            <FormControl>
            <FormLabel>Password</FormLabel>
             <Input placeholder="Enter your password" type="password" />
            </FormControl>

            <FormControl>
            <FormLabel>Confirm Password</FormLabel>
             <Input placeholder="Confirm your password" type="password" />
            </FormControl>

            <Flex>
                <Checkbox colorScheme="whatsapp"> I have read and agreed to the eNaira Terms of Service and Privacy Policy</Checkbox>
            </Flex>

            <Button></Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Register;
