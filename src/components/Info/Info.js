import './info.css';

const Info = ({total, done}) => {
    return (
        <div className='app-info'>
            <h2>Количество задач: {total} </h2>
            <h2>Количество выполненых задач: {done} </h2>
        </div>
    )
}

export default Info;