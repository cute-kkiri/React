import React from 'react';

class Snap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor: 'red'};
    }

    // 렌더링되기 직전에 실행.
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: 'yellow'});
        }, 1000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML = 'Before the update, the favorite was ' + prevState.favoriteColor;
    }
    
    componentDidUpdate() {
        document.getElementById('div2').innerHTML = 'the updated favorite is ' + this.state.favoriteColor;
    }

    render() {
        return(
            <>
            <h1>My Favorite Color is {this.state.favoriteColor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
            </>
        )
    }
}

export default Snap;