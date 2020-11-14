import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Menu>
                    <Menu.Menu>
                        <NavLink className="item teal" activeClassName="active" exact to='/'>Home</NavLink>
                        <NavLink className="item teal" activeClassName="active" to="/movies">Movies</NavLink>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default Header;