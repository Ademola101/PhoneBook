import React from 'react'

export default function Phone({person,children}) {
  return ( <>
    <div > Name:

{person.name}
    </div>
<div>
Number:
  {person.number}  {children}
</div>
    </>
  )
}
