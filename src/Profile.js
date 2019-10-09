import React, { Component } from 'react';
import { Person } from 'blockstack';
import MediaDials from './components/MediaDials';
import MediaList from './components/MediaList';
import Header from './components/Header';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  person: {
  	  	name() {
          return 'Anonymous';
        },
  	  	avatarUrl() {
  	  	  return avatarFallbackImage;
  	  	},
  	  },
      username: "",
      newStatus: "",
      statuses: [],
      statusIndex: 0,
      isLoading: false,
      allTracks: [],
  	};
  }

  render() {
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    
    return (
      !userSession.isSignInPending() ?
      <div>
        <Header person={person} userSession={userSession} handleSignOut={ handleSignOut } />
        <div className={ !this.props.dayMode ? "night-mode-s2" : "day-mode" } id="section-2">
          {/* USER INFO */}
          <div className={ !this.props.dayMode ? "night-mode" : "user-info-day" } id="user-info">
            <div className="avatar-section">
              <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } alt="Profile" className="profile-picture"/>
            </div>

            {/* FILE UPLOADER */}
            <label htmlFor="file-uploader" className={ !this.props.dayMode ? "button-night" : "button-day" } id="browse-btn">Upload</label>
              <input 
                type="file" 
                id="file-uploader"
              />
          </div>
          <div className="body-two">
            <MediaDials />
            <MediaList />
          </div>
        </div>
      </div> : null
    );
  }

  componentWillMount() {
    const { userSession } = this.props;
    this.setState({
      person: new Person(userSession.loadUserData().profile),
    });
  }
}
