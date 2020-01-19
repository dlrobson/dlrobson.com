/*eslint-disable*/
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { CloudDownload } from "@material-ui/icons";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Button from "components/CustomButtons/Button.js";
import React from "react";

const useStyles = makeStyles(styles);

export default function HeaderRightLinksDrawer(props) {
  const classes = useStyles();
  return (
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
  );
}
