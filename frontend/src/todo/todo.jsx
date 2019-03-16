import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageheader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh = this.refresh.bind(this)       
    }

    componentWillMount() {
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
            .catch(error => console.log(error))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        // this.setState({ description: '' })
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm                    
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList/>
            </div>
        )
    }
}