import { connectDB } from "@/lib/mongodbconn";
import Blog from "@/lib/models/Blog";

// post api
export async function POST(req) {
connectDB();

  const data = await req.json();
//   insertion of data
  const blog = await Blog.create(data);


  if (blog) {
     return new Response(
      JSON.stringify({
        data: data,
      })
    );
  } else {
    return new Response(
      JSON.stringify({
        data: { resp: false },
      })
    );
  }
}


// blog get apis
export async function GET() {
  await connectDB();

  const blogs = await Blog.find(); // fetch all blogs

  return Response.json(blogs);
}