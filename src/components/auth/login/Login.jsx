"use client"
import React, { useState } from "react";
import "./LoginPage.scss";
import InputField from "@/components/ui/auth/inputFeiled";
import Divider from "@/components/ui/auth/divider";
import Button from "@/components/ui/auth/buttton";
import CloseRegister from "@/components/ui/auth/closeregister";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = ({ type = "login" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();   

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
  };

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
                type="number"
                placeholder="Введите телефон"
                value={phone}
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

          {error && <div className="login-form1__error">{error}</div>}

          <Divider />

          {type === "register" && (
            <div className="login-form1__terms-container">
              <input type="checkbox" className="login-form1__terms-checkbox" />
              <p className="login-form1__terms">
                Регистрируясь вы соглашаетесь с нашими{" "}
                <a href="#" className="login-form1__terms-link">
                  условиями обслуживания
                </a>
              </p>
            </div>
          )}

          <Button
            type="submit"
            variant="dark-blue"
            size="large"
            fullWidth
            loading={isLoading}
            disabled={isLoading}
          >
            Войти
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