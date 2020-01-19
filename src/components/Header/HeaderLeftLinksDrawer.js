/*eslint-disable*/
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Button from "components/CustomButtons/Button.js";
import React from "react";

const useStyles = makeStyles(styles);

export default function HeaderLeftLinksDrawer(props) {
  const classes = useStyles();
  const styles = {
    navBarRightList: {
      display: 'inline-flex',
      flexDirection: 'row',
      padding: 0,
    },
  };
  return (
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
  );
}