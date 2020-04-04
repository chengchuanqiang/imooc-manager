import React from 'react';

class Info extends React.Component {


    render() {
        return (
            <div>
                Info---
                {this.props.match.params.value}
            </div>
        )
    }
}

export default Info;