import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Psrkrk")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="flex flex-col items-center p-6 m-4 rounded-lg shadow-lg"
      style={{ backgroundColor: "#0d1117", color: "#c9d1d9" }}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin w-8 h-8 border-t-2 border-blue-500 border-solid rounded-full" />
        </div>
      ) : error ? (
        <p className="text-red-500 text-lg">{error}</p>
      ) : (
        <>
          <h1 className="mb-4 text-3xl font-bold text-white">GitHub Profile</h1>
          <img
            src={data.avatar_url}
            alt="GitHub avatar"
            width={150}
            className="rounded-full shadow-md"
          />
          <h2 className="mt-4 text-xl font-semibold text-white">
            {data.name || "GitHub User"}
          </h2>
          <p className="mt-2 text-gray-400">{data.bio || "No bio available"}</p>
          <p className="mt-4 text-lg text-gray-400">
            Followers: {data.followers}
          </p>
          <p className="text-lg text-gray-400">Following: {data.following}</p>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            Visit GitHub Profile
          </a>
        </>
      )}
    </div>
  );
}

export default Github;
