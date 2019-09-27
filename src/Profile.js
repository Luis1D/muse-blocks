import React, { Component } from 'react';
import { Person } from 'blockstack';
import MediaDials from './components/MediaDials';

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
  	};
  }
  

  render() {
  // console.log(this.props)
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    return (
      !userSession.isSignInPending() ?
      <div className="panel-welcome" id="section-2">
        <div className="user-info">
          <h1 className="user-name"><span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span></h1>
          <div className="avatar-section">
            <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } alt="Profile Picture" className="profile-picture"/>
          </div>
        </div>

        <MediaDials />
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
