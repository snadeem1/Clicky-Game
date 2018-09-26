import React from 'react';

const Header = props => (
<div className= "header">
<div className= "title">{props.children}</div>
<div className = "scores">
Score: {props.score}
<br></br>
Top Score: {props.TopScore}

</div>

</div>
);



export default Header;