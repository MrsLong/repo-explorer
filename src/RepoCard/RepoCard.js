import React, { PureComponent } from 'react';
import ReactCardFlip from 'react-card-flip';
import CardFront from '../Cards/CardFront';
import CardBack from '../Cards/CardBack';

class RepoCard extends PureComponent {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            commitData: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        if (this.state.isFlipped === false) {
            fetch(`https://api.github.com/repos/Netflix/${this.props.repo.name}/commits`)
                .then(response => response.json())
                .then(json => {
                    this.setState({ commitData: json });
                })
        }
        e.currentTarget.parentElement.parentElement.parentElement.scrollTop = 0
    }

    render() {
        return (this.state.commitData ?
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" key={this.props.repo.id}>
                <CardFront key='front' onClick={this.handleClick} repo={this.props.repo} commits={this.state.commitData}>
                </CardFront>
                <CardBack key='back' onClick={this.handleClick} repo={this.props.repo} commits={this.state.commitData}>
                </CardBack>
            </ReactCardFlip> : ''
        )
    }
}

export default RepoCard