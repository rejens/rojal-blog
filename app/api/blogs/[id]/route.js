import Blog from "@/models/UserModel";
import { NextResponse } from "next/server";

//@desc    Get the blog based on the blog id
//@route   GET /api/blogs/:id

export async function GET(request, { params }) {
   try {
      const { id } = params;
      const blog = await Blog.findById(id);
      return NextResponse.json(blog, { status: 200 });
   } catch (err) {
      console.log(err.message);
   }
}

//@desc    update blog  based on the blog id
//@route   PUT /api/blogs/:id

export async function PUT(request, { params }) {
   try {
      const { id } = params;
      const data = await request.json();
      const response = await Blog.findByIdAndUpdate(id, data, {
         new: true,
         runValidators: true,
      });
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      console.log(err.message);
   }
}
