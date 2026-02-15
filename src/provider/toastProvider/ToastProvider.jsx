// components/ToastProvider.jsx
'use client'
import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster 
      position="top-right"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 4000,
        style: {
          background: '#ffffff',
          color: '#1f2937',
          padding: '16px 20px',
          borderRadius: '12px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          border: '1px solid #f3f4f6',
          fontSize: '14px',
          fontWeight: '500',
          maxWidth: '420px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        },
        
        success: {
          duration: 3500,
          style: {
            background: '#ffffff',
            color: '#065f46',
            border: '1px solid #d1fae5',
            boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.1), 0 4px 6px -2px rgba(16, 185, 129, 0.05)',
          },
          iconTheme: {
            primary: '#10b981',
            secondary: '#ffffff',
          },
        },
        
        error: {
          duration: 5000,
          style: {
            background: '#ffffff',
            color: '#991b1b',
            border: '1px solid #fee2e2',
            boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.1), 0 4px 6px -2px rgba(239, 68, 68, 0.05)',
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff',
          },
        },
        
        loading: {
          style: {
            background: '#ffffff',
            color: '#1e40af',
            border: '1px solid #dbeafe',
            boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)',
          },
          iconTheme: {
            primary: '#3b82f6',
            secondary: '#ffffff',
          },
        },
      }}
    />
  );
}   