import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export async function POST(request: Request) {
  try {
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

    const { error } = await supabase.from("leads").insert({
      name,
      phone,
      email,
      interest,
      message,
      source: "archipar.ru",
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: "Ошибка сохранения заявки" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Заявка успешно отправлена",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Ошибка сервера" },
      { status: 500 }
    );
  }
}