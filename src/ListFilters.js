import React from 'react';
import { TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class ListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    render() {
        const {list} = this.props
        return (
            <div>
                <div>
                    <TextField value={this.state.value} variant="outlined" size="small" />
                </div>
                <List>
                    {list.map((item) => <ListItem key={item.id}><p>{item.employee_name}</p></ListItem>)}
                </List>
            </div>
        )
    }
}

export default ListFilters
