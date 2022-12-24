import React from 'react'


export const Button = ({btncolor,btnname,OnAdd}) => {


    
  return (
    <div>
         <button style={{backgroundColor: btncolor}} onClick={OnAdd} className="btn">{btnname}</button>
    </div>
  )
}

Headers.defaultProps = {
    btncolor:'steelblue',
}