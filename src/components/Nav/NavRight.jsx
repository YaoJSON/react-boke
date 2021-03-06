import React from 'react';
import Grid  from 'uxcore-grid';
import { Link } from 'react-router';
let { Col } = Grid;

let navArr = [
	{
		title:'关于我',
		link:'about'
	},
	{
		title:'博客',
		link:'boke/project'
	},
	{
		title:'联系我',
		link:'me'
	},
  {
    title:'返回旧版',
    link:'/demo/gallery/',
    target:'_blank'
  }
];
let NavList = navArr.map((vaule,index) => {
	return (
		<li key={index} className="lt navbar-li">
      {
        vaule.target?
          <a href="https://yao-json.github.io/demo/old-boke/" target={vaule.target}>{vaule.title}</a>:
          <Link to={vaule.link}>{vaule.title}</Link>
      }
		</li>
	);
});
let Button = (props) => {
	return (
		<button {...props} type='secondary' className="navbar-toggle-btn">
	    	<span className="icon-bar"></span>
	    	<span className="icon-bar"></span>
	    	<span className="icon-bar"></span>
	    </button>
	);
};

let NavRight = (props) => {
	let clientWidth = props.clientWidth;
	let me = props.me;
	if(clientWidth <= 768){
		return (
			<Col className='nav-right' sm={8} xs={8}>
				<Button onClick={() => {
					me.toggleMenu()
				}}/>
			</Col>
		);
	}

	return (
		<Col className='nav-right' sm={8} xs={8} md={16} >
			<ul className='clear rt navBar'>
				 {NavList}
			</ul>
		</Col>
	);
}

export default NavRight;

