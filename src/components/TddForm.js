import React from 'react'

export const TddForm = () => {
  return (
    <form>
      <label htmlFor='title-input'>Title</label>
      <input id='title-input' />
      <label htmlFor='content-input'>Content</label>
      <input id='content-input' />
      <button>Submit</button>
    </form>
  )
}
