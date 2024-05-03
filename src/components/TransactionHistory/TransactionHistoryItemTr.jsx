import clsx from 'clsx'
import s from './TransactionHistory.module.css';
const TransactionHistoryItemTr = (transactions) => {
  const {type, amount, currency} = transactions;
  return (
    <>
     <td className={clsx(s.tr, s.type)}>{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}</td>
     <td className={s.td}>{amount}</td>
     <td className={s.td}>{currency}</td>
  </>
  )
}

export default TransactionHistoryItemTr