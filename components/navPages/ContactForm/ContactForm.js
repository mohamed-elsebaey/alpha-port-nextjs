import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnqqjj");

  return (
    <div
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-delay="100"
      className=" bg-white px-6 lg:px-8 py-10 "
    >
      <div className="lg:ml-20 xl:ml-36 max-w-2xl text-start">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact us - <span className="text-blueColor">Alpha Port</span>
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Be our partner. For more information, contact us.
        </p>
      </div>
      <form
        className="lg:ml-20 xl:ml-36 mt-12 max-w-xl sm:mt-16"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Your Name
            </label>
            <div className="mt-2">
              <input
                minlength="3"
                required
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blueColor/50 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2 mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Your Email
            </label>
            <div className="mt-2">
              <input
                required
                minlength="10"
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blueColor/50 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2">
              <input
                required
                minlength="11"
                type="tel"
                name="phone-number"
                id="phone-number"
                className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blueColor/50 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="tel"
                field="phone-number"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2 mt-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Your Message
            </label>
            <div className="mt-2">
              <textarea
                required
                minlength="30"
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blueColor/50 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={state.submitting}
            className="block w-full rounded-md bg-blueColor/80 px-3.5 py-2 text-center text-md font-semibold text-white shadow-sm hover:bg-blueColor duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueColor/50 disabled:opacity-20 disabled:cursor-none "
          >
            {state.submitting ? "submitting .... " : "Send"}
          </button>
          <div className="text-right my-10">
            {state.succeeded && (
              <h1>.شكرا لتواصلك معنا سنقوم بالإتصال بك في اسرع وقت</h1>
            )}
            {state.errors && (
              <h2 className="text-red-600">.من فضلك أدخل بيانات صحيحة</h2>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
