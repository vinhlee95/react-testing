import React from 'react'
import {Redirect} from 'react-router-dom'

import { saveData } from '../api'

export const TddForm = ({user}) => {
  const [isSubmitting, setSubmitting] = React.useState(false)
  const [isSubmitted, setSubmitted] = React.useState(false)

  const onSubmit = e => {
    e.preventDefault()
    const {title, content} = e.target.elements

    setSubmitting(true)
    saveData({
      title: title.value,
      content: content.value,
      id: user.id
    }).then(() => setSubmitted(true))
  }

  if(isSubmitted) return <Redirect to='/' />

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='title-input'>Title</label>
      <input id='title-input' name='title'/>
      <label htmlFor='content-input'>Content</label>
      <input id='content-input' name='content'/>
      <button type='submit' disabled={isSubmitting}>Submit</button>
    </form>
  )
}
