import clsx from 'clsx'
import s from './TransactionHistory.module.css';
import TransactionHistoryItemTr from "./TransactionHistoryItemTr"

const TransactionHistory = ({transactions}) => { 
  return (
    <div>
      <table className={s.table}>
  <thead className={s.header}>
    <tr className={s.tr}>
      <th className={s.title}>Type</th>
      <th className={s.title}>Amount</th>
      <th className={s.title}>Currency</th>
    </tr>
  </thead>

  <tbody className={s.body}>  
    {transactions.map((item)=>{
    return (<tr  className={clsx(s.tr, transactions.indexOf(item) % 2 !== 0 && s.backColor)}  key={item.id}>      
		<TransactionHistoryItemTr type ={item.type} amount={item.amount} currency={item.currency} />
   </tr>
   );
    })}
  </tbody>
</table>
    </div>
  )
}

export default TransactionHistory