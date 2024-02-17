import React from 'react'

const ClotheList2 = ({clothes}) => {
  return (
    <div>
        {clothes.map(clothe => (
            <div>
                <p>{clothe.name}</p>
            </div>
        ))}
    </div>
  )
}

export default ClotheList2