// import React, { useEffect, useState } from "react";

// const Items = () => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);

//   const getItems = async () => {
//     setLoading(true);
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ erfan: "React Hooks POST Request Example" }),
//     };
//     const response = await fetch(
//       "https://api.nikotan.ir/api/data/landing",
//       requestOptions
//     );
//     const responseJson = await response.json();
//     setLoading(false);

//     console.log("response : ", responseJson.data);
//     setData(responseJson.data.blogs);
//   };

//   useEffect(() => {
//     getItems();
//   }, []);

//   if (loading) {
//     return <p>Loading ...</p>;
//   }
//   return (
//     <div className="row">
//       {data.map((blog) => {
//         return (
//           <div className="col-4">
//             <img style={{ width: "100%" }} src={blog.images[0]} />
//             <div>
//               <h4>{blog.title}</h4>
//               <p>{blog.description}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Items;
