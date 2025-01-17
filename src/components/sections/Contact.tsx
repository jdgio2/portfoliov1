export default function Contact() {
  return (
    <section className="py-10 flex flex-col items-center mx-1">
      <h1 className="inline mx-2 font-mono font-bold text-5xl text-center border-b-2 border-onahau-300 pb-4 mb-8">
        CONTACT ME
      </h1>
      <p className="mt-1 mx-2 text-sm text-gray-600 text-center">
        If you would like to contact me, I'd love to talk. Just fill out the
        info below to send me a message, and you'll get a confirmation email
        when you're all done.
      </p>
      <form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-onahau-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-onahau-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="sm:col-span-full">
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Your email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
              text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300
              placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 
              focus:outline-onahau-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="user-message"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="user-message"
              name="user-message"
              className="block w-full rounded-md h-36 bg-white px-3 py-1.5 
              text-base text-gray-900 outline outline-1 -outline-offset-1 
              outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 
              focus:-outline-offset-2 focus:outline-onahau-600 sm:text-sm/6"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
