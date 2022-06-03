import React, { Component } from "react";
import {
  Card,
  CardTitle,
  Col,
  CardImg,
  Button,
  Row,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
// import "../../../../assets/stylesheets/App.css";

export default class LocationIndex extends Component {
  handleDelete = (id) => {
    this.props.deleteLocation(id);
  };

  render() {
    return (
      <>
        <CardTitle>
          <center>
            <h4 className="page-title">Your Path Listings</h4>
          </center>
        </CardTitle>
        <Container>
          <center>
            <Row>
              {this.props.userLocations &&
                this.props.userLocations.map((location) => {
                  return (
                    <Col sm="4" xs="6" key={location.id}>
                      <div className="cardWrapper">
                      <CardTitle className="grow">
                        <NavLink to={`/locationshow/${location.id}`}>
                          <h4>{location.city}</h4>
                          <h4>{location.state}</h4>
                          <img src={location.image} width="300px" />
                        </NavLink>
                      </CardTitle>
                      <div className="buttonUpdDel">
                        <Button className="navBtn">
                          <NavLink
                            to={`/locationedit/${location.id}`}
                            className="navBtn"
                          >
                            UPDATE
                          </NavLink>
                        </Button>
 
                        <Button
                          onClick={() => this.handleDelete(location.id)}
                          className="navBtn"
                        >
                          <NavLink to={"/userlocation"} className="navBtn">
                            DELETE
                          </NavLink>
                        </Button>
                      
                      </div>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </center>
        </Container>
      </>
    );
  }
}

// import React, { Component } from "react";
// import { Card, CardTitle, Col, CardImg, Button, Row, Container } from 'reactstrap'
// import { NavLink } from "react-router-dom";
// import "./../AboutUs.css"

// export default class LocationIndex extends Component {
//   render() {
//     return (
//       <>
//         <CardTitle><h3><center>My Locations</center></h3></CardTitle>
//           <Container>
//             <center>
//               <Container>
//                 <a href='/users/sign_up' className="navBtn">Create</a>
//               </Container>
//             </center>
//             <br></br><br></br>
//             <Row> {this.props.userLocations &&
//               this.props.userLocations.map((location) => {
//                 return (
//                   <Col sm="4" xs="6">
//                     <NavLink to={`/locationshow/${location.id}`} key={location.id}>
//                       <CardTitle className="grow">
//                         <h4>{location.city}</h4>
//                         <h4>{location.state}</h4>
//                         <center><img src={location.image} width="300px" /></center>
//                         <br></br>
//                       </CardTitle>
//                      </NavLink>

//                     <Row className="rows">

//                       <Container className="center">
//                         <a href='/users/sign_up' className='navBtn'>Edit</a> </Container>

//                         <Container className="center"><a href='/users/sign_up' className='navBtn'>Delete</a>
//                       </Container>

//                     </Row>
//                     <br></br>
//                   </Col>
//                 );
//               })}
//             </Row>
//         </Container>
//       </>
//     );
//   }
// }
