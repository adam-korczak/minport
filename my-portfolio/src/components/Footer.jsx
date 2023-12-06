import React from "react";
//1
function Footer() {
  return (
    <div className="py-5 text-center">
      {/* Social Icons */}
      <p className="text-md mt-2 opacity-80">
        <a
          href="https://www.linkedin.com/in/adam-korczak"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-white text-stone-900 hover:text-blue-700 dark:hover:text-blue-700"
        >
          LinkedIn |
        </a>
        <a
          href="https://github.com/adam-korczak"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-white text-stone-900 hover:text-blue-700 dark:hover:text-blue-700"
        >
          | GitHub |
        </a>
        <a
          href="https://emerald-hildegarde-30.tiiny.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-white text-stone-900 hover:text-blue-700 dark:hover:text-blue-700"
        >
          | Resume
        </a>
      </p>
    </div>
  );
}

export default Footer;
