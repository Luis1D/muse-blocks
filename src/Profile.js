import React, { Component } from 'react';
import { Person } from 'blockstack';
import MediaDials from './components/MediaDials';
import MediaList from './components/MediaList';

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
  
  uploadFile(e) {
   console.log(e.target.value)
  }

  render() {
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    console.log(this.state.allTracks);
    console.log(this.setState)
    return (
      !userSession.isSignInPending() ?
      <div className="panel-welcome" id="section-2">

        {/* USER INFO */}
        <div className="user-info">
          <h1 className="user-name"><span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span></h1>
          <div className="avatar-section">
            <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } alt="Profile Picture" className="profile-picture"/>
          </div>

          {/* FILE UPLOADER */}
          <label htmlFor="file-uploader" className="browse-btn">Browse..</label>
            <input 
              type="file" 
              id="file-uploader"
              onChange={this.uploadFile}
            />
        </div>
        <div className="body-two">
          <MediaDials />
          <MediaList />
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
