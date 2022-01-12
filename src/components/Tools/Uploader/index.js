import React, { Component } from 'react';
import { withFirebase } from '../../Firebase';

// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/

class Uploader extends Component {
    constructor(props) {
    super(props);
      this.state = {
        tool_info: []
      }
    }
    
    componentDidMount() {
      const tool = this.props.firebase.getTools({collectionId: 'tools', docId: 'uKeDEanD2Az49TsaVTpr'})
      this.setState({tool_info: tool })
      }

    render() {
        // const toolInf = this.state.tool_info[0]["pageName"] // prompts an error
        console.log(this.state.tool_info)
        console.log(this.props.toolInfo["pageName"])
        console.log(this.props.toolInfo["titleTag"])
        console.log(this.props.toolInfo["shortDescription"])
        return(
        'hi'
    )
  }
}
export default withFirebase(Uploader);
