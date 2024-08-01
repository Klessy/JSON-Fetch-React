import React from 'react'

const Button = ({ icon, btnClass, btnTitle="click", onClick }) => {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>
        {icon}
        {btnTitle}
    </button>
  )
}

export default Button