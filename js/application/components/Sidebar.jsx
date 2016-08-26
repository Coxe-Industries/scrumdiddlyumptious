'use strict';

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router';

import _ from 'lodash';
import UI from 'UI';


class MyDrawer extends React.Component {

  constructor(props) {
    super(props);
  }


  _handleClose(showMessage) {
    this.props.handleClose();
  }


  render() {

    const drawerNavStyle = {
      backgroundColor: this.context.muiTheme.palette.primary1Color
    }

    const { routes } = this.props;
    const routeNames = Object.keys(routes) || [];

    const routeLinks = routeNames.map((routeName, i) => {
      let route = routes[routeName];
      return (
        <Link
          to={route.path}
          onClick={this._handleClose.bind(this, false)}
          style={{ textDecoration: "none" }}
          key={i}
        >
          <MenuItem>{ route.label }</MenuItem>
        </Link>
      )
    });

    return (
      <div>
        <Drawer
          docked={false}
          open={this.props.open}
          onRequestChange={(open) => this.props.handleDrawerEvent(open)}
        >
          <Toolbar style={drawerNavStyle}>
            <ToolbarGroup>
              <ToolbarTitle style={{color: this.context.muiTheme.palette.alternateTextColor}} text="Navigation" />
            </ToolbarGroup>
          </Toolbar>

          <Subheader>Routes</Subheader>

          { routeLinks }

        </Drawer>
      </div>
    );
  }
}

MyDrawer.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default MyDrawer;
