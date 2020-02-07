import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        }
        //reach into props which is updated by state using mapStateToProps and grab the name of each user
        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);