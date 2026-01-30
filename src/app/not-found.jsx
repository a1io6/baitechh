"use client"; // обязательно для хуков на клиенте
import { useRouter } from "next/navigation";
import './NotFound.scss';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="not-found-wrapper">
      <div className="inner-content">
        <div className="error-visual">
          <h1 className="error-number">404</h1>
          <div className="divider"></div>
        </div>
        
        <h2 className="error-heading">Упс! Баракча табылган жок</h2>
        <p className="error-description">
          Сиз издеген баракча өчүрүлгөн же дареги өзгөртүлгөн болушу мүмкүн. 
          Төмөндөгү баскычты басып башкы бетке өтүңүз.
        </p>

        <button className="go-home-button" onClick={() => router.push('/')}>
          На главную
        </button>
      </div>
    </div>
  );
}
  