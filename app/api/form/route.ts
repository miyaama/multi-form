import { NextRequest, NextResponse } from "next/server";

const URL = "https://jsonplaceholder.typicode.com/posts";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();

    await fetch(URL, {
      method: "POST",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return NextResponse.json("ok", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
