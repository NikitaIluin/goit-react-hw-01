import s from './FriendList.module.css'
import FriendListItem from "./FriendListItem"

const FriendList = ({friends}) => {
  return (
    <div>
      <ul className={s.friendList}>
	{ /* Кількість li залежить від кількості об'єктів в масиві */ }
  {friends.map((item)=>{
    return (<li key={item.id}>      
		<FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline}/>
  </li>
  );
    })}
</ul>
    </div>
  )
}

export default FriendList