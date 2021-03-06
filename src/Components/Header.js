import {
  Grid,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const styles = (theme) => ({
  logo: {
    display: "flex",
    justifyContent: "flex-start",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
  menuIcon: {
    color: "white",
  },
  icon: {
    marginRight: "6px",
    color: "gray"
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
  },
});

const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
`;

const Navbar = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  z-index: 5;
`;

const Logo = styled(Link)`
  position: relative;
  margin: 0px 20px;
  font-family: "Amatic SC", cursive;
  color: white;
  font-size: 36px;
`;

const Version = styled.span`
  position: absolute;
  color: white;
  padding: 2px 5px;
  border-radius: 6px;
  top: 0px;
  right: -40px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 10px;
`;

const MenuLink = styled(Link)`
  color: white;
  display: flex;
  justify-content: center;
  margin: 0px 0px;
  padding: 19px 20px;
  border-bottom: 4px solid
    ${(props) => (props.current === "true" ? "white" : "transparent")};
  transition: border-bottom 0.5s linear;
`;

const Item = styled(Link)`
  font-size: 14px;
  color: white;
  margin: 0px 20px;
`;

const DarkMode = styled.div`
   cursor:pointer;
   font-size: 14px;
   color: white;
   margin: 0px 20px;
`;

const DarkMode2 =styled.span``

const Header = (props) => {
  const location = useLocation();
  const { classes } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderBlock>
      <Navbar className="header">
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4} md={4} className={classes.logo}>
            <Logo to="/">
              TranTranslate<Version className="version">Alpha</Version>
            </Logo>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={6} md={4} className={classes.menu}>
              <MenuLink
                to="/to-foreign"
                current={location.pathname === "/to-foreign" ? "true" : "false"}
              >
                한국어 - 외국어
              </MenuLink>
              <MenuLink
                to="/to-korean"
                current={location.pathname === "/to-korean" ? "true" : "false"}
              >
                외국어 - 한국어
              </MenuLink>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item xs={4} md={4} className={classes.link}>
              <Item to="/about">서비스 소개</Item>
              <Item to="/contact">문의 </Item>
              <DarkMode onClick={props.setDarkMode} >다크 모드</DarkMode>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={6} sm={2} md={4} className={classes.link}>
              <IconButton className={classes.menuIcon} onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="/about">
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <InfoIcon className={classes.icon} color="inherit" /> 서비스
                    소개
                  </MenuItem>
                </Link>
                <Link to="/contact">
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <HelpOutlineIcon className={classes.icon} color="inherit" />{" "}
                    문의
                  </MenuItem>
                </Link>
                <DarkMode2 onClick={props.setDarkMode}>
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <Brightness4Icon className={classes.icon} color="inherit" />{" "}
                    다크 모드
                  </MenuItem>
                </DarkMode2>
              </Menu>
            </Grid>
          </Hidden>
        </Grid>
      </Navbar>
      <Hidden smUp>
        <Navbar className="header">
          <Grid container className={classes.menu}>
            <Grid item xs={6}>
              <MenuLink
                to="/to-foreign"
                current={location.pathname === "/to-foreign" ? "true" : "false"}
              >
                한국어 - 외국어
              </MenuLink>
            </Grid>
            <Grid item xs={6}>
              <MenuLink
                to="/to-korean"
                current={location.pathname === "/to-korean" ? "true" : "false"}
              >
                외국어 - 한국어
              </MenuLink>
            </Grid>
          </Grid>
        </Navbar>
      </Hidden>
    </HeaderBlock>
  );
};

export default withStyles(styles)(Header);
