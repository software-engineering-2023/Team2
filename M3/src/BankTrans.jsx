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
    Header: 'Card Number',
    accessor: 'cardnumber',
  },
  {
    Header: 'Merchant Name',
    accessor: 'merchantname',
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
      cardnumber: '**** **** **** 1234',
      merchantname: 'ABC Store',
      amount: 100.50,
      date: '2023-05-20',
      status: 'Approved',
    },
    {
      transactionid: '2',
      cardnumber: '**** **** **** 5678',
      merchantname: 'XYZ Shop',
      amount: 75.25,
      date: '2023-05-19',
      status: 'Declined',
    },
    {
      transactionid: '3',
      cardnumber: '**** **** **** 9012',
      merchantname: 'E-commerce Co',
      amount: 200.10,
      date: '2023-05-18',
      status: 'Approved',
    },
    {
      transactionid: '4',
      cardnumber: '**** **** **** 3456',
      merchantname: 'Online Marketplace',
      amount: 50.75,
      date: '2023-05-17',
      status: 'Pending',
    },
    {
      transactionid: '5',
      cardnumber: '**** **** **** 7890',
      merchantname: 'Fashion Store',
      amount: 300.60,
      date: '2023-05-16',
      status: 'Approved',
    },
    {
      transactionid: '6',
      cardnumber: '**** **** **** 2345',
      merchantname: 'Grocery Market',
      amount: 25.00,
      date: '2023-05-15',
      status: 'Approved',
    },
    {
      transactionid: '7',
      cardnumber: '**** **** **** 6789',
      merchantname: 'Tech Shop',
      amount: 150.80,
      date: '2023-05-14',
      status: 'Declined',
    },
    {
      transactionid: '8',
      cardnumber: '**** **** **** 0123',
      merchantname: 'Home Decor Store',
      amount: 85.45,
      date: '2023-05-13',
      status: 'Approved',
    },
    {
      transactionid: '9',
      cardnumber: '**** **** **** 4567',
      merchantname: 'Fitness Studio',
      amount: 120.00,
      date: '2023-05-12',
      status: 'Approved',
    },
    {
      transactionid: '10',
      cardnumber: '**** **** **** 8901',
      merchantname: 'Restaurant',
      amount: 65.75,
      date: '2023-05-11',
      status: 'Pending',
    },
    {
        transactionid: 'TID001',
        cardnumber: '**** **** **** 1234',
        merchantname: 'ABC Store',
        amount: 100.50,
        date: '2023-05-20',
        status: 'Approved',
      },
      {
        transactionid: 'TID002',
        cardnumber: '**** **** **** 5678',
        merchantname: 'XYZ Shop',
        amount: 75.25,
        date: '2023-05-19',
        status: 'Declined',
      },
      {
        transactionid: 'TID003',
        cardnumber: '**** **** **** 9012',
        merchantname: 'E-commerce Co',
        amount: 200.10,
        date: '2023-05-18',
        status: 'Approved',
      },
      {
        transactionid: 'TID004',
        cardnumber: '**** **** **** 3456',
        merchantname: 'Online Marketplace',
        amount: 50.75,
        date: '2023-05-17',
        status: 'Pending',
      },
      {
        transactionid: 'TID005',
        cardnumber: '**** **** **** 7890',
        merchantname: 'Fashion Store',
        amount: 300.60,
        date: '2023-05-16',
        status: 'Approved',
      },
      {
        transactionid: 'TID006',
        cardnumber: '**** **** **** 2345',
        merchantname: 'Grocery Market',
        amount: 25.00,
        date: '2023-05-15',
        status: 'Approved',
      },
      {
        transactionid: 'TID007',
        cardnumber: '**** **** **** 6789',
        merchantname: 'Tech Shop',
        amount: 150.80,
        date: '2023-05-14',
        status: 'Declined',
      },
      {
        transactionid: 'TID008',
        cardnumber: '**** **** **** 0123',
        merchantname: 'Home Decor Store',
        amount: 85.45,
        date: '2023-05-13',
        status: 'Approved',
      },
      {
        transactionid: 'TID009',
        cardnumber: '**** **** **** 4567',
        merchantname: 'Fitness Studio',
        amount: 120.00,
        date: '2023-05-12',
        status: 'Approved',
      },
      {
        transactionid: 'TID010',
        cardnumber: '**** **** **** 8901',
        merchantname: 'Restaurant',
        amount: 65.75,
        date: '2023-05-11',
        status: 'Pending',
      },
  ];
  

const BankTrans = () => {
  return (
    <div className="trans">
      <Navbar></Navbar>
      <SecondNav></SecondNav>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default BankTrans;