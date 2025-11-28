import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullName, message } = await req.json();

    const text = `📩 សារជូនពរ!\nឈ្មោះ: ${fullName}\nសារ: ${message}`;

    const res = await fetch(
      `https://api.telegram.org/bot${process.env.NEXT_TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.NEXT_TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    if (!res.ok) {
      console.error("Telegram API Error:", await res.text());
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("API Error:", message);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
