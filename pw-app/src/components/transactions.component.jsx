import { useEffect, useMemo } from "react";
import { CreateTransaction } from "./create.transaction.component";
import { Button } from "@mui/material";
import { useTransaction } from "../stores/transaction.hooks";
import { TransactionsTable } from "./table.component";

export const TransactionsComponent = () => {
    let { fetchTransactions, repeatTransaction, openCreationTransactionModal,
         error, isLoading, transactions } = useTransaction();

    useEffect(() =>
    {
        if (!!transactions && !isLoading)
        {
            fetchTransactions();
        }
    });

    const columns =
        [
          {
            Header: "Transactions",
            columns: [
              {
                Header: "Date",
                accessor: "date",
              },
              {
                Header: "Correspondent Name",
                accessor: "username",
              },
              {
                Header: "Amount",
                accessor: "amount",
              },
              {
                Header: "Balance",
                accessor: "balance",
              },
            ]
          },
        ];
    
    
    const data = [
        { id: 1, date: "2023-11-01 20:23:11", username: "Vasja Pupkin", amount : 19, balance: 300 },
        { id: 2, date: "2023-12-21 21:24:11", username: "Jhon Petrucci", amount : 20, balance: 340 },
        { id: 3, date: "2024-02-01 10:23:11", username: "Alex Abmrosimov", amount : 40, balance: 220 },
    ]

        return (
        
            <>
                <CreateTransaction />
                <Button onClick={() => openCreationTransactionModal()} style={{ margin: 15}}  >Create Transaction</Button>
                <TransactionsTable data={data} columns={columns}/>
                <div>{error}</div>
            </>
        );
}
