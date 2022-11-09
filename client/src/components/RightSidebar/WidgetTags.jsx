import React from 'react'

const WidgetTags = () => {
  const tags=['c','css','c#','JavaScript','Java','php','express','firebase','html','node.js','r','ios','.net','android','nope.js','swift','sql-server','json','arrays','mysql','sql',]
  return (
    <div className='widget-tags'>
      <h3>
        Watched tags
      </h3>
      <div className="widget-tags-div">
        {
          tags.map((tag)=>(
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags