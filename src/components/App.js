import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from "../assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({
      displayBio: !this.state.displayBio,
    });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is De Gitgit Agitya</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Bandung, and code every day.</p>
            <p>
              My favorite language is JavaScript, and i think React.js is
              awesome.
            </p>
            <p>Besides coding, I also love gaming!</p>
            <button className="btn btn-info" onClick={this.toggleDisplayBio}>
              Show Less
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-info" onClick={this.toggleDisplayBio}>
              Read More
            </button>
          </div>
        )}
        <hr></hr>
        <SocialProfiles />
        <hr />
        <Projects />
      </div>
    );
  }
}

export default App;
