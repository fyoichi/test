  import React, { useState } from 'react';
  import { DefaultSeminarPlan } from './types/seminar.js';
  import BasicInfoForm from './components/BasicInfoForm.jsx';
  import ContentForm from './components/ContentForm.jsx';
  import MarketingForm from './components/MarketingForm.jsx';
  import LogisticsForm from './components/LogisticsForm.jsx';
  import EvaluationForm from './components/EvaluationForm.jsx';
  import PreviewSection from './components/PreviewSection.jsx';

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
          },
          content: {
            agenda: [{ time: '', title: '', speaker: '', duration: '', description: '' }],
            speakers: [{ name: '', title: '', company: '', profile: '', expertise: '' }],
            materials: [{ type: '', title: '', description: '' }]
          },
          marketing: {
            promotionChannels: [],
            registrationMethod: '',
            applicationDeadline: '',
            fee: 0,
            capacity: 0,
            followUpPlan: ''
          },
          logistics: {
            equipmentNeeds: [],
            staffingPlan: '',
            budget: { venue: 0, speakers: 0, materials: 0, promotion: 0, other: 0, total: 0 },
            riskManagement: '',
            contingencyPlan: ''
          },
          evaluation: {
            successMetrics: [],
            surveyQuestions: [],
            followUpActions: []
          }
        };
      }
    });

    const [activeTab, setActiveTab] = useState('basic');
    const [showPreview, setShowPreview] = useState(false);

    const updateSeminarPlan = (section, data) => {
      setSeminarPlan(prev => ({
        ...prev,
        [section]: data
      }));
    };

    const tabs = [
      { id: 'basic', label: '基本情報', component: BasicInfoForm },
      { id: 'content', label: 'セミナー内容', component: ContentForm },
      { id: 'marketing', label: 'マーケティング', component: MarketingForm },
      { id: 'logistics', label: '運営・予算', component: LogisticsForm },
      { id: 'evaluation', label: '評価・改善', component: EvaluationForm }
    ];

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

    const exportToPDF = () => {
      window.print();
    };

    const exportToJSON = () => {
      const dataStr = JSON.stringify(seminarPlan, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = `seminar-plan-${new Date().toISOString().split('T')[0]}.json`;

      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    };

    return (
      <div className="container">
        <header className="header">
          <h1>BtoBセミナー企画書作成アプリ</h1>
          <p>効果的なセミナー企画書を簡単に作成できます</p>
        </header>

        {!showPreview ? (
          <>
            <div className="tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="form-section">
              {ActiveComponent && seminarPlan[activeTab] && (
                <ActiveComponent
                  data={seminarPlan[activeTab]}
                  onUpdate={(data) => updateSeminarPlan(activeTab, data)}
                />
              )}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                className="btn btn-secondary"
                onClick={() => setShowPreview(true)}
              >
                プレビューを表示
              </button>
            </div>
          </>
        ) : (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <button
                className="btn btn-secondary"
                onClick={() => setShowPreview(false)}
              >
                編集に戻る
              </button>
              <button
                className="btn"
                onClick={exportToPDF}
                style={{ marginLeft: '1rem' }}
              >
                PDF出力
              </button>
              <button
                className="btn"
                onClick={exportToJSON}
                style={{ marginLeft: '1rem' }}
              >
                JSON出力
              </button>
            </div>
            <PreviewSection seminarPlan={seminarPlan} />
          </div>
        )}
      </div>
    );
  }

  export default App;

