import React from 'react'
import Section1 from './components/section1/section1' 
import Section2 from './components/section2/section2'


const App = () => {
  const users =[
  {img:'https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8 ',
    intro:' ',
    color:'royalblue',
    tag:'Satisfied' 

  },
  {img:' https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww' ,
    intro:' ',
    color:'lightseagreen',
    tag:'Underbanked'
  },
  {img:'https://images.unsplash.com/photo-1708496166091-b0c3abfb5d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA5fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D ',
    intro:' ',
    color:'brown',
    tag:'Underserved'

  },
  {img:'https://images.unsplash.com/photo-1760074032649-0243993135b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAzfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D',
    intro:' ',
    color:'orange',
    tag:'Underserved'

  }
  
  ]
  
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
      
    </div>
  )
}

export default App
  