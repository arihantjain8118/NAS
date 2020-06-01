const blackColor = "#000";
const whiteColor = "#FFF";

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

const cardStyle = {
    card: {
      border: "0",
      marginBottom: "30px",
      marginTop: "30px",
      borderRadius: "6px",
      color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
      background: whiteColor,
      width: "100%",
      boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minWidth: "0",
      wordWrap: "break-word",
      fontSize: ".875rem"
    },
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardProfile: {
      marginTop: "30px",
      textAlign: "center"
    },
    cardChart: {
      "& p": {
        marginTop: "0px",
        paddingTop: "0px"
      }
    }
  };
  
  export default cardStyle;