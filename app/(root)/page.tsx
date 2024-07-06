import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName: 'Sharayu', lastName: 'Anuse', email:'sharayu.anuse@gmail.com'};



  return (
    <section className='home'>  {/*home css in global.css file*/}
      <div className='home-content'>
        <header className='home-header'>
          {/*creates a component so that can be used across all pages*/}
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn ?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks= {1}
          totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={loggedIn} 
      transactions={[]}
      banks={[{currentBalance: 123.50},{currentBalance: 500}]}
      />
    </section>
  )
}

export default Home
