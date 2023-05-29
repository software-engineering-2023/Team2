import React from 'react';
import DataTable from './Datatable';
import Navbar from './Navbar';
import SecondNav from './SecondNav'

const columns = [
  {
    Header: 'Transaction ID',
    accessor: 'transactionid',
  },
  {
    Header: 'Account Number',
    accessor: 'accountnumber',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header:'Amount',
    accessor:'amount'
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

const data = [
    {
      transactionid: '1',
      accountnumber: '**** **** **** 1234',
      type: 'Ingoing',
      amount: 100.50,
      date: '2023-05-20',
      status: 'Approved',
    },
    {
      transactionid: '2',
      accountnumber: '**** **** **** 1234',
      type: 'Outgoing',
      amount: 75.25,
      date: '2023-05-19',
      status: 'Declined',
    },
    {
      transactionid: '3',
      accountnumber: '**** **** **** 1234',
      type: 'Deposit',
      amount: 200.10,
      date: '2023-05-18',
      status: 'Approved',
    },
    {
      transactionid: '4',
      accountnumber: '**** **** **** 1234',
      type: 'Withdrawal',
      amount: 50.75,
      date: '2023-05-17',
      status: 'Pending',
    },
    {
      transactionid: '5',
      accountnumber: '**** **** **** 1234',
      type: 'Withdrawal',
      amount: 300.60,
      date: '2023-05-16',
      status: 'Approved',
    },
  ];
  

const BankTrans = () => {
  return (
    <div className="trans">
      <Navbar></Navbar>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default BankTrans;