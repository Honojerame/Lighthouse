function Home() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Lighthouse</h1>
        <p className="max-w-xl mx-auto">Helping ENMU students discover internships, fellowships, and career opportunities.</p>
      </section>

      <section className="py-12 container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p>Check out featured academic and personal projects from fellow students.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Success Stories</h2>
          <p>Read about students who landed amazing opportunities.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Community</h2>
          <p>Join the conversation, share tips, and support peers.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Careers</h2>
          <p>Explore internships, fellowships, and jobs.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
