import React, { PureComponent } from 'react';
import './CardBack.css'


class CardBack extends PureComponent {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
        };
    }

    render() {
        return (
            <div onClick={this.props.onClick}>
                <h2>{this.props.repo.name}</h2>
                <ul>
                    {this.props.commits.map(data => (
                        <li key={data.sha}>Commit Title: {data.commit.message}
                            <ul>
                                <li>Username: {data.author ? data.author.login : ''}</li>
                                <li>Hash: {data.sha}</li>
                                <li>Created: {new Date(data.commit.committer.date).toLocaleDateString()}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CardBack
