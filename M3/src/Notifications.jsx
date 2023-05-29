import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { render } from 'react-dom';
const Notifications=()=>{

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Notifications</Popover.Header>
    <Popover.Body>
      This a <strong>reminder</strong>. You need to pay your water bill.<br/>
      14/06/2023
    </Popover.Body>
    -------------------------------------------------
    <Popover.Body>
      The issue has been <strong>resolved</strong>. Notifications button is functioning well.<br/>
      10/06/2023

    </Popover.Body>
    -------------------------------------------------
    <Popover.Body>
      This a <strong>bank announcement</strong>. Interest rates have decreased on our loans. <br/>
      16/05/2023


    </Popover.Body>
  </Popover>
);
return(
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <button className='navbar-button'>Notifications</button>
  </OverlayTrigger>
);
};
export default Notifications;