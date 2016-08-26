'use strict';

import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';

import {Grid, Row, Col} from 'react-flexbox-grid';
import myFlexStyle from '../styles/myFlexStyle.scss';

import Tabed from '../components/Tabed.jsx';
import Panel from '../components/Panel.jsx';


class Test extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const cardList = [
      {
        title: "First Tab",
        content: <div>
            <CardHeader
              title="header"
              subtitle="card header"
            />
            <CardTitle title="Welcome!" subtitle="card title" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </div>,
      },
      {
        title: "Second Tab",
        content: <div>
            <CardHeader
              title="Another header"
              subtitle="card header"
            />
            <CardTitle title="Welcome Again!" subtitle="card title" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </div>,
      },
    ];

    const content = (
      <Tabed content={cardList}/>
    );



    return (
      <Grid>
        <Row>
          <Col md={6}>
            <Panel content={content} />
          </Col>
          <Col md={6}>
            <Panel>
              <AppBar
                title="test"
              />
              <h1>This is a test</h1>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Test;
