import Navbar from "@/components/Navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Container for content */}
      {/* <Navbar /> */}
      <div className="container mx-auto py-12 px-6">
        
        {/* Meet the Team Section */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold">Meet the Team</h2>
          <p className="text-lg mt-2 opacity-90">The creative minds behind our e-commerce platform</p>
        </div>

        {/* Team Name */}
        <div className="text-center mt-6">
          <h3 className="text-3xl font-bold text-yellow-300">Team Innovators</h3>
        </div>

        {/* Cards Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center text-black transform transition hover:scale-105">
              <img
                src={`https://randomuser.me/api/portraits/men/${index + 10}.jpg`} 
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full border-4 border-yellow-400 mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Member {index + 1}</h3>
              <p className="text-gray-600 mt-2">Expert in e-commerce solutions & innovation.</p>
            </div>
          ))}
        </div>

        {/* About the Project Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-xl text-black text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our E-Commerce Platform</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We bring you the best online shopping experience with seamless transactions, AI-driven recommendations, and a user-friendly interface.
          </p>
        </div>

      </div>
    </div>
  );
}
