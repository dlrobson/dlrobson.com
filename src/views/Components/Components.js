import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { CloudDownload } from "@material-ui/icons";
import styles from "assets/jss/material-kit-react/views/components.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Header from "components/Header/Header.js";
// sections for this page
import HeaderRightLinks from "components/Header/HeaderRightLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import HeaderLeftLinks from "components/Header/HeaderLeftLinks.js";
import HeaderLeftLinksDrawer from "components/Header/HeaderLeftLinksDrawer.js";
import HeaderRightLinksDrawer from "components/Header/HeaderRightLinksDrawer.js";
import SectionTypography from "./Sections/SectionTypography.js";


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="DR"
        leftLinks={ <HeaderLeftLinks /> }
        rightLinks={ <HeaderRightLinks /> }
        leftLinksDrawer={ <HeaderLeftLinksDrawer /> }
        rightLinksDrawer={ <HeaderRightLinksDrawer /> }
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
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
        <SectionTypography />
      </div>
      <Footer />
    </div>
  );
}
