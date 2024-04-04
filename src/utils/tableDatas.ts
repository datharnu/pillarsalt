import React from "react";

export type tableData = {
  amountLabel: string;
  amount: string;
  transactionRefLabel: string;
  transactionRef: string;
  depositorLabel: string;
  depositor: string;
  narrationLabel: string;
  narration: string;
  branchLabel: string;
  branch: string;
  branchIdLabel: string;
  branchId: string;
  actionLabel: string;
  actions: string;
  id: number;
  snLabel: string;
  sn: number;
  dateLabel: string;
  date: string;
  statusLabel: string;
  status: string;
};

export const tableDatas: tableData[] = [
  {
    id: 1,
    amountLabel: "Amount",
    amount: "N200,000",
    transactionRefLabel: "Transaction Ref",
    transactionRef: "1234567890",
    depositorLabel: "Depositor",
    depositor: "Jennifer",
    narrationLabel: "Narration",
    narration: "Credit",
    branchLabel: "Branch",
    branch: "PillarSalt LTD",
    branchIdLabel: "Branch ID",
    branchId: "Ikeja",
    actionLabel: "Action",
    actions: "View",
    snLabel: "S/N",
    sn: 1,
    dateLabel: "Date",
    date: "12/12/2022",
    statusLabel: "Status:",
    status: "Pending",
  },
  {
    id: 2,
    amountLabel: "Amount",
    amount: "N300,000",
    transactionRefLabel: "Transaction Ref",
    transactionRef: "9876543210",
    depositorLabel: "Depositor",
    depositor: "John Doe",
    narrationLabel: "Narration",
    narration: "Debit",
    branchLabel: "Branch",
    branch: "ABC Corporation",
    branchIdLabel: "Branch ID",
    branchId: "Lagos",
    actionLabel: "Action",
    actions: "Edit",
    snLabel: "S/N",
    sn: 2,
    dateLabel: "Date",
    date: "03/05/2023",
    statusLabel: "Status:",
    status: "Completed",
  },
  {
    id: 3,
    amountLabel: "Amount",
    amount: "N500,000",
    transactionRefLabel: "Transaction Ref",
    transactionRef: "5432109876",
    depositorLabel: "Depositor",
    depositor: "Alice Smith",
    narrationLabel: "Narration",
    narration: "Credit",
    branchLabel: "Branch",
    branch: "XYZ Corporation",
    branchIdLabel: "Branch ID",
    branchId: "Abuja",
    actionLabel: "Action",
    actions: "Delete",
    snLabel: "S/N",
    sn: 3,
    dateLabel: "Date",
    date: "07/18/2023",
    statusLabel: "Status:",
    status: "Pending",
  },
  {
    id: 4,
    amountLabel: "Amount",
    amount: "N400,000",
    transactionRefLabel: "Transaction Ref",
    transactionRef: "2468013579",
    depositorLabel: "Depositor",
    depositor: "Michael Johnson",
    narrationLabel: "Narration",
    narration: "Credit",
    branchLabel: "Branch",
    branch: "LMN Corporation",
    branchIdLabel: "Branch ID",
    branchId: "Port Harcourt",
    actionLabel: "Action",
    actions: "Approve",
    snLabel: "S/N",
    sn: 4,
    dateLabel: "Date",
    date: "09/22/2023",
    statusLabel: "Status:",
    status: "Completed",
  },
];
