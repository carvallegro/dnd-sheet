import { connect } from 'react-redux'
import { setProficiency } from '@redux/skills/actions'

const mapStateToProps = state => ({
  skills: state.skills,
  attributes: state.attributes,
  proficiencyBonus: state.general.proficiencyBonus
})

export const mapDispatchToProps = dispatch => ({
  setProficiency: (skill, isProficient) =>
    dispatch(setProficiency(skill, isProficient))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
