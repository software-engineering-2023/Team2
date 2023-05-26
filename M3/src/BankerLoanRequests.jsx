import React, { useState } from "react";
import DataTable from "./Datatable";
import Navbar from "./Navbar";
import Second from "./SecondNav";
import "./banker.css";
import { MDBBtn } from "mdb-react-ui-kit";
import BankerNavBar from "./BankerNavBar";
const BankerLoanRequests = () => {
  const [requests, setRequests] = useState([
    {
        requestid: "1",
        firstname: "John",
        secondname: "Doe",
        nationalID: "1234567890",
        accountnumber: "ABC123",
        date: "2023-05-20",
        amount: 1000,
        interest: 5,
        purpose: "Home Loan",
        doc: <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
        actions: (
          <>
            <MDBBtn onClick={() => handleAccept("1")} rounded color="secondary">
              Accept
            </MDBBtn>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <MDBBtn className="reject-btn" onClick={() => handleReject("1")} rounded color="secondary">
              Reject
            </MDBBtn>
          </>
        ),
      },
      // Add more entries here...
      {
        requestid: "2",
        firstname: "Alice",
        secondname: "Smith",
        nationalID: "0987654321",
        accountnumber: "DEF456",
        date: "2023-05-21",
        amount: 2000,
        interest: 7,
        purpose: "Car Loan",
        doc: <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
        actions: (
          <>
            <MDBBtn onClick={() => handleAccept("2")} rounded color="secondary">
              Accept
            </MDBBtn>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <MDBBtn className="reject-btn" onClick={() => handleReject("2")} rounded color="secondary">
              Reject
            </MDBBtn>
          </>
        ),
      },
      {
        requestid: "3",
        firstname: "Emily",
        secondname: "Johnson",
        nationalID: "5678901234",
        accountnumber: "GHI789",
        date: "2023-05-22",
        amount: 1500,
        interest: 6,
        purpose: "Education Loan",
        doc: <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
        actions: (
          <>
            <MDBBtn onClick={() => handleAccept("3")} rounded color="secondary">
              Accept
            </MDBBtn>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <MDBBtn className="reject-btn" onClick={() => handleReject("3")} rounded color="secondary">
              Reject
            </MDBBtn>
          </>
        ),
      },
      {
        requestid: "4",
        firstname: "Michael",
        secondname: "Brown",
        nationalID: "4321098765",
        accountnumber: "JKL012",
        date: "2023-05-23",
        amount: 2500,
        interest: 8,
        purpose: "Business Loan",
        doc: <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
        actions: (
          <>
            <MDBBtn onClick={() => handleAccept("4")} rounded color="secondary">
              Accept
            </MDBBtn>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <MDBBtn className="reject-btn" onClick={() => handleReject("4")} rounded color="secondary">
              Reject
            </MDBBtn>
          </>
        ),
      },
  ]);

  const handleAccept = (requestId) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.requestid === requestId
          ? { ...request, status: "Accepted", actions: "" }
          : request
      )
    );
  };

  const handleReject = (requestId) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.requestid === requestId
          ? { ...request, status: "Rejected", actions: "" }
          : request
      )
    );
  };

  const columns = [
    {
      Header: "Request ID",
      accessor: "requestid",
    },
    {
      Header: "Client First Name",
      accessor: "firstname",
    },
    {
      Header: "Client Last Name",
      accessor: "secondname",
    },
    {
      Header: "Client National ID",
      accessor: "nationalID",
    },
    {
      Header: "Account Number",
      accessor: "accountnumber",
    },
    {
      Header: "Request Date",
      accessor: "date",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Interest Rate",
      accessor: "interest",
    },
    {
        Header: "Purpose",
        accessor: "purpose",
    },
    {
      Header: "Uploaded Documents",
      accessor: "doc",
      disableFilters: true,
      Cell: () => <MDBBtn rounded className='mx-2' color="secondary">View</MDBBtn>,
    },
    {
      Header: "Actions",
      accessor: "actions",
      disableFilters: true,
      Cell: ({ row }) => row.original.actions,
    },
  ];

  return (
    <div className="fo2">
      <BankerNavBar></BankerNavBar>
      {/* <Second></Second> */}
      <DataTable columns={columns} data={requests}></DataTable>
    </div>
  );
};

export default BankerLoanRequests;
