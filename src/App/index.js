import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';

import HomePage from '../pages/Home';

import Uploader from '../components/Tools/Uploader'
import * as ROUTES from '../constants/routes';

import toolInfo from "../JsonData/tool_info.json";

import { withFirebase } from '../components/Firebase';

// console.log(toolInfo.competitiveKeyword[0]["urlPath"])

const App = (props) =>
{
  const [tools, setTools] = useState(undefined)

  useEffect(async () =>
  {
    setTools((await props.firebase.getCollectionDocs({collectionId: 'tools'})) || [])
  }, [])

  return (
    <Router>
      <div>
        <div className="d-flex">
          <div className="content-container">
            <div className="col">
              <Switch>
                <Route exact path={ROUTES.HOME} component={() => <HomePage tools={tools}/>} />

                { (tools||[]).map((tool, i) =>
                  <Route
                    key={i}
                    path={tool.urlPath}
                    component={() => <Uploader toolInfo={tool}/>}
                  /> ) }
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default withFirebase(App);
