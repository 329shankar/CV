import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi"; // Import icons
import profile from '../components/ui/image copy.png'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg animated">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold animate-pulse">Welcome to Shankar Bhandari's Homepage</h1>
          <div className="rounded-full overflow-hidden animate-bounce">
            <Image src={profile} alt="Shankar Bhandari" width={80} height={80} className="rounded-full" />
          </div>
        </div>
        <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl mb-4">
          Hello, I'm Shankar Bhandari, a passionate web designer and tech enthusiast. 
          I recently graduated from IOE Thapathali with a degree in Electronic Communication 
          and Information Engineering. I have experience in web development using Django, 
          React, and Next.js. I'm eager to explore new technologies and contribute to 
          innovative projects.
        </p>
        <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl mb-4">
          Feel free to browse through my portfolio and projects. If you have any questions 
          or would like to collaborate, don't hesitate to 
          <a href="mailto:shankarbhandari41@gmail.com" className="text-blue-500 font-bold flex items-center">
            <FiMail className="mr-2" /> contact me via email
          </a>, or give me a call at 
          <a href="tel:9841025848" className="text-blue-500 font-bold flex items-center">
            <FiPhone className="mr-2" /> +977 9841025848
          </a>.
        </p>
        <div className="text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">View Portfolio</button>
        </div>
      </div>
    </div>
  );
}
