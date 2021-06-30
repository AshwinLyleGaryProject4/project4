import logo from '../tmdb.svg'

function Footer () {
    return(
        <footer>
            {/* <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p> */}
            <img className="logo" src={logo} alt="The Movie Database Logo" />
            <a className="juno" href="https://junocollege.com/">Copyright<span>&#169;</span>2021 Juno College.</a>
        </footer>
    )
}

export default Footer;