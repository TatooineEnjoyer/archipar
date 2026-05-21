import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          success: false,
          message: "ENV не найдены",
          hasUrl: Boolean(supabaseUrl),
          hasKey: Boolean(supabaseKey),
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const interest = String(body.interest || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        phone,
        email,
        interest,
        message,
        source: "archipar.ru",
      })
      .select();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Supabase insert error",
          error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Заявка сохранена",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
