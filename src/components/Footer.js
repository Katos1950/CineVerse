export const Footer = () => {
    return (
      <footer className="bg-blue-50 shadow py-4 border-t-2 border-gray-800 dark:border-white dark:bg-gray-800">
        <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">CineVerse™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a href="#" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              {// eslint-disable-next-line
              }
              <a href="#" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              {// eslint-disable-next-line
              }
              <a href="#" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              {// eslint-disable-next-line
              }
              <a href="#" target="_blank" rel="noreferrer" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
  