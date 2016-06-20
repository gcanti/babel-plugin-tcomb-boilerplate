// @flow
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import type {
  Dispatch,
  State,
  Filter,
  PureComponent
} from '../types'

type Props = {
  filter: Filter
};

const mapStateToProps = (state: State, ownProps: Props) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const ConnectedLink: PureComponent<Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default ConnectedLink
