import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CustomTag from 'common/custom-tag'
import CustomInputWithButton from 'common/custom-input-with-button'

export default function TagsBlock ({ tags, setTags }) {
  const [tag, setTag] = React.useState('')

  const addTagHandler = React.useCallback(() => {
    const newTags = [...new Set([...tags, tag])]
    setTag('')
    setTags(newTags)
  }, [tag, tags, setTag, setTags])

  const removeTagHandler = React.useCallback((value) => {
    const newTags = tags.filter(text => text !== value)
    setTags(newTags)
  }, [tags, setTags])

  const renderTags = React.useMemo(() => {
    return tags.map(({ id, data }) => (<CustomTag key={id} text={data} clickHandler={removeTagHandler} />))
  }, [tags, removeTagHandler])

  return (
    <>
      <CustomInputWithButton
        title='Keys'
        value={tag}
        setValue={setTag}
        buttonText="Add"
        disabled={!tag}
        clickHandler={addTagHandler}
      />

      <StyledTagsWrapper>
        {renderTags}
      </StyledTagsWrapper>
    </>
  )
}

TagsBlock.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired
}

const StyledTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100px;
  border: solid 2px rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
`
