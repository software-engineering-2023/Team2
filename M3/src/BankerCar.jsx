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
        model:"Mercedes CLA",
        year: "2021",
        status: "Pending",
        doc: <button className="p-blue bg btn btn-primary h8">View</button>,
        actions: (
          <>
            <button onClick={() => handleAccept("1")} className="p-blue bg btn btn-primary h8">
              Accept
            </button>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <button onClick={() => handleReject("1")} className="p-blue bg btn btn-primary h8">
              Reject
            </button>
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
        model:"BMW 320",
        year: "2020",
        status: "Pending",
        actions: (
          <>
            <button onClick={() => handleAccept("2")} className="p-blue bg btn btn-primary h8">
              Accept
            </button>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <button onClick={() => handleReject("2")} className="p-blue bg btn btn-primary h8">
              Reject
            </button>
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
        model:"Mercedes C120",
        year: "2021",
        status: "Pending",
        actions: (
          <>
            <button onClick={() => handleAccept("3")} className="p-blue bg btn btn-primary h8">
              Accept
            </button>
            <span style={{ marginLeft: "8px", marginRight: "8px" }}></span>
            <button onClick={() => handleReject("3")} className="p-blue bg btn btn-primary h8">
              Reject
            </button>
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
      Header: "Interest Rate (%) ",
      accessor: "interest",
    },
    {
        Header: "Car Model",
        accessor: "model",
    },
    {
        Header: "Car Year",
        accessor: "year",
      },
    {
      Header: "Status",
      accessor: "status",
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
