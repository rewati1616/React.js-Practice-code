import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'


const users = [
  {
    img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Highly engaged customer with strong brand loyalty and frequent purchases.",
    color:"royalblue",
    tag: "Loyal"
  },
  {
    img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Potential high-value customer showing increasing interest in products.",
    color:"orange",
    tag: "Premium"

  },
  {
    img:"https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Potential high-value customer showing increasing interest in products.",
    color:"lightseagreen",
    tag: "Elite"

  },
  {
    img:"https://images.unsplash.com/photo-1772987438485-ac832640c8a5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Satisfied customer with consistent interactions and positive feedback.",
    color:"pink",
    tag: "Satisfied"
  },
]

const App = () => {
  return (
    <div >
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App