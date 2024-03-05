import { useEffect, useMemo } from "react";
import { CreateTransaction } from "./create.transaction.component";
import { Button } from "@mui/material";
import { useTransaction } from "../stores/transaction.hooks";
import { TransactionsTable } from "../../table/components/table.component";

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
              {
                Header: '',
                accessor: 'id',
                Cell: props => <button className="" onClick={() => {
                    
                  repeatTransaction(props.cell.row.values.id, props.cell.row.values.amount)
                }}>Repeat</button>,
            }
            ]
          },
        ];
    
        return (
        
            <>
                <CreateTransaction />
                <Button onClick={() => openCreationTransactionModal()} style={{ margin: 15}}  >Create Transaction</Button>
                <TransactionsTable data={transactions} columns={columns} />
                <div>{error}</div>
            </>
        );
}
