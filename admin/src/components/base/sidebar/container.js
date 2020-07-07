import React, { Component } from "react";
import AdminNavbarLinks from '../navbars/adminNavbarLinks';

import LogoContainer from './logoContainer';
import NavContainer from './navContainer';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  
  activeRoute = (routeName) => {
    const { location } = this.props;
    if (location && location.pathname)
      return location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div  id="sidebar" className="sidebar" data-color={this.props.color} data-image={this.props.image}>
        
        {this.props.hasImage ? (<div className="sidebar-background" style={sidebarBackground} />) : (null)}
        
        <LogoContainer />
        
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((item, index) => {
              if (!item.redirect)
                return (
                  <NavContainer key={index} upgrade={item.upgrade} layout={item.layout} path={item.path} icon={item.icon} name={item.name} activeRoute={this.activeRoute}/>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;