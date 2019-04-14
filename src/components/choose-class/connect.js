import { connect } from 'react-redux'
import { selectAllClasses } from '@redux/data/selectors'

const mapStateToProps = state => ({
  classes: selectAllClasses(state)
})

export default connect(mapStateToProps)
