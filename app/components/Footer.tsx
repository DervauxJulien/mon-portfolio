// components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className=" flex justify-center py-5 bg-black bg-opacity-70 text-center">
      <a href="https://www.linkedin.com/in/julien-dervaux-378b7b1b8/" target="_blank" rel="noopener noreferrer">
          <img src="Images/logo/linkedin.png" alt="LinkedIn link" className="w-8 h-8 mr-10" />
        </a>
        <a href="https://github.com/DervauxJulien" target="_blank" rel="noopener noreferrer">
          <img src="Images/logo/github.png" alt="Github link" className="w-8 h-8" />
        </a>
    </footer>
  );
}
