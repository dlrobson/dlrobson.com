import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Particles from "react-particles-js"
import particleData from "assets/json/particles.json"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const styles = {
    navBarRightList: {
      display: 'inline-flex',
      flexDirection: 'row',
      padding: 0,
    },
  };

  return (
    <div>
      <Header
        brand="DR"
        leftLinks={
          <List className={classes.list} style={styles.navBarRightList}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                color="transparent"
                target="_blank"
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
              >
                About me
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Projects
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Experience
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Contact
              </Button>
            </ListItem>
          </List>
        }
        leftLinksDrawer={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                About me
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Projects
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Experience
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Contact
              </Button>
            </ListItem>
          </List>
        }
        rightLinks={ <HeaderLinks /> }
        rightLinksDrawer={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="Daniel_Robson_resume.pdf"
                color="transparent"
                target="_blank"
                className={classes.navLink}
              >
                <CloudDownload className={classes.icons} /> Resume
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="linkedin"
                title="Linkedin"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  href="https://www.linkedin.com/in/dlrobson"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fab fa-linkedin"} />
                  linkedin.com/in/dlrobson
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="github"
                title="Github"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="https://github.com/dlrobson/"
                  target="_blank"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fab fa-github"} />
                  github.com/dlrobson
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="email"
                title="Email"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  href="mailto:dlrobson@uwaterloo.ca"
                  target="_blank"
                  className={classes.navLink}
                >
                  <i className={classes.socialIcons + " fas fa-envelope"} />
                  dlrobson@uwaterloo.ca
                </Button>
              </Tooltip>
            </ListItem>
            </List>
        }
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      {/* <Particles
          params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#d7d7d7"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 220,
                  "color": "#d7d7d7",
                  "opacity": 0.45,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "window",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": false
          }}
          style={{
            width: '100%',
            // color: '#000000'
            // backgroundImage: 'assets/img/black.jpg'
            color: "#000000"
          }}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Daniel Robson</h1>
                  <h3 className={classes.subtitle}>
                    3A 2022 Mechatronics Engineer
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
        </Particles> */}
      <Parallax image={require("assets/img/bg4.jpg")}>
      {/* <Parallax> */}
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Daniel Robson</h1>
                <h3 className={classes.subtitle}>
                  3A 2022 Mechatronics Engineer
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        {/* <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications /> */}
        <SectionTypography />
        {/* <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
