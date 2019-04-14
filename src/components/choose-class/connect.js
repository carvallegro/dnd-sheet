import { connect } from 'react-redux'
import { selectClass } from '@redux/classes/actions'
import { selectAllClasses, selectSelectedClassLevels, selectSelectedClassSpellcasting } from '@redux/data/selectors'
import { selectSelectedClass } from '@redux/classes/selectors'

const mapStateToProps = state => ({
  classes: selectAllClasses(state),
  selectedClass: selectSelectedClass(state),
  classLevels: selectSelectedClassLevels(state),
  spellcasting: selectSelectedClassSpellcasting(state)
})

const actionCreators = dispatch => ({
  selectClass: index => dispatch(selectClass(index))
})
export default connect(mapStateToProps, actionCreators)
