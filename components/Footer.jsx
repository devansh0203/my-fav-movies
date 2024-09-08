const currentYear = new Date().getFullYear(); 

function Footer(){
	return (
		<>
			<footer className="foot-container">
					<p>© {currentYear} My Favourite Movies. All Rights Reserved.</p>
						<p>Contact Us: <a href="mailto:devanshpal0203@gmail.com">devanshpal0203@gmail.com</a></p>
							<p>
							Follow us on 
							<a href="https://www.facebook.com/yourcompany" target="_blank">Facebook</a> | 
							<a href="https://www.twitter.com/yourcompany" target="_blank">Twitter</a> | 
							<a href="https://www.instagram.com/yourcompany" target="_blank">Instagram</a>
							</p>
					<p>Designed by <a href="https://github.com/devansh0203" target="_blank">Devansh</a></p>
			</footer>
		</>
	)
}

export default Footer;