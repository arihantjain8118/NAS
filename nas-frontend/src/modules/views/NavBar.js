import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/ToolBar';
import HomeNavbar from '../components/HomeNavbar';
import UserNavbar from '../components/UserNavbar';

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function NavBar(props) {
  const { classes, Pos } = props;
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/coverWorld/"
          >
            {'Cover World'}
          </Link>
          <div className={classes.right}>
            {
              Pos == 'home'?(
                <HomeNavbar RightLink = {classes.rightLink} LinkSecondary = {classes.linkSecondary} />
              ) : (
                <UserNavbar RightLink = {classes.rightLink} LinkSecondary = {classes.linkSecondary} />
              )
            }
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);