function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-4 py-4 text-center">
        <p>© {new Date().getFullYear()} Lighthouse. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
