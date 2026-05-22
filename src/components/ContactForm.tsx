"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  interest: "Банный комплекс под ключ",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusText, setStatusText] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setStatusText("Отправляем заявку...");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setStatusText(
          data.error?.message || data.message || "Не удалось отправить заявку"
        );
        return;
      }

      setStatus("success");
      setStatusText("Заявка отправлена. Мы свяжемся с вами.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setStatusText("Ошибка соединения. Попробуйте ещё раз.");
    }
  }

  const fieldClass =
    "w-full rounded-full border border-[#8a6a43]/20 bg-[#f8f3ea]/80 px-5 py-4 text-sm text-[#111111] placeholder:text-black/35 outline-none transition duration-300 focus:border-[#8a6a43] focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,170,120,0.14)]";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[560px] rounded-[28px] border border-[#8a6a43]/18 bg-[#f4f0e8]/88 p-5 text-[#111111] shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur-md sm:p-6 md:rounded-[34px] md:p-8"
    >
      <div className="grid w-full gap-4">
        <input
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className={fieldClass}
          placeholder="Ваше имя"
        />

        <input
          required
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className={fieldClass}
          placeholder="Телефон"
        />

        <input
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className={fieldClass}
          placeholder="E-mail"
        />

        <select
          value={form.interest}
          onChange={(event) => updateField("interest", event.target.value)}
          className={`${fieldClass} appearance-none pr-10`}
        >
          <option>Банный комплекс под ключ</option>
          <option>Частный банный комплекс</option>
          <option>Комплекс в доме</option>
          <option>Гостевой / коммерческий комплекс</option>
          <option>Парная</option>
          <option>Хамам</option>
          <option>Сауна</option>
          <option>Инженерия и климат</option>
        </select>

        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-32 w-full resize-none rounded-[24px] border border-[#8a6a43]/20 bg-[#f8f3ea]/80 px-5 py-4 text-sm text-[#111111] placeholder:text-black/35 outline-none transition duration-300 focus:border-[#8a6a43] focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,170,120,0.14)]"
          placeholder="Коротко о задаче"
        />

        <button
          disabled={status === "loading"}
          type="submit"
          className="mt-1 w-full rounded-full border border-[#8a6a43] bg-[#111111] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#c8aa78] shadow-[0_16px_42px_rgba(0,0,0,0.22)] transition duration-300 hover:bg-[#8a6a43] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Отправляем..." : "Заказать консультацию"}
        </button>

        {statusText && (
          <p
            className={
              status === "success"
                ? "text-sm text-green-700"
                : status === "error"
                ? "text-sm text-red-700"
                : "text-sm text-black/50"
            }
          >
            {statusText}
          </p>
        )}

        <p className="text-center text-xs leading-relaxed text-black/40 sm:text-left">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </div>
    </form>
  );
}
