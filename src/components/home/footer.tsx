import Link from "next/link";
import { BiX } from "react-icons/bi";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2F5755] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="">
            <h2 className="text-xl font-semibold text-white mb-3">
              Siddharth Bramhecha
            </h2>
            <p className="text-sm leading-6">
              Full Stack Developer | Gen AI Engineer
            </p>
          </div>

          {/* Links */}
          <div className=" relative z-50">
            <h2 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white cursor-target p-2 px-3"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#exp"
                  className="hover:text-white cursor-target p-2 px-3"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  className="hover:text-white cursor-target p-2 px-3"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="hover:text-white cursor-target p-2 px-3"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Connect with me
            </h2>
            <div className="flex relative z-90 space-x-4 text-xl">
              <Link target="_blank" className="p-1 cursor-target" href={"https://github.com/Sid-80"}>
                <GrGithub className="md:w-6 md:h-6" />
              </Link>
              <Link target="_blank" className="p-1 cursor-target" href={"https://www.linkedin.com/in/siddharth-bramhecha/"}>
                <BsLinkedin className="md:w-6 md:h-6" />
              </Link>
              <Link target="_blank" className="p-1 cursor-target" href={"https://x.com/SidJain_80"}>
                <FaSquareXTwitter  className="md:w-6 md:h-6" />
              </Link>
              <Link target="_blank" className="p-1 cursor-target" href="mailto:siddharthbramhecha@email.com">
                <IoIosMail   className="md:w-6 md:h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Siddharth Bramhecha. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
