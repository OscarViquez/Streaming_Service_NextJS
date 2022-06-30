import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className='login-user'>

        <div className="login-user__top">

          <div className='login-user__logo' />

          <span className='login-user__title'>
            Who is Watching?
          </span>

        </div>

        <div className='login-user__user-box'>

          <img className='login-user__user-img' src='https://randomuser.me/api/portraits/women/8.jpg' />

          <div className='login-user__user-name'>
            Bryant
          </div>

        </div>

        <div className='login-user__buttons'>
          <button className='login-user__adult'>
            Add Adult
          </button>

          <button className='login-user__child'>
            Add Kid
          </button>
        </div>

      </div>
    </div>
  )
}
