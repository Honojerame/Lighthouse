import { useState } from 'react'

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    phone: '',
    interests: '',
    bio: '',
    education: '',
    experience: '',
  })
  const [photo, setPhoto] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  function handlePhotoChange(e) {
    const file = e.target.files[0]
    if (file) {
      setPhoto(URL.createObjectURL(file))
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Profile Photo</label>
          {photo && (
            <img
              src={photo}
              alt="Profile preview"
              className="h-32 w-32 object-cover rounded-full mb-2"
            />
          )}
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            className="border rounded p-2 w-full"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            className="border rounded p-2 w-full"
            name="location"
            value={profile.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            className="border rounded p-2 w-full"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Interests</label>
          <input
            className="border rounded p-2 w-full"
            name="interests"
            value={profile.interests}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Bio</label>
          <textarea
            className="border rounded p-2 w-full"
            name="bio"
            rows="3"
            value={profile.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Education</label>
          <textarea
            className="border rounded p-2 w-full"
            name="education"
            rows="3"
            value={profile.education}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Experience</label>
          <textarea
            className="border rounded p-2 w-full"
            name="experience"
            rows="3"
            value={profile.experience}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Preview</h2>
        {photo && (
          <img
            src={photo}
            alt="Profile preview"
            className="h-32 w-32 object-cover rounded-full mb-2"
          />
        )}
        <p className="font-semibold">{profile.name}</p>
        <p>{profile.location}</p>
        <p>{profile.phone}</p>
        <p>{profile.interests}</p>
        <p className="mt-2 whitespace-pre-line">{profile.bio}</p>
        <h3 className="font-semibold mt-4">Education</h3>
        <p className="whitespace-pre-line">{profile.education}</p>
        <h3 className="font-semibold mt-4">Experience</h3>
        <p className="whitespace-pre-line">{profile.experience}</p>
      </div>
    </div>
  )
}

export default Profile
