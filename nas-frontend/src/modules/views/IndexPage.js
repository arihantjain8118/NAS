import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import IndexPageLayout from './IndexPageLayout.js';

const backgroundImage =
  'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/12394291892497.5e5695c0dd1eb.jpg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', 
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function IndexPage(props) {
  const { classes } = props;

  return (
    <IndexPageLayout backgroundClassName={classes.background}>
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your News Reading Habits
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/coverWorld/sign-up/"
      >
        Register
      </Button>
      <Typography variant="body1" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </IndexPageLayout>
  );
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);