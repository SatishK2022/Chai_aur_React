import {  useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/satishk2022")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h1 className="text-center text-3xl font-extrabold underline uppercase underline-offset-4 mb-3 text-orange-600">
        Github Profile
      </h1>
      <div className="flex flex-col items-center w-full md:w-1/3 border shadow-md rounded-md py-5 my-5">
        <img
          className="h-56 w-56 rounded-full"
          src={data?.avatar_url}
          alt="Profile"
        />
        <h2 className="text-3xl font-semibold py-2">{data?.name}</h2>
        <a href={data.html_url} target="_blank" className="bg-orange-500 py-2 px-5 rounded text-white font-semibold hover:bg-orange-600 active:scale-95 transition duration-200" rel="noreferrer">Github Link</a>
      </div>
    </div>
  );
};

export default Github;


