import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import PhotoGallery from "../project/components/PhotoGallery";
import Video from "../components/Video";
import axios from 'axios';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyC41NHooeOCgkfQlI3MXIAHDVSy_q2nOrk";

class BlogDetailsLeftSidebar extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      videos: [],
      user:JSON.parse(localStorage.getItem('userid')),
      userRole:JSON.parse(localStorage.getItem('userRole')),
      selectedVideo: null,
      enrolled:"ADD TO COURSE LIST",
      buttonclass:"btn btn-success",
      addcourse: false
  };

  this.onClick=this.onClick.bind(this);

  }
 

onClick(e) {
    e.preventDefault(); //ensure that the default HTML form submit behaviour is prevented
    // this.setState({
    //     course: this.props.match.params.id,
    //     student: '5d3b601b4b04af228ab854a1',
    //     approved: true
    // });
    console.log(`Form submitted:`);
    
   
    console.log(`Todo studentid: `+this.state.user);
    console.log(`Todo courseid: `+this.props.match.params.id);
    //console.log(`Todo approved: `);

    const newTodo = {
        student: this.state.user,
        course: this.props.match.params.id,
        approved: true,
    };
    if(this.state.buttonclass == "btn btn-success")
    {
      axios.post('http://localhost:5000/enrollbystudent/add', newTodo)
      .then((result) => {
          //this.props.history.push("/addtoplaylist/"+this.props.match.params.id)
          toast.success('Added successfully')
        })
        .catch(err => { // then print response status
          toast.error('Course not added')
        });
    }
    else{
      console.log(this.state.buttonclass);
      toast.error('Course already added')
    }
}
  componentDidMount() {
    this.onTextSubmit("react tutorials");
  }

  onTextSubmit = async text => {
   
  if(this.state.userRole == "student")
  {
    this.setState({
     addcourse :true
    });
  }

  
  const response = await axios.get('http://localhost:5000/lectures?id='+ this.props.match.params.id)
    .then((result) => {
      console.log('http://localhost:5000/checkenrollment?id='+ this.state.user+'&&courseid='+this.props.match.params.id);
	  const responseEnrolled = axios.get('http://localhost:5000/checkenrollment?id='+ this.state.user+'&&courseid='+this.props.match.params.id)
    .then((result) => { 
      if(result.data != undefined)
      {
       
          this.setState({
            enrolled: "ALREADY ENROLLED",
            buttonclass: "btn btn-danger"
          });
      }
      else {    console.log(result.data);   }
      //return result;
    });
      console.log(result.data[0]);
      return result;
    });

    this.setState({
      videos: response.data,
      selectedVideo: response.data[0],
      status: "loading"
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Course Details</h1>
                  <ul className="page-breadcrumb">
                    {/* <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="projects">Courses</a>
                    </li>
                    <li>Course Details</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  project details page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Projects section start*/}
          <div className="project-section">
            <div className="container">
              {/* <SearchBar onFormSubmit={this.onTextSubmit} /> */}
              <div className="row">
                <div className="col-12 section-space--bottom--40">
                  <div className="ui container">
                    <div className="ui grid">
                      <div className="ui row">
                        <div className="eleven wide column">
                          <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        
                        <div className="five wide column">
                          <VideoList
                            onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-12 section-space--bottom--30">
                  <div className="project-information">
                    <h3>Course Information</h3>
                    <ul>
                      <li>
                        <strong>Instructor:</strong>{" "}
                        <a href="project-details">RRS Company</a>
                      </li>
                      <li>
                        <strong>Languages:</strong> San Francisco
                      </li>
                      <li>
                        <strong>Last Updated on:</strong> 550,000 sf
                      </li>
                      <li>
                        <strong>Released in:</strong> 2019
                      </li>
                      <li>
                        <strong>Total Students enrolled:</strong> $245000000
                      </li>
                      <li>
                        <strong>Architect:</strong> Scott &amp; Austin
                      </li>
                      <li>
                        <strong>Sector:</strong>{" "}
                        <a href="project-details">Tunnel</a>,{" "}
                        <a href="project-details">Transport</a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
                  <div className="project-details">
                    <h2>
                      {" "}
                      {this.state.selectedVideo
                        ? this.state.selectedVideo.title
                        : this.state.status}
                    </h2>
                    <p>
                      {this.state.selectedVideo
                        ? this.state.selectedVideo.course.courseDescription
                        : this.state.status}
                    </p>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi cum fugit officia dolores eligendi, rem. Quibusdam
                      quasi impedit perspiciatis iure maiores, eaque numquam
                      doloremque, quo nam soluta itaque obcaecati tempore!.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolore ex, nam adipisci dolores laborum earum. Unde cum,
                      ut nostrum nihil alias, laudantium molestiae, vitae quidem
                      dolorem officiis ipsum. Aliquid nemo consequuntur
                      cupiditate delectus sapiente doloribus dolorem, at
                      suscipit, non laudantium mollitia magnam repellat atque
                      quia! Aut, veniam, nam. Ex porro optio facilis nostrum,
                      qui ipsa?
                    </p> */}
                  </div>
                </div>
            
                <div className="col-lg-4"> 
                  <div>
                <ToastContainer/>
            <button type="button" style={this.state.addcourse ? {} : { display: 'none' }} className={this.state.buttonclass} onClick= {this.onClick} >{this.state.enrolled}</button>
            </div>
                </div>
               
                {/* <div className="col-12">
                  <PhotoGallery />
                </div> */}
              </div>
            </div>
          </div>
          {/*Projects section end*/}
        </div>

        {/*====================  End of project details page content  ====================*/}

        {/* Brand logo */}
        <BrandLogoSlider background="grey-bg" />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default BlogDetailsLeftSidebar;
