import {getDb} from "../../../../api-routes";
import {NextResponse} from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 3600

export async function GET(request: Request) {
  try {
    const category = new URL(request.url).searchParams.get("category");
    let query = {};
    if (category) {
      query = { categories: category };
    }

    const flowers = await (await getDb())
      .collection("flowers")
      .find(query)
      .toArray();

    return NextResponse.json(flowers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({message:"Ошибка сервера"}, {status: 500});
  }
}