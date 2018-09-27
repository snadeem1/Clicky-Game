import React from 'react';

const Header = props => (
<div className= "header">
<div className= "title">{props.children}</div>
<div className= "instruction"> <p>Click on an image to earn points, but don't click on any more than once!</p></div>
<div className = "scores">
Score: {props.score}
<br></br>
Top Score: {props.TopScore}

</div>

</div>
);



export default Header;