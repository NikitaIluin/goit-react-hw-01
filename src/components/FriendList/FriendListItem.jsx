import clsx from 'clsx'
import s from './FriendList.module.css'
const FriendListItem = (friends) => {
  const {avatar, name, isOnline}=friends;
  return (
    <div className={s.friendCard}>
    <img className={s.friendAvatar} src={avatar} alt={name} width="48" />
    <p className={s.friendName}>{name}</p>       
    <p className={clsx(s.infoStatus, isOnline ? s.online : s.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>

  </div>
  )
}

export default FriendListItem