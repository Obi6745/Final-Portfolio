export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            Learn more about my journey as an Interactive Media Design student
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">OH</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Obi Habibi</h2>
              <p className="text-gray-300 mb-2">Interactive Media Design Student</p>
              <p className="text-sm text-gray-400">Georgian College, Ontario</p>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                Hey! I&apos;m Obi Habibi, currently studying Interactive Media Design – Web at Georgian College. 
                I&apos;m passionate about technology and design, always eager to learn new things about web development and digital media.
              </p>
              <p>
                My journey into web development started with curiosity about how websites work. I love the problem-solving aspect 
                of coding and the satisfaction that comes from building something that others can use and enjoy.
              </p>
              <p>
                As a student, I&apos;m constantly learning new technologies and techniques. I spend time working on assignments, 
                exploring YouTube tutorials, and experimenting with different frameworks to expand my skills.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">obi6745@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">4372456526</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Current Studies</h3>
              <p className="text-gray-300 mb-4">
                I&apos;m currently enrolled in the Interactive Media Design – Web program at Georgian College. 
                This program is teaching me the fundamentals of web development, user experience design, 
                and digital media creation.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• HTML, CSS, and JavaScript</li>
                <li>• UI/UX design principles</li>
                <li>• Responsive web design</li>
                <li>• Digital media creation</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Future Goals</h3>
              <p className="text-gray-300 mb-4">
                My goal is to become a skilled web developer who can create beautiful, functional websites 
                that provide excellent user experiences.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Master web frameworks</li>
                <li>• Build a strong portfolio</li>
                <li>• Gain industry experience</li>
                <li>• Keep learning new skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
