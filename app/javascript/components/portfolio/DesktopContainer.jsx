import React from "react";
import HomepageHeading from './HomepageHeading'

import {
  Responsive,
  Visibility,
  Segment,
  Menu,
  Container,
  Button
} from "semantic-ui-react";

class DesktopContainer extends React.Component {
  state = { activeItem: 'Home' }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { activeItem } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item
                  name='Home'
                  active={activeItem === 'Home'}
                  onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item
                  name='Profile'
                  active={activeItem === 'Profile'}
                  onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item
                  name='Skills'
                  active={activeItem === 'Skills'}
                  onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item
                  name='Education'
                  active={activeItem === 'Education'}
                  onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item
                  name='Portfolio'
                  active={activeItem === 'Portfolio'}
                  onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item
                  name='Contact'
                  active={activeItem === 'Contact'}
                  onClick={this.handleItemClick}
                ></Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    OBlum
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;