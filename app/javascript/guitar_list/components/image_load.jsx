import React from 'react'
import { connect } from 'react-redux';

export default class ImageLoad extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      loaded: false
    }
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleLoad() {
    this.setState({
      loaded: true
    })
  }

  render () {
    const hidden = this.state.loaded ? '' : 'hidden-photo'
    return <React.Fragment>
             <img className={hidden} src={`https://res.cloudinary.com/drzsrupmq/image/upload/v1661442456/GuitarList/${this.props.image}`} onLoad={this.handleLoad}/>
             {!this.state.loaded ? <div className="spinner-border text-secondary" role="status">
               <span className="visually-hidden">Loading...</span>
             </div> : ''}
           </React.Fragment>
  }
}
