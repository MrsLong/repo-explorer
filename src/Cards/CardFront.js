import './CardFront.css';

const CardFront = (props) => {
    return (
        <div onClick={props.onClick}>
            <h2>{props.repo.name}</h2>
            <ul>
                <li>Language: {props.repo.language}</li>
                <li>Description: {props.repo.description}</li>
                <li>Star Count: {props.repo.stargazers_count}</li>
                <li>Fork Count: {props.repo.forks_count}</li>
                <li>Created: {new Date(props.repo.created_at).toLocaleDateString()}</li>
            </ul>
        </div>
    )
}

export default CardFront