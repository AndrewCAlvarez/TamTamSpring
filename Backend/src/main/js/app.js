const { response } = require('express');
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class User extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.email}</td>
            </tr>
        )
    }
}

class UserList extends React.Component {
    render() {
        const users = this.props.users.map(user => {
            <User key={user._links.self.href} user={user} />
        })
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                    <tr>
                        {users}
                    </tr>
                </tbody>
            </table>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/users'}).done(response => 
            {
                this.setState({users: response.entity._embedded.users});
        });
    }

    render() {
        return (
            <UserList users={this.state.users} />
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)