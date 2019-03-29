import { connect } from 'react-redux'

export const mapStateToProps = state => ({
  attributes: state.attributes
})

export default connect(mapStateToProps)
