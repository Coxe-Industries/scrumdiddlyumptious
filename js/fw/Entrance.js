'use strict';
import {Splash} from 'splash-screen';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from "react-router";

import routes from '../application/routes/app-routes.jsx';

class Entrance {

    constructor() {}

    beforeStart() {
        let injectTapEventPlugin = require('react-tap-event-plugin');
        //Needed for onTouchTap
        //Can go away when react 1.0 release
        //Check this repo:
        //https://github.com/zilverline/react-tap-event-plugin
        injectTapEventPlugin();
    }

    _destroySplash() {
        let _this = this;
        Splash.destroy();
      //require('splash-screen/dist/splash.min.css').unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
      ReactDOM.render(
        <Router history={hashHistory}>
          { routes }
        </Router>,
      document.querySelector('#view'));
    }

    run() {
        this.beforeStart();
        this._destroySplash();
        this.launch();
    }

}

export default Entrance;
