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
          message: "Не настроены переменные Supabase на сервере",
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
        {
          success: false,
          message: "Заполните имя и телефон",
        },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { error } = await supabase.from("leads").insert({
      name,
      phone,
      email: email || null,
      interest: interest || null,
      message: message || null,
      source: "archipar.ru",
    });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message || "Ошибка сохранения заявки",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Заявка успешно отправлена",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Ошибка сервера. Попробуйте позже.",
      },
      { status: 500 }
    );
  }
}
