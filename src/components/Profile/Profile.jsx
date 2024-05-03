import s from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={s.card}>
   <div >
    <img className={s.avatar}
      src ={image}
      alt={tag}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
   </div>

   <ul className={s.stats}>
    <li className={s.statsItem}>
      <span className={s.statsLabel}>Followers </span>
      <span className={s.statsValue}>{stats.followers}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.statsLabel}>Views </span>
      <span className={s.statsValue}>{stats.views}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.statsLabel}>Likes </span>
      <span className={s.statsValue}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile