import React, { useEffect, useState } from 'react'

const KnowledgeForm = props => {
  const { relatedItem, title } = props
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="row">
      <div className="col-12 text-center mb_15">
        <h2 className="title_sm">{title}</h2>
        <form className="search_box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleChange}
          />
          {relatedItem ? (
            <p className="text-left mt_25">
              Related :<a href="!#">Bank</a>
              <a href="!#">Finance</a>
              <a href="!#">Money</a>
              <a href="!#">Cards</a>
              <a href="!#">Payment</a>
            </p>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default KnowledgeForm
