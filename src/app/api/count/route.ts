import Count, { dbconnect } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(Request: NextRequest, Response: NextResponse) {
  try {
    dbconnect();
    let countdoc = await Count.findOne();

    if (!countdoc) {
      countdoc = new Count({ count: 1 });
    } else {
      countdoc.count += 1;
    }

    await countdoc.save();
    console.log("count", countdoc.count);

    return NextResponse.json(
      {
        success: true,
        message: "count updated",
        count: countdoc,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.log("ERR updating count");
    return NextResponse.json(
      {
        message: "Something went wrong ",
        whattodo: "check server",
      },
      { status: 500 }
    );
  }
}

export async function GET(Request: NextRequest, Response: NextResponse) {
  try {
    dbconnect();
    let data = await Count.findOne();
    if (!data) {
      return NextResponse.json(
        {
          Message: "data is possibly NULL",
        },
        { status: 401 }
      );
    }
    let count = data.count;

    return NextResponse.json(
      { Message: "success", count: count },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { Message: "Error getting count" },
      { status: 500 }
    );
  }
}
