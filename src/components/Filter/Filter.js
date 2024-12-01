import './filter.css';

const Filter = ({filter, setFilter}) => {
    const buttonsData = [
        {name: 'all', label: 'Все задачи'},
        {name: 'current', label: 'Текущее'},
        {name: 'done', label: 'Выполненые'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button type='button' 
                    className={`btn ${clazz}`} 
                    key={name} 
                    onClick={() => setFilter(name)}
                >{label}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    )
}

export default Filter;