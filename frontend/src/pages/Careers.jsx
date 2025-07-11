function Careers() {
  const jobs = [
    { id: 1, title: 'Software Engineering Intern', company: 'Tech Corp' },
    { id: 2, title: 'Research Fellowship', company: 'Government Lab' },
    { id: 3, title: 'Data Analyst Intern', company: 'Big Data Inc.' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Careers</h1>
      <p className="mb-6">Browse internships, fellowships, and job postings.</p>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="border rounded p-4 shadow">
            <h3 className="font-semibold">{job.title}</h3>
            <p>{job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Careers
