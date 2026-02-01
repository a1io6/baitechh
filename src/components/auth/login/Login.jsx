"use client"
import React, { useState } from "react";
import "./LoginPage.scss";
import InputField from "@/components/ui/auth/inputFeiled";
import Divider from "@/components/ui/auth/divider";
import Button from "@/components/ui/auth/buttton";
import CloseRegister from "@/components/ui/auth/closeregister";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useLogin, useRegister } from "@/lib/auth/hooks/hooks";

const LoginPage = ({ type = "login" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setPhone] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const router = useRouter();

  // React Query hooks
  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "login") {
      // Логин
      try {
        const response = await loginMutation.mutateAsync({
          email,
          password
        });

        // ✅ Проверяем роль пользователя после успешного входа
        console.log('Login response:', response);
        
        // Если роль админа, редирект в админ панель
        if (response?.role === 'admin' || response?.user?.is_staff || response?.user?.is_superuser) {
          toast.success('Добро пожаловать в админ панель!');
          router.push('/camera'); 
        } else {
          // Обычный пользователь - на главную
          toast.success('Вы успешно вошли!');
          router.push('/');
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    } else {
      // Регистрация
      if (!acceptedTerms) {
        toast.error('Необходимо принять условия обслуживания'); // ✅ исправлено
        return;
      }

      if (password.length < 8) {
        toast.error('Пароль должен содержать минимум 8 символов');
        return;
      }

      try {
        const formData = {
          name: name,
          surname: surname,
          number,
          email,
          password
        };

        // Регистрация
        await registerMutation.mutateAsync(formData);
        
        router.push(`/codeverify?email=${encodeURIComponent(email)}`);
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  };

  const isLoading = type === "login" 
    ? loginMutation.isPending 
    : registerMutation.isPending;

  const error = type === "login"
    ? loginMutation.error
    : registerMutation.error;

  return (
    <div className={`login-form1`}>
      <div className="login-form1__container">
        <CloseRegister onClose={() => router.push("/")}/>
        <header className="login-form1__header">
          <h2
            onClick={() => router.push("/login")}
            className={`login-form1__title ${type === "login" ? "active" : ""}`}
          >
            Вход
          </h2>
          <h2
            className={`login-form1__title ${
              type === "register" ? "active" : ""
            }`}
            onClick={() => router.push("/register")}
          >
            Регистрация
          </h2>
        </header>

        <form onSubmit={handleSubmit} className="login-form1__form">
          {type === "register" && (
            <>
              <InputField
                type="text"
                placeholder="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
                required
              />
              <InputField
                type="text"
                placeholder="Введите фамилию"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                disabled={isLoading}
                required
              />
              <InputField
                type="tel"
                placeholder="Введите телефон"
                value={number}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isLoading}
                required
              />
            </>
          )}
          <InputField
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
          />

          <InputField
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
          />

          {error && (
            <div className="login-form1__error">
              {error?.response?.data?.message || 
               error?.response?.data?.detail ||
               error?.response?.data?.email ||
               error?.response?.data?.non_field_errors  ||
               (type === "login" ? 'Ошибка входа' : 'Ошибка регистрации')}
            </div>
          )}

          <Divider />

          {type === "register" && (
            <div className="login-form1__terms-container">
              <input 
                type="checkbox" 
                className="login-form1__terms-checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                disabled={isLoading}
              />
              <p className="login-form1__terms">
                Регистрируясь вы соглашаетесь с нашими{" "}
                <Link href="/terms" className="login-form1__terms-link">
                  условиями обслуживания
                </Link>
              </p>
            </div>
          )}

          <Button
            type="submit"
            variant="dark-blue"
            size="large"
            fullWidth
            loading={isLoading}
            disabled={isLoading || (type === "register" && !acceptedTerms)}
          >
            {type === "login" ? "Войти" : "Зарегистрироваться"}
          </Button>
        </form>

        {type === "login" && (
          <div className="login-form1__footer">
            <Link href="/forgot-password" className="login-form1__forgot-password">
              Забыли пароль?
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;