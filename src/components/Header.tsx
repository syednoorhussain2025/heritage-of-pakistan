// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaMapMarkerAlt,
  FaLandmark,
  FaSearch,
  FaMap,
  FaListUl,
  FaMountain,
  FaUniversity,
  FaWater,
  FaPlaceOfWorship,
  FaMosque,
  FaCross,
  FaChurch,
  FaGopuram,
  FaUmbrellaBeach,
  FaTree,
} from "react-icons/fa";

const menuColor = "text-orange-500"; // consistent color for all icons

export default function Header() {
  const [regionOpen, setRegionOpen] = useState(false);
  const [heritageOpen, setHeritageOpen] = useState(false);

  const regions = [
    { name: "Gilgit Baltistan", icon: <FaMountain className={menuColor} /> },
    { name: "Sindh", icon: <FaLandmark className={menuColor} /> },
    { name: "Punjab", icon: <FaLandmark className={menuColor} /> },
    { name: "Balochistan", icon: <FaMountain className={menuColor} /> },
    { name: "Khyber Pakhtunkhwa", icon: <FaMountain className={menuColor} /> },
    { name: "Azad Kashmir", icon: <FaTree className={menuColor} /> },
  ];

  const heritage = [
    { name: "Mountains & Valleys", icon: <FaMountain className={menuColor} /> },
    { name: "Architecture", icon: <FaUniversity className={menuColor} /> },
    { name: "Waterbodies", icon: <FaWater className={menuColor} /> },
    { name: "Forts & Palaces", icon: <FaLandmark className={menuColor} /> },
    {
      name: "Tombs & Sufi Shrines",
      icon: <FaPlaceOfWorship className={menuColor} />,
    },
    {
      name: "Archaeological Sites",
      icon: <FaUniversity className={menuColor} />,
    },
    { name: "Mosques", icon: <FaMosque className={menuColor} /> },
    { name: "Temples", icon: <FaGopuram className={menuColor} /> },
    { name: "Churches", icon: <FaChurch className={menuColor} /> },
    { name: "Gurdwaras", icon: <FaCross className={menuColor} /> },
    { name: "Deserts", icon: <FaMountain className={menuColor} /> },
    { name: "Beaches", icon: <FaUmbrellaBeach className={menuColor} /> },
    { name: "Parks & Gardens", icon: <FaTree className={menuColor} /> },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left - Brand */}
        <Link href="/" className="text-xl font-bold text-green-700">
          HERITAGE OF PAKISTAN
        </Link>

        {/* Center - Quick Search */}
        <div className="flex-1 px-6">
          <input
            type="text"
            placeholder="Search Heritage"
            className="w-full border rounded px-3 py-1 text-sm"
          />
        </div>

        {/* Right - Navigation */}
        <nav className="flex items-center space-x-6 text-gray-600">
          <Link
            href="/"
            className="flex items-center space-x-1 hover:text-orange-500"
          >
            <FaHome className={menuColor} />
            <span>Home</span>
          </Link>

          {/* Regions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setRegionOpen(true)}
            onMouseLeave={() => setRegionOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-orange-500">
              <FaMapMarkerAlt className={menuColor} />
              <span>Regions</span>
            </button>
            {regionOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded w-48 z-50">
                {regions.map((r) => (
                  <Link
                    key={r.name}
                    href={`/explore?region=${encodeURIComponent(r.name)}`}
                    className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    {r.icon}
                    <span>{r.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Heritage Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHeritageOpen(true)}
            onMouseLeave={() => setHeritageOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-orange-500">
              <FaLandmark className={menuColor} />
              <span>Heritage</span>
            </button>
            {heritageOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded w-64 z-50">
                {heritage.map((h) => (
                  <Link
                    key={h.name}
                    href={`/explore?category=${encodeURIComponent(h.name)}`}
                    className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    {h.icon}
                    <span>{h.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/explore"
            className="flex items-center space-x-1 hover:text-orange-500"
          >
            <FaSearch className={menuColor} />
            <span>Explore</span>
          </Link>

          <Link
            href="/map"
            className="flex items-center space-x-1 hover:text-orange-500"
          >
            <FaMap className={menuColor} />
            <span>Map</span>
          </Link>

          <Link
            href="/trip-builder"
            className="flex items-center space-x-1 hover:text-orange-500"
          >
            <FaListUl className={menuColor} />
            <span>Trip Builder</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
