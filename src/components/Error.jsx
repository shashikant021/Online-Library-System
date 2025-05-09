import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  //   console.error(error);
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-red-700 text-5xl font-bold">Oops!</h1>
        <h1 className="text-xl">
          {error.status}--{error.statusText}
        </h1>
        <h2>{error.data}</h2>
        <p>Sorry, the page you're looking for does not exist.</p>
        <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-xl font-bold">
          <a href="/"> HomePage</a>
        </button>
      </div>
    </>
  );
}
export default Error;
