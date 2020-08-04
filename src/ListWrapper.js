import React from 'react';
import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import ListFilters from './ListFilters';

class ListWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            fetching: false
        }
    }
    componentDidMount() {
        this.setState({fetching: true})
    }
    componentDidUpdate() {
        if(this.state.fetching) {
            this.fetchApi()
        }
    }
    async fetchApi() {
        const res = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
        const list = res.data.data
        this.setState({list})
    }
    render() {
        const {list} = this.state
        if(list.length) {
            return (
                <ListFilters list={list} />
            )
        } else {
            return (
                <CircularProgress />
            )
        }
    }
}
export default ListWrapper
