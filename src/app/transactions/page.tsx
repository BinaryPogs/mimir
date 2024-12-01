import { TransactionForm } from "@/components/transactions/transaction-form";

export default function TransactionsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Transaction</h1>
      <div className="max-w-2xl">
        <TransactionForm />
      </div>
    </div>
  );
}