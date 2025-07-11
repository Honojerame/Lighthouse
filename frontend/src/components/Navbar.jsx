import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Lighthouse</Link>
        <div className="space-x-4">
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/success-stories" className="hover:underline">Success Stories</Link>
          <Link to="/community" className="hover:underline">Community</Link>
          <Link to="/careers" className="hover:underline">Careers</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
