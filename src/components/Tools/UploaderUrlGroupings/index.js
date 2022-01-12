import React, { Component } from 'react';
import { withFirebase } from '../../Firebase';

// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/

class UploaderUrlGroupings extends Component {
    constructor(props) {
    super(props);
      this.state = {
        tool_info: []
      }
    }
    
    componentDidMount() {
      // this isn't needed, all taken care of initially in the routes population, passing
      // info as a `toolInfo` property (this.toolInfo)
      const tool = this.props.firebase.getTools({collectionId: 'tools', docId: 'uKeDEanD2Az49TsaVTpr'})
      this.setState({tool_info: tool })
      }

    render() {
      const { toolInfo } = this.props

      // const toolInf = this.state.tool_info[0]["pageName"] // prompts an error
      // console.log(this.state.tool_info)
      // console.log(this.props.toolInfo["pageName"])
      // console.log(this.props.toolInfo["titleTag"])
      // console.log(this.props.toolInfo["shortDescription"])

      return(
        <pre>{ JSON.stringify(toolInfo, null, 2) }</pre>
      )
  }
}
export default withFirebase(UploaderUrlGroupings);
