const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
const whiteColor = "#FFF";
const blackColor = "#000"
const hexToRgb = input => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
        throw new Error("input is not a valid hex color.");
    }
    if (input.length === 3) {
        let first = input[0];
        let second = input[1];
        let last = input[2];
        input = first + first + second + second + last + last;
    }
    input = input.toUpperCase();
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return (
        parseInt(first, 16) +
        ", " +
        parseInt(second, 16) +
        ", " +
        parseInt(last, 16)
    );
};
const primaryBoxShadow = {
    boxShadow:
      "0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.14), 0 7px 10px -5px rgba(" +
      hexToRgb(primaryColor[0]) +
      ",.4)"
  };
const primaryCardHeader = {
    background:
      "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")",
    ...primaryBoxShadow
  };
  
  const cardHeaderStyle = {
    cardHeader: {
      padding: "0.75rem 1.25rem",
      marginBottom: "0",
      borderBottom: "none",
      background: "transparent",
      zIndex: "3 !important",
      "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
        margin: "0 15px",
        padding: "0",
        position: "relative",
        color: whiteColor
      },
      "&:first-child": {
        borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
      },
      "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
        "&:not($cardHeaderIcon)": {
          borderRadius: "3px",
          marginTop: "-20px",
          padding: "15px"
        }
      },
      "&$cardHeaderStats svg": {
        fontSize: "36px",
        lineHeight: "56px",
        textAlign: "center",
        width: "36px",
        height: "36px",
        margin: "10px 10px 4px"
      },
      "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
        fontSize: "36px",
        lineHeight: "56px",
        width: "56px",
        height: "56px",
        textAlign: "center",
        overflow: "unset",
        marginBottom: "1px"
      },
      "&$cardHeaderStats$cardHeaderIcon": {
        textAlign: "right"
      }
    },
    cardHeaderPlain: {
      marginLeft: "0px !important",
      marginRight: "0px !important"
    },
    cardHeaderStats: {
      "& $cardHeaderIcon": {
        textAlign: "right"
      },
      "& h1,& h2,& h3,& h4,& h5,& h6": {
        margin: "0 !important"
      }
    },
    cardHeaderIcon: {
      "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
        background: "transparent",
        boxShadow: "none"
      },
      "& i,& .material-icons": {
        width: "33px",
        height: "33px",
        textAlign: "center",
        lineHeight: "33px"
      },
      "& svg": {
        width: "24px",
        height: "24px",
        textAlign: "center",
        lineHeight: "33px",
        margin: "5px 4px 0px"
      }
    },
    // warningCardHeader: {
    //   color: whiteColor,
    //   "&:not($cardHeaderIcon)": {
    //     ...warningCardHeader
    //   }
    // },
    // successCardHeader: {
    //   color: whiteColor,
    //   "&:not($cardHeaderIcon)": {
    //     ...successCardHeader
    //   }
    // },
    // dangerCardHeader: {
    //   color: whiteColor,
    //   "&:not($cardHeaderIcon)": {
    //     ...dangerCardHeader
    //   }
    // },
    // infoCardHeader: {
    //   color: whiteColor,
    //   "&:not($cardHeaderIcon)": {
    //     ...infoCardHeader
    //   }
    // },
    primaryCardHeader: {
      color: whiteColor,
      "&:not($cardHeaderIcon)": {
        ...primaryCardHeader
      }
    },
    // roseCardHeader: {
    //   color: whiteColor,
    //   "&:not($cardHeaderIcon)": {
    //     ...roseCardHeader
    //   }
    // }
  };
  
  export default cardHeaderStyle;