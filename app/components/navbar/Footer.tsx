"use client";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGlobeAmericas,
} from "react-icons/fa";
import { useViewport } from "@/app/hooks/useViewPort";

export default function Home() {
  const { width } = useViewport();

  return (
    <div className="bg-gray-100 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Safety Information
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Cancellation Options
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Our Response to the COVID-19 Pandemic
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Support People with Disabilities
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Report a Neighborhood Issue
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Community</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Stay Close: Disaster Relief
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Support Afghan Refugees
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Diversity and Belonging
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Combat Discrimination
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Hosting</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Try Hosting
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  AirCover: Hosting Protection
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Explore Hosting Resources
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Visit the Community Forum
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Host Responsibly
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Newsroom
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Discover New Features
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Letter from Our Founders
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Investors
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-500 hover:underline">
                  Stay Close Luxe
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 py-4 flex justify-between items-center">
          <p className="text-sm">© 2024 Stay Close, Inc.</p>
          <div>
            {width > 1112 && <span className="mx-2">·</span>}
            <a href="/" className="text-sm text-gray-500 hover:text-blue-500">
              Privacy
            </a>
            <span className="mx-2">·</span>
            <a href="/" className="text-sm text-gray-500 hover:text-blue-500">
              Terms
            </a>
            <span className="mx-2">·</span>
            <a href="/" className="text-sm text-gray-500 hover:text-blue-500">
              Site Map
            </a>
            <span className="mx-2">·</span>
            <a href="/" className="text-sm text-gray-500 hover:text-blue-500">
              Company Info
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 mb-[-8px]">
          <div className="flex items-center">
            <button
              type="button"
              className="flex items-center text-sm text-gray-600"
            >
              <span>
                <FaGlobeAmericas size={18} />
              </span>
              <span className="ml-1">English (ZA)</span>
            </button>
            <button
              type="button"
              className="flex items-center text-sm text-gray-600 ml-4"
            >
              {/* <span>R$</span>
            <span className="ml-1">ZAR</span> */}
            </button>
          </div>

          {width > 730 && (
            <div className="flex items-center">
              <FaFacebook size={18} className="mr-2" />
              <FaTwitter size={18} className="mr-2" />
              <FaInstagram size={18} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
