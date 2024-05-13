// pages/cv.js

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import profile from './image copy.png';

const CV = () => (
  <div className="bg-gray-100 min-h-screen flex justify-center items-center">
    <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <Image src={profile} alt="Shankar Bhandari" width={80} height={80} className="rounded-full" />
        </div>
        <div>
          <p className="text-xl font-semibold">Shankar Bhandari</p>
          <p className="text-gray-600">Electronic Communication And Information Engineering Graduate</p>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Personal Information</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> Shankar Bhandari <br />
          <span className="font-semibold">Address:</span> Anamnagar, Kathmandu <br />
          <span className="font-semibold">Phone:</span> <span className="text-blue-500">9841025848</span> <br />
          <span className="font-semibold">Email:</span> <span className="text-blue-500">shankarbhandari41@gmail.com</span> <br />
          <span className="font-semibold">Date of Birth:</span> July 14, 2000 <br />
          <span className="font-semibold">Gender:</span> Male <br />
          <span className="font-semibold">Current Address:</span> Anamnagar, Kathmandu <br />
          <span className="font-semibold">Permanent Address:</span> Harinas-3, Syangja, Nepal <br />
          <span className="font-semibold">Marital Status:</span> Unmarried <br />
          <span className="font-semibold">Religion:</span> Hinduism <br />
          <span className="font-semibold">Nationality:</span> Nepali
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Objective</h2>
        <p className="text-gray-700">
          Throughout my academic journey at Himalayan Whitehouse International College and ongoing studies
          at IOE, Thapathali Campus, I have cultivated a strong foundation in both theoretical knowledge and
          practical application. My coursework and projects have equipped me with expertise in Python,
          JavaScript, machine learning algorithms, and database management.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <p className="text-gray-700">
          October, 2019 (Under Graduate (Bachelor)) - Bachelor Of Electronic Communication And Information Engineering
          Thapathali Campus, Institute of Engineering (IOE), Kathmandu, Tribhuvan University (TU), Nepal
        </p>
      </div>
      {/* Add other sections similarly */}

      <div className="flex  justify-evenly mt-8">
        <a href="https://www.facebook.com/329shankar" target="_blank" className="mr-4 text-blue-500">Facbook
          <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
        </a>
        <a href="https://twitter.com/329shankar" target="_blank" className="text-blue-500">Twitter 
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
        </a>
      </div>
    </div>
  </div>
);

export default CV;