import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20 text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Lighthouse</h1>
        <p className="max-w-xl mx-auto">Helping ENMU students discover internships, fellowships, and career opportunities.</p>
        <Link
          to="/projects"
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded font-semibold"
        >
          Explore Projects
        </Link>
      </section>

      <section className="py-12 container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gray-100 p-6 rounded shadow text-center space-y-2">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p>Check out featured academic and personal projects from fellow students.</p>
          <Link to="/projects" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
            View Projects
          </Link>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow text-center space-y-2">
          <h2 className="text-xl font-semibold">Success Stories</h2>
          <p>Read about students who landed amazing opportunities.</p>
          <Link
            to="/success-stories"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
          >
            View Stories
          </Link>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow text-center space-y-2">
          <h2 className="text-xl font-semibold">Community</h2>
          <p>Join the conversation, share tips, and support peers.</p>
          <Link to="/community" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
            Visit Community
          </Link>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow text-center space-y-2">
          <h2 className="text-xl font-semibold">Careers</h2>
          <p>Explore internships, fellowships, and jobs.</p>
          <Link to="/careers" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">
            Explore Careers
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
