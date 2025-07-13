  import React, { useState } from 'react';
  import { DefaultSeminarPlan } from './types/seminar.js';

  function App() {
    const [seminarPlan, setSeminarPlan] = useState(() => {
      try {
        return DefaultSeminarPlan();
      } catch (error) {
        console.error('Error initializing seminar plan:', error);
        return {
          basicInfo: {
            title: '',
            theme: '',
            objective: '',
            targetAudience: '',
            expectedParticipants: 0,
            date: '',
            time: '',
            duration: '',
            venue: '',
            format: 'offline'
          }
        };
      }
    });

    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <header style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '2rem',
          marginBottom: '2rem',
          textAlign: 'center',
          borderRadius: '12px'
        }}>
          <h1>BtoBセミナー企画書作成アプリ</h1>
          <p>効果的なセミナー企画書を簡単に作成できます</p>
        </header>

        <div style={{ 
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2>アプリが正常に読み込まれました！</h2>
          <p>セミナータイトル: {seminarPlan?.basicInfo?.title || '未設定'}</p>

          <button 
            style={{
              background: '#667eea',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onClick={() => {
              setSeminarPlan(prev => ({
                ...prev,
                basicInfo: {
                  ...prev.basicInfo,
                  title: 'テストセミナー'
                }
              }));
            }}
          >
            テストボタン - タイトル設定
          </button>
        </div>
      </div>
    );
  }

  export default App;
