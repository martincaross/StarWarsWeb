export const Footer = () => {
	const links = [
		"Terms of Use",
		"Additional Content Information",
		"Privacy Policy",
		"Children's Online Privacy Policy",
		"Your US State Privacy Rights",
		"Disney Store | Star Wars",
		"Star Wars Helpdesk",
		"Interest-Based Ads",
		"Do Not Sell or Share My Personal Information"
	  ];
	
	  return (
		<footer className="py-3">
		  <div className="container d-flex justify-content-center">
			<ul className="list-unstyled text-center">
			  {links.map((link, index) => (
				<li key={index}>
				  <a href="#" className="text-light text-decoration-underline">
					{link}
				  </a>
				</li>
			  ))}
			</ul>
		  </div>
		</footer>
	  );
};