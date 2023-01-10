import React from 'react'

export default function Textarea (props) {
  function handleOnBlur(event){
    console.log('focus out got called.')
    props.onEdit({
      name: props.name,
      value: event.currentTarget.textContent
    })
  }
  return (
    <div 
        className={`keep-details ${props.className}${props.editing? '-expand': ''}`}
        contentEditable={props.editing}
        suppressContentEditableWarning={true}
        dir='ltr'
        aria-multiline='true'
        hint={props.hint}
        autoComplete='off'
        onBlur={handleOnBlur}
    >{props.data}
    </div>
  )
}
