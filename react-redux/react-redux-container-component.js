import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ${FileName} extends React.Component{
	constructor(props, context){
		super(props,context);
	}
	
	render() {
		return (
			
		);
	}
}

${FileName}.PropTypes = {
	//myProp: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
	return {
		state: state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions : bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(${FileName});