'use strict';

import React from 'react';
import { CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import {Grid, Row, Col} from 'react-flexbox-grid';
import myFlexStyle from '../styles/myFlexStyle.scss';

import Panel from '../components/Panel.jsx';

import { contributors } from '../config/contributors.json';


class Test extends React.Component {

  constructor(props) {
    super(props);
  }


  _openLink(dest) {
    let win = window.open(dest, "_blank");
    win.focus();
  }


  render() {

    const contributorList = contributors.map((contributor, i) => {

      let iconButtonElement = (
        <IconButton
          touch={true}
        >
          <MoreVertIcon />
        </IconButton>
      );

      let rightIconMenu = (
        <IconMenu iconButtonElement={iconButtonElement}>
          <MenuItem
            primaryText="Github"
            onTouchTap={this._openLink.bind(this, contributor.github)}
          />
          <MenuItem
            primaryText="Website"
            onTouchTap={this._openLink.bind(this, contributor.url)}
          />
        </IconMenu>
      );

      return (
        <ListItem
          leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/6655527?v=3" />}
          primaryText={contributor.name}
          secondaryText={
            <IconButton iconClassName="muidocs-icon-custom-github" />
          }
          secondaryTextLines={2}
          rightIconButton={rightIconMenu}
          key={i}
        />
      )
    });

    return (
      <Grid>
        <Row>

          <Col md={12}>
            <Panel>
              <Row>
                <Col md={6}>
                  <CardTitle
                    title="About"
                    subtitle="What is Scrumdiddlyumptious?"
                  />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                </Col>

                <Col md={6}>
                  <List>
                    <Subheader>Contributors</Subheader>
                    { contributorList }
                    <ListItem
                      leftAvatar={<ContentAdd />}
                      primaryText="You"
                      secondaryText={
                        <p>You can join</p>
                      }
                    />
                  </List>
                </Col>
              </Row>
            </Panel>
          </Col>

        </Row>
      </Grid>
    );
  }
}

export default Test;
