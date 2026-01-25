"use client"
import React from "react";
import "./ForgotPassword.scss";
import CloseRegister from "@/components/ui/auth/closeregister";
import InputField from "@/components/ui/auth/inputFeiled";
import Button from "@/components/ui/auth/buttton";
import { useRouter } from "next/navigation";  // ← Исправлено!

function ForgotPassword({ type = "forgotPassword" }) {
  const router = useRouter();  // ← Переименовано
  
  return (
    <div className="forgot-password-page-container">
      <CloseRegister onClose={() => router.push("/")}/>  {/* ← Исправлено */}
      <div className="forgot-password-page">
        <h2 className="forgot-password-page__title">
          {type === "forgotPassword"
            ? "Забыли пароль?"
            : "Создайте новый пароль"}
        </h2>
        <h4 className="forgot-password-page__subtitle">
          {type === "forgotPassword" 
            ? "Введите почту, к которой привязан ваш аккаунт" 
            : "Введите новый пароль"}
        </h4>
        <form className="forgot-password-page__form">
          {type === "forgotPassword" ? (
            <InputField type="email" required placeholder="Введите email" />
          ) : (
            <>
              <InputField
                type="password"
                required
                placeholder="Введите новый пароль"
              />
              <InputField
                type="password"
                required
                placeholder="Повторите новый пароль"
              />
            </>
          )}
          <Button type="submit" variant="dark-blue">
            {type === "forgotPassword"
              ? "Получить код"
              : "Сохранить новый пароль"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;