import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { GuitarTable } from '../components/table'
import ImageLoad from '../components/image_load'
import guitarPlaceholder from '../../../assets/images/guitar-placeholder.jpg'
import backgroundImage from '../../../assets/images/Gibson-Les-Paul-1950s-Template.jpg'


class GuitarShow extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      hidden: true,
      selectedPic: null,
      mainPicSelected: false
    }
    this.displayPic = this.displayPic.bind(this)
    this.selectPic = this.selectPic.bind(this)
    this.mainPicSelected = this.mainPicSelected.bind(this)
    this.secondaryPicSelected = this.secondaryPicSelected.bind(this)
  }

  displayPic(e) {
    const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (e.target.id == 'placeholder-photo' || deviceWidth < 750 && e.target.id == 'main-photo') {
      return
    }
    this.setState({
      hidden: !this.state.hidden
    })
  }

  selectPic(e) {
    this.setState({
      selectedPic: e.target.src
    })
  }

  mainPicSelected() {
    this.setState({
      mainPicSelected: true
    })
  }

  secondaryPicSelected() {
    this.setState({
      mainPicSelected: false
    })
  }

  render () {
    if (this.props.selectedGuitar) {
      const guitar = this.props.selectedGuitar
      const src = `http://res.cloudinary.com/drzsrupmq/image/upload/v1/development/${guitar.photo_id}`
      const photo = guitar.photo_id ? <img src={src} id='main-photo' onClick={(e) => {this.displayPic(e); this.selectPic(e); this.mainPicSelected();}}/>
                                    : <img src={guitarPlaceholder} id={'placeholder-photo'}/>
      const mainPicClass = this.state.mainPicSelected ? 'image__container main__pic' : 'image__container secondary__pic'
      const picClass = this.state.hidden ? `guitar__image__zoom__container hidden` : `guitar__image__zoom__container`
      const closeClass = this.state.hidden ? 'close__button' : 'close__button show__close__button'
      return <div className='guitar__show'>
          <h3>{guitar.brand} {guitar.name}</h3>
          <div className="guitar__show__container">
            <div className="guitar__show__infos">
              <GuitarTable guitar={guitar} neckPickup={this.props.neckPickup} centerPickup={this.props.centerPickup} bridgePickup={this.props.bridgePickup}/>
            </div>
            <div className="guitar__image__container">
              <div className="guitar__image">
                {photo}
              </div>
              <div className="guitar__images">
                { guitar.photos_ids.length > 0 ?
                guitar.photos_ids.map(photo =>
                <div className="guitar__images__item" key={photo} onClick={(e) => {this.displayPic(e); this.selectPic(e); this.secondaryPicSelected();}}>
                  <ImageLoad image={photo}/>
                </div>) : ''
                }
              </div>
            </div>
          </div>
        <div className={picClass}  onClick={this.displayPic}>
          <div className={mainPicClass}>
            <div className={closeClass} onClick={this.displayPic}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
              <img src={this.state.selectedPic}/>
          </div>
        </div>
      </div>
    } else {
    return <div className='guitar__show guitar__show__empty'>
        <h3>Welcome in GuitarList</h3>
        <div className="guitar__show__empty__image">
          <img src={backgroundImage} alt="background" id="background-image" />
        </div>
      </div>
    }
  }
}

GuitarShow.propTypes = {
  selectedGuitar: PropTypes.object
}

function mapStateToProps(state) {
  return {
    selectedGuitar: state.selectedGuitar,
    neckPickup: state.neckPickup,
    centerPickup: state.centerPickup,
    bridgePickup: state.bridgePickup
  };
}

export default connect(mapStateToProps)(GuitarShow);
