import TransactionList from '../../components/TransactionList';
import TransactionForm from '../../components/TransactionForm';
import { useSelector } from 'react-redux';
import { selectFlattenedTransactions } from './transactionsSlice';

export default function Transactions() {
    const transactions = useSelector(selectFlattenedTransactions);
    return (
        <div className='comments-container'>
            <TransactionList
                transactions={transactions}
            />
            <TransactionForm />
        </div>
    )
}
