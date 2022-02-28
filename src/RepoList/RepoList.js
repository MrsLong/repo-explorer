import React, { PureComponent } from 'react';
import './RepoList.css';
import RepoCard from '../RepoCard/RepoCard';

class RepoList extends PureComponent {
    constructor() {
        super();
        this.state = {
            repoData: []
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/orgs/Netflix/repos')
            .then(response => response.json())
            .then(json => {
                this.setState({ repoData: json });
            })
    }

    render() {
        return (this.state.repoData ?
            this.state.repoData.sort((a, b) => a.stargazers_count - b.stargazers_count).map(repo => (
                <RepoCard repo={repo} key={repo.id} />
            )) : ''
        )
    }
}

export default RepoList;