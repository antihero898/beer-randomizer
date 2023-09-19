import { Link, Outlet } from "@tanstack/react-router";
import { ChevronDown, ChevronUp } from 'mdi-material-ui'
import { useState } from "react";

const RouteLink = (props) => {
  const { linkRoute, linkLabel } = props;
  return (
    <div style={{margin: '5px'}}>
      <Link to={linkRoute}>{linkLabel}</Link> 
    </div>
  );
};


export const Root = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const routerLinksClassName = isExpanded ? ' is-expanded' : ' is-collapsed';
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  return (
    <>
      <div           
        className="router-container" 
        style={{
          display: 'flex', 
          flexDirection: 'column', 
          position: 'absolute',
          width: '100%',
          background: 'rgb(36 36 36)',
          zIndex: '500',
          borderBottom: '3px solid #FFFFFF'
        }}
      >
        <div>
          <div className={`router-list${routerLinksClassName}`} style={{marginLeft: '5px'}}>
            <div style={{marginLeft: '5px'}}>
              <h3>Choose your path:</h3>
            </div>
            <div>
              <RouteLink
                linkRoute="/"
                linkLabel="Home"
              />
              <RouteLink
                linkRoute="/taster"
                linkLabel="Taster"
              />
              <RouteLink
                linkRoute="/randomizer"
                linkLabel="Randomizer"
              />
            </div>
          </div>
          <div style={{justifyContent: 'center'}}>
            <div style={{margin: '10px 10px 10px 10px'}}>
              <button onClick={() => { setIsExpanded(!isExpanded); }}>
                <ButtonIcon/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ top: '65px', position: 'relative'}}>
`      <Outlet />`
      </div>
    </>
  );
};

export default Root;