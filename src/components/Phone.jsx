import React from 'react'

export default function Phone({person}) {
  return ( <>
    <div> Name:

{person.name}
    </div>
<div>
Number:
  {person.number}
</div>
    </>
  )
}
