import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import image from "../../res/img/ERP.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Entreprise Ressource Planning"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="Manage your entreprise"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button primary size="huge">
      {" "}
      <Link to="/login" style={{ color: "white" }}>
        Login
      </Link>
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
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
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>

                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    <Link to="/login" style={{ color: "white" }}>
                      {" "}
                      Log in
                    </Link>
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    <Link to="/register" style={{ color: "white" }}>
                      Sign Up
                    </Link>
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      {" "}
                      <Link to="/login" style={{ color: "white" }}>
                        Log in
                      </Link>
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      <Link to="/register" style={{ color: "white" }}></Link>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Definition of Enterprise Resource Planning (ERP)
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Enterprise resource planning (ERP) refers to a type of software
              that organizations use to manage day-to-day business activities
              such as accounting, procurement, project management, risk
              management and compliance, and supply chain operations. A complete
              ERP suite also includes enterprise performance management,
              software that helps plan, budget, predict, and report on an
              organization’s financial results. ERP systems tie together a
              multitude of business processes and enable the flow of data
              between them. By collecting an organization’s shared transactional
              data from multiple sources, ERP systems eliminate data duplication
              and provide data integrity with a single source of truth. Today,
              ERP systems are critical for managing thousands of businesses of
              all sizes and in all industries. To these companies, ERP is as
              indispensable as the electricity that keeps the lights on
            </p>
          </Grid.Column>
          <Grid.Column /* floated="right" */ width={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c9HfNg4a_Og"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src={image} />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Why Use ERP?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Enterprise resource planning software is used to manage a number of
          business functions, but how is it any better than other solutions?
          Even though ERP may have similar goals to other solutions, its unique
          features make it a distinctive competitor in the software market. Here
          are the eight reasons why the importance of enterprise resource
          planning (ERP) systems should be considered by any organization:
        </p>
        <Button as="a" size="large">
          <a href="https://www.selecthub.com/enterprise-resource-planning/why-erp-systems-are-important/">
            Read More
          </a>
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          {" "}
          ERP CASES
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Let’s look at three companies that found success with their ERP
          implementation projects, and their key lessons learned.
        </p>
        <Button as="a" size="large">
          <a href="https://www.netsuite.com/portal/resource/articles/erp/erp-implementation-case-study.shtml">
            I'm Still Quite Interested
          </a>
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">
                  <Link to="/login" style={{ color: "white" }}>
                    Log in
                  </Link>
                </List.Item>
                <List.Item as="a">
                  <Link to="/register " style={{ color: "white" }}>
                    Sign Up
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Vente</List.Item>
                <List.Item as="a">Achat</List.Item>
                <List.Item as="a">Humain Ressource</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Please contact us
              </Header>
              <p>Erpcompany@gmail.com</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
