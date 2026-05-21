"use client";

import { useState } from "react";

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

  function updateField(
    field: keyof FormState,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
        setStatusText(data.error?.message || data.message || "Не удалось отправить заявку");
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

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[34px] bg-white p-6 text-black shadow-2xl md:p-8"
    >
      <div className="grid gap-4">
        <input
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="rounded-full border border-black/10 px-5 py-4 outline-none transition focus:border-[#8a6a43]"
          placeholder="Ваше имя"
        />

        <input
          required
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="rounded-full border border-black/10 px-5 py-4 outline-none transition focus:border-[#8a6a43]"
          placeholder="Телефон"
        />

        <input
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="rounded-full border border-black/10 px-5 py-4 outline-none transition focus:border-[#8a6a43]"
          placeholder="E-mail"
        />

        <select
          value={form.interest}
          onChange={(event) => updateField("interest", event.target.value)}
          className="rounded-full border border-black/10 px-5 py-4 outline-none transition focus:border-[#8a6a43]"
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
          className="min-h-32 rounded-[24px] border border-black/10 px-5 py-4 outline-none transition focus:border-[#8a6a43]"
          placeholder="Коротко о задаче"
        />

        <button
          disabled={status === "loading"}
          type="submit"
          className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#8a6a43] disabled:cursor-not-allowed disabled:opacity-50"
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

        <p className="text-xs leading-relaxed text-black/40">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </div>
    </form>
  );
}
