import { Component } from 'react';
import './addform.css';

export default class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.task);
        this.setState({task: ''})
    }

    render() {
        const {task} = this.state;
        return (
            <div className='app-add-form'>
                <h3>Добавьте новую задачу</h3>
                <form onSubmit={this.onSubmit} className='add-form d-flex'>
                    <input type='text' value={task} className='form-control new-post-label' placeholder='Что необходимо сделать ?' name='task' onChange={this.onValueChange}/>
                <button type='submit' className='btn-add btn-outline-light'>Добавить</button>
                </form>
            </div>
        )
    }
}