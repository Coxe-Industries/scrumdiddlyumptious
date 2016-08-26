'use strict';

import React from 'react';

import Panel from '../components/Panel.jsx';


class Index extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const title = this.props.title || "Title"

    return (
      <div>
        <Panel title={title}/>
      </div>
    );
  }
}

export default Index;
