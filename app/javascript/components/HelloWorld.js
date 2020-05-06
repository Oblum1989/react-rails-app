import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { List, Button } from 'semantic-ui-react';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

function getThings() {
  console.log('getThings() Action!!')
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch(`/api/v1/things`)
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error));
  }
}

export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json
  }
}

class HelloWorld extends React.Component {
  render () {
    const { things } = this.props;
    const thingsList = things.map((thing) => {
      return (
        <List.Item key={thing.name}>
          <List.Icon name='arrow circle right' size='large' verticalAlign='middle'></List.Icon>
          <List.Content>
            <List.Header as='a'>{thing.name}</List.Header>
            <List.Description as='a'>{thing.guid}</List.Description>
          </List.Content>
        </List.Item>
      )
    })

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className='getThingsBtn' onClick={() => this.props.getThings()}>getThings</button>
        <br />
        <Button>Click Here</Button>
        <List divided relaxed>{thingsList}</List>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
});

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
