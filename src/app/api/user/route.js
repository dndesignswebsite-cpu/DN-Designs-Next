import { connectDB } from "@/lib/mongodbconn";
import User from "@/lib/models/User";

// get api
export function GET(req) {
  let data = {
    value: "json date",
  };
  return new Response(JSON.stringify(data));
}

// post api
export async function POST(req) {
connectDB();

  const data = await req.json();
//   insertion of data
  const user = await User.create(data);


  if (user) {
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
