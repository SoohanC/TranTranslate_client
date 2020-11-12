import { Grid, Hidden, IconButton, Menu, MenuItem, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const styles = (theme) => ({
  logo:{
    display:"flex",
    justifyContent:"flex-start",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight:10,
  },
  menuIcon: {
    color: "white",
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
  min-height: 50px;
  background-color: #00a8ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  z-index: 5;
`;

const Logo = styled(Link)`
  margin: 0px 20px;
  font-family: "Amatic SC", cursive;
  color: white;
  font-size: 36px;
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
      <Navbar>
        <Grid container alignItems="center">
          <Grid item xs={6} md={4} className={classes.logo}>
            <Logo to="/">TranTranslate</Logo>
          </Grid>
          <Hidden smDown>
            <Grid item xs={4} className={classes.menu}>
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
          <Hidden xsDown>
            <Grid item xs={6} md={4} className={classes.link}>
              <Item to="/about">서비스 소개</Item>
              <Item to="/contact">문의 </Item>
              <Item to="/wip">다크 모드</Item>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={6} md={4} className={classes.link}>
              <IconButton className={classes.menuIcon} onClick={handleClick}>
                <MoreHorizIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="/about"><MenuItem onClick={handleClose}>서비스 소개</MenuItem></Link>
                <Link to="/contact"><MenuItem onClick={handleClose}>문의</MenuItem></Link>
                <Link to="/wip"><MenuItem onClick={handleClose}>다크 모드</MenuItem></Link>
              </Menu>
            </Grid>
          </Hidden>
        </Grid>
      </Navbar>
      <Hidden mdUp>
        <Navbar>
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
