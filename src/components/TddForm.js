import React from 'react'

export const TddForm = () => {
  const [isSubmitting, setSubmitting] = React.useState(false)

  const onSubmit = e => {
    e.preventDefault()
    setSubmitting(true)
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='title-input'>Title</label>
      <input id='title-input' />
      <label htmlFor='content-input'>Content</label>
      <input id='content-input' />
      <button type='submit' disabled={isSubmitting}>Submit</button>
    </form>
  )
}
