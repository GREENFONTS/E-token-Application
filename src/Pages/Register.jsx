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
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserRegister } from "../redux/features/Users/auth";
import { dispatch } from "../redux/store";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [checked, setChecked] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkPasswordLength, setCheckPasswordLength] = useState(false);
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (password !== password2 && password2.length > 3) {
      setCheckPassword(true);
    } else {
        setCheckPassword(false)
    };
    if (password.length > 3 && password.length < 8) {
      setCheckPasswordLength(true);
    } else setCheckPasswordLength(false);
    
    if(checked && !checkPassword && !checkPasswordLength){
        setDisabled(false)
    }
  }, [password, password2, checked]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formbody = {
      email,
      password,
    };
    dispatch(UserRegister(formbody));
  };
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

          <VStack spacing="20px">
            <FormControl>
              {/* <FormLabel>Account Type</FormLabel> */}
              <Select placeholder="Select Account type">
                <option value="option1">Individual</option>
                <option value="option2">Business</option>
              </Select>
            </FormControl>

            <FormControl>
              {/* <FormLabel>Email Address</FormLabel> */}
              <Input
                placeholder="email@gmail.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              {/* <FormLabel>Password</FormLabel> */}
              <Input
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {checkPasswordLength && (
                <FormHelperText color={"red.200"} textAlign="left">
                  Password is less than 8 characters
                </FormHelperText>
              )}
            </FormControl>

            <FormControl>
              {/* <FormLabel>Confirm Password</FormLabel> */}
              <Input
                placeholder="Confirm your password"
                type="password"
                onChange={(e) => setPassword2(e.target.value)}
              />
              {checkPassword && (
                <FormHelperText color={"red.200"} textAlign="left">
                  Password doesn't Match
                </FormHelperText>
              )}
            </FormControl>

            <Flex>
              <Checkbox
                colorScheme="whatsapp"
                onChange={(e) => setChecked(e.target.checked)}
              >
                {" "}
                I have read and agreed to the eNaira Terms of Service and
                Privacy Policy
              </Checkbox>
            </Flex>

            <Button
              bgColor="#1c940f"
              color="white"
              w="100%"
              h="45px"
              onClick={(e) => submitHandler(e)}
              disabled={disabled}
            >
              SignUp
            </Button>
            <Flex>
              <Text mr="2">Do you have an Account? </Text>
              <Link to="/SignIn">
                <Text color="#1c940f" fontWeight="600">
                  SignIn
                </Text>
              </Link>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Register;
