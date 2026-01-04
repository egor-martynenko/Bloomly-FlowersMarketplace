import {getDb} from "../../../../api-routes";
import {NextResponse} from "next/server";
export const revalidate = 3600

export async function GET() {
  try {
    const db = await getDb();
    const flowers = await db.collection("flowers").find().toArray();
    return NextResponse.json(flowers);
  }catch (error) {
    console.error(error);
    return NextResponse.json({message:"Ошибка сервера"}, {status: 500});
  }
}