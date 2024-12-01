import './listitem.css';

const ListItem = ({task, done, onDelete, onToggleProps}) => {

    let classNames = 'list-group-item d-flex justify-content-between';

    if(done) {
        classNames += ' done';
    }

    return (
        <li className={classNames}>
            <span className='list-group-item-label' data-toggle='rise'>{task}</span>
            <div className='buttonsSubmit d-flex justify-content-center align-items-center'>
                <button type='button'
                        onClick={onToggleProps}
                        className='btn-cookie btn-sm'
                        data-toggle='done'>
                            <i className='fas fa-check'></i>
                </button>
                <button type='button'
                        onClick={onDelete}
                        className='btn-trash btn-sm'>
                            <i className='fas fa-trash'></i>
                </button>
            </div>
        </li>
    )
}

export default ListItem;