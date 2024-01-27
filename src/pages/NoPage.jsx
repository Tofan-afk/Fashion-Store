import "../SASS/nopage.scss";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div id="not_found_container">
      <h2>Sorry! page not found</h2>
      <p>Sorry, page that you’re searching for doesn’t exist.</p>
      <Link to="/Swanky-Fashion-Store/">
        <button>GO TO HOME</button>
      </Link>
    </div>
  );
}
