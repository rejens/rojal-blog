import BlogContext from "@/components/context/BlogContext";
import { useContext } from "react";

export default function page() {
   const conte = useContext(BlogContext);
   console.log("context", conte);
   console.log("con");

   const blogs = [
      {
         title: "First Blog",
         description: "This is the first blog post",
         likes: 10,
         user: "user1",
         createdAt: "2022-01-01T00:00:00.000Z",
         updatedAt: "2022-01-01T00:00:00.000Z",
      },
      {
         title: "Second Blog",
         description: "This is the second blog post",
         likes: 5,
         user: "user2",
         createdAt: "2022-01-02T00:00:00.000Z",
         updatedAt: "2022-01-02T00:00:00.000Z",
      },
   ];

   return (
      <div className="container mx-auto">
         <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
         <table className="table-auto w-full">
            <thead>
               <tr className="text-left">
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Action</th>
               </tr>
            </thead>
            <tbody>
               {blogs.map((blog) => (
                  <tr key={blog._id}>
                     <td className="border px-4 py-2">{blog.title}</td>
                     <td className="border px-4 py-2">{blog.description}</td>
                     <td className="border px-4 py-2">{blog.user}</td>
                     <td>
                        <button className="text-green-600">accept</button> |{" "}
                        <button className="text-red-600">reject</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
