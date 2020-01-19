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

export default function HeaderRightLinks(props) {
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
                title="linkedin.com/in/dlrobson"
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
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="github"
                title="github.com/dlrobson/"
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
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="email"
                title="dlrobson@uwaterloo.ca"
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
                </Button>
              </Tooltip>
            </ListItem>
            </List>
  );
}
