import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';

import HomePage from '../pages/Home';

import Uploader from '../components/Tools/Uploader'
import * as ROUTES from '../constants/routes';

import toolInfo from "../JsonData/tool_info.json";

// console.log(toolInfo.competitiveKeyword[0]["urlPath"])

const App = () => (

  <Router>
    <div>
      <div className="d-flex">
        <div className="content-container">
          <div className="col">
            <Switch>
              <Route exact path={ROUTES.HOME} element={<HomePage/>} />
              <Route 
                path={toolInfo.competitiveKeyword[0]["urlPath"]} 
                component={() => <Uploader toolInfo={toolInfo.competitiveKeyword[0]}/>} 
              />            
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
