import React, { useState } from "react";
import withRoot from '../modules/withRoot';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import NavBar from '../modules/views/NavBar';
import Card from "../modules/components/newsCard/Card.js";
import CardHeader from "../modules/components/newsCard/CardHeader.js";
import CardBody from "../modules/components/newsCard/Cardbody.js";

const styles = {
    typo: {
      paddingLeft: "25%",
      marginBottom: "40px",
      position: "relative"
    },
    note: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      bottom: "10px",
      color: "#c0c1c2",
      display: "block",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "13px",
      left: "0",
      marginLeft: "20px",
      position: "absolute",
      width: "260px"
    },
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
  };
  
  const useStyles = makeStyles(styles);

  const NewsArticle = () =>{
      const [pos, ] = useState('dashboard'); 
      const classes = useStyles();
      return(
        <React.Fragment>
          {/* <NavBar Pos = {pos}/> */}
          <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Material Dashboard Heading</h4>
                <p className={classes.cardCategoryWhite}>
                    Created using Roboto Font Family
                </p>
            </CardHeader>
            <CardBody>
            
            </CardBody>
          </Card>
        </React.Fragment>
      );
  }

  export default withRoot(NewsArticle);