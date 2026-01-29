"use client"
import React, { useState } from "react";
import "./ForgotPassword.scss";
import CloseRegister from "@/components/ui/auth/closeregister";
import InputField from "@/components/ui/auth/inputFeiled";
import Button from "@/components/ui/auth/buttton";
import { useRouter } from "next/navigation";
import { usePasswordResetRequest } from "@/lib/auth/hooks/hooks";
import { toast } from "react-hot-toast";

function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  
  const passwordResetMutation = usePasswordResetRequest();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Введите email');
      return;
    }
    try {
      await passwordResetMutation.mutateAsync(email);
      // Перенаправляем на страницу ввода кода с email в URL
      router.push(`/resetpassword?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error('Password reset request error:', error);
    }
  };

  const isLoading = passwordResetMutation.isPending;

  return (
    <div className="forgot-password-page-container">
      <CloseRegister onClose={() => router.push("/")} />
      <div className="forgot-password-page">
        <h2 className="forgot-password-page__title">
          Забыли пароль?
        </h2>
        <h4 className="forgot-password-page__subtitle">
          Введите почту, к которой привязан ваш аккаунт
        </h4>
        
        <form className="forgot-password-page__form" onSubmit={handleSubmit}>
          <InputField 
            type="email" 
            required 
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />

          {passwordResetMutation.isError && (
            <div className="forgot-password-page__error">
              {passwordResetMutation.error?.response?.data?.message || 
               passwordResetMutation.error?.response?.data?.detail ||
               passwordResetMutation.error?.response?.data?.email ||
               'Ошибка отправки'}
            </div>
          )}

          <Button 
            type="submit" 
            variant="dark-blue"
            loading={isLoading}
            disabled={isLoading}
          >
            Получить код
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;