import { useTitle } from "../hooks"

export const PageNotFound = () => {

  useTitle("Page Not Found");
  return (
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">Error 404</p>
          <p className="text-5xl text-gray-700 font-bold my-10 dark:text-white">Page Not Found</p>
        </div>
    </section>
  )
}
