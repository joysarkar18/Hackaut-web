import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
export const TeamCard = (props) => {
  return (
    <div className="w-40">
      <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
        <img
          className="absolute object-cover w-full h-full rounded-xl"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt="Person"
        />
      </div>
      <div className="flex flex-col text-center">
        <p className="text-lg font-bold">{props.name}</p>
        <p className="mb-5 text-xs text-gray-800">{props.role}</p>
        <div className="flex items-center justify-center space-x-3">
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            <IoPerson size={20}></IoPerson>
          </a>
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-black"
          >
            <FaGithub size={20}></FaGithub>
          </a>
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-fuchsia-400"
          >
            <FaInstagram size={20}></FaInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};
