import ListItem from '../ListItem/ListItem';
import './list.css';

const List = ({data, onDelete, onToggleProps}) => {

    const elements = data.map((item) => {
        const {id, ...props} = item;
        return (
            <ListItem 
                onDelete={() => onDelete(id)}
                onToggleProps = {(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}
                key={id} {...props} 
            />
        )
    })

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default List