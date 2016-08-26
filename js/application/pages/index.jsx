'use strict';

import React from 'react';
import { CardTitle, CardText } from 'material-ui/Card';

import {Grid, Row, Col} from 'react-flexbox-grid';
import myFlexStyle from '../styles/myFlexStyle.scss';

import Panel from '../components/Panel.jsx';


class Index extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const title = this.props.title || "Title"

    return (
      <Grid>
        <Row>

          <Col md={12}>
            <Panel>
              <CardTitle
                title={title}
                subtitle="Make it agile"
              />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Panel>
          </Col>

        </Row>
      </Grid>
    );
  }
}

export default Index;
