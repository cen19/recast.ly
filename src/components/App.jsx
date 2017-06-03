// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData}/>
//     </div>
//   </div>
// );



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
    // this.state = { exampleVideoData[0] };
    // this.handleClick = this.handleClick.bind(this);
    
  }
  
  handleClick(video) {
    this.setState({
      currentVideo: video,
      videos: this.state.videos
    });
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} videoClick={this.handleClick.bind(this)}/>
        </div>
      </div>
    
    );
  }
  
  // handleClick('click .video-list-entry-title') {
  //   this.setState( 
  //   //change Videoplayer video to example video data (clicked)
  //   this.state => (prop.clicked) {
  //     exampleVideoData[prop];
  //   }); //Automatically re-renders
  // }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//ReactDOM.render(<App />, document.getElementByID('sdf') );
