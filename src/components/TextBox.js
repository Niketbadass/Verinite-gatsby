import React from 'react'

/*const data = [
  {
    title: 'Nature, our support system ',
    description:
      'A tree needs the support of its surroundings. Verinite reciprocates the help & is mindful of its personal, corporate, social & environmental responsibilities.',
    textClass: 'v1',
  },
  {
    title: 'Bark, our people',
    description:
      'When the bark is healthy and strong, the tree grows taller & can spread its branches. We invest in our people & help them  achieve their true potential.',
    textClass: 'v2',
  },
  {
    title: 'Leaves, our agility',
    description:
      'The old leaves and ideas give way to new leaves and fresh perspective. Innovation drives us to adapt to change and improve our services.',
    textClass: 'v3',
  },
  {
    title: 'Branches, our knowledge',
    description:
      'Knowledge can be compared to the branches of a tree, when it spreads out it creates a better impact on the lives of people who encounter it.',
    textClass: 'v4',
  },
  {
    title: 'Roots, our values',
    description:
      'Integrity is the ground on which Verinite stands and is our inspiration. It helps us create, build & sustain meaningful relationships, growing stronger.',
    textClass: 'v5',
  },
]*/
const TextBox = props => {
  return (
    
        <div className="text_box">
          <h6>{props.title}</h6>
          <p>{props.description}</p>
        </div>
     
   
  )
}
export default TextBox
