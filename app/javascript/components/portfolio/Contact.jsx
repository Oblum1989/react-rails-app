import React from 'react';
import { Divider, Segment, Container } from 'semantic-ui-react'

const Contact = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Container text>
      <Divider
        as="h3"
        className="header"
        horizontal
        style={{ margin: "3em 0em", textTransform: "uppercase" }}
      >
        <p>My Latest Works</p>
      </Divider>
    
      <div id="tf-contact">
        <div className="container">
          <div className="section-title">
            <h3>Contact Me</h3>
          </div>

          <div className="space"></div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              {/* <form id="contact">
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Name">
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Email">
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Website">
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-btn dark">Submit</button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Segment>
);

export default Contact;