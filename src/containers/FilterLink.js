// @flow
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import type {
  Dispatch,
  State,
  Filter
} from '../types'

type OwnProps = {
  filter: Filter
};

type StateProps = {
  active: boolean
};

type DispatchProps = {
  onClick: () => void
};

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const ConnectedLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default ConnectedLink
