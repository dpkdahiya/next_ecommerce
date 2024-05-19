import { create_user } from "@/actions/auth";

function Signup() {
  return (
    <div className="flex items-center justify-center  bg-slate-200 min-h-full">
      <form
        className="flex flex-col gap-4 border border-purple-700 p-10 rounded-md"
        action={create_user}
      >
        <div className="flex gap-2 justify-between">
          <label htmlFor="Name">Name</label>
          <input id="name" type="text" className="text-black" name="name" />
        </div>
        <div className="flex gap-2 justify-between">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="text-black" name="email" />
        </div>
        <div className="flex gap-2 justify-between">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="text-black"
            name="password"
          />
        </div>

        <button
          type="submit"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
