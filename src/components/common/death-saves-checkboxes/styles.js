import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const SaveGroup = styled.div`
  align-self: ${({ reversed }) => (reversed ? 'flex-end' : 'flex-start')};
  margin: 0.4rem 0 0.2rem;
  display: flex;
  width: 60%;
  flex-direction: ${({ reversed }) => (reversed ? 'row-reverse' : 'row')};
  justify-content: space-between;
`
SaveGroup.propTypes = {
  reversed: PropTypes.bool
}
