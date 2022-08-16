import React from "react";
import Data from "./LoanData";
import { useState } from "react";
import LoanAppList from "./LoanAppList";
import {
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  Flex,
  Td,
  Tbody,
  TabList,
  Tabs,
  Tab,
} from "@chakra-ui/react";

const Home = () => {
  const [info, setInfo] = useState(Data);
  return (
    <>
      <Tabs variant="unstyled" width="100%" p="5">
        <TabList p="3">
          <Tab
            width="30%"
            color="white"
            bgColor="#1c940f"
            borderRightColor="white"
            borderRightWidth="2px"
            _selected={{ color: "black", bgColor: "white" }}
          >
            Individual
          </Tab>
          <Tab
            width="30%"
            color="white"
            bgColor="#1c940f"
            borderRightColor="white"
            borderRightWidth="2px"
            _selected={{ color: "black", bgColor: "white" }}
          >
            Cooperate
          </Tab>

          <Tab
            bgColor="#1c940f"
            color="white"
            borderRightColor="white"
            borderRightWidth="2px"
            width="30%"
            _selected={{ color: "black", bgColor: "white" }}
          >
            SME & StartUp
          </Tab>
        </TabList>
      </Tabs>
      <TableContainer p="5">
        <Table variant="striped" colorScheme="whatsapp" p="5">
          <Thead>
            <Tr>
              <Td>Name</Td>
              <Td>Amount</Td>
              <Td>Term</Td>
              <Td>Interest rate</Td>
              <Td>Rate Type</Td>
              <Td>Total Amount Payable</Td>
              <Td></Td>
            </Tr>
          </Thead>
          <Tbody>
            {Data.map((data) => {
              return (
                <Tr key={data.name}>
                  <Td>{data.name}</Td>
                  <Td>{data.amount}</Td>
                  <Td>{data.term}</Td>
                  <Td>{data.intrestRate}</Td>
                  <Td>{data.rateType}</Td>
                  <Td>{data.amountPayable}</Td>
                  <Td color="red" _hover={{ cursor: "pointer" }}>
                    View
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>

    /* <div className="main-cont">
        <div className="dash-header">
          <div>
            <p>Individual</p>
          </div>
          <div>
            <p>Coperate</p>
          </div>
          <div>
            <p>SME's and Startups</p>
          </div>
        </div>
        <div className="table">
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>Amount</p>
          </div>
          <div>
            <p>Term</p>
          </div>
          <div>
            <p>Interest Rate</p>
          </div>
          <div>
            <p>Rate type</p>
          </div>
          <div>
            <p>Amount Payable</p>
          </div>
        </div>
        <div className="">
          <LoanAppList info={info} />
        </div>
      </div> */
  );
};

export default Home;
