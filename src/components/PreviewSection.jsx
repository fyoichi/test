import React from 'react';

const PreviewSection = ({ seminarPlan }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="preview-section" style={{ fontFamily: '"Yu Gothic", YuGothic, sans-serif', lineHeight: 1.8 }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '3px solid #667eea', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>セミナー企画書</h1>
        <h2 style={{ fontSize: '1.8rem', color: '#667eea', fontWeight: 'normal' }}>{seminarPlan.basicInfo.title}</h2>
      </div>

      {/* 基本情報 */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>基本情報</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa', width: '150px' }}>テーマ・分野</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>{seminarPlan.basicInfo.theme}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>開催日時</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>
                    {formatDate(seminarPlan.basicInfo.date)} {seminarPlan.basicInfo.time}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>所要時間</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>{seminarPlan.basicInfo.duration}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>開催形式</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>
                    {seminarPlan.basicInfo.format === 'offline' ? 'オフライン' : 
                     seminarPlan.basicInfo.format === 'online' ? 'オンライン' : 'ハイブリッド'}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>会場</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>{seminarPlan.basicInfo.venue}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>想定参加者数</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>{seminarPlan.basicInfo.expectedParticipants}名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>目的・ゴール</h3>
          <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
            {seminarPlan.basicInfo.objective}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>ターゲット参加者</h3>
          <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
            {seminarPlan.basicInfo.targetAudience}
          </div>
        </div>
      </section>

      {/* セミナー内容 */}
      <section style={{ marginBottom: '3rem', pageBreakInside: 'avoid' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>セミナー内容</h2>
        
        {/* アジェンダ */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>アジェンダ</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
            <thead>
              <tr style={{ backgroundColor: '#667eea', color: 'white' }}>
                <th style={{ padding: '1rem', textAlign: 'left', width: '120px' }}>時間</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>内容</th>
                <th style={{ padding: '1rem', textAlign: 'left', width: '150px' }}>登壇者</th>
                <th style={{ padding: '1rem', textAlign: 'left', width: '80px' }}>所要時間</th>
              </tr>
            </thead>
            <tbody>
              {seminarPlan.content.agenda.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>{item.time}</td>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.9rem', color: '#666' }}>{item.description}</div>
                  </td>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>{item.speaker}</td>
                  <td style={{ padding: '1rem', verticalAlign: 'top' }}>{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 登壇者情報 */}
        {seminarPlan.content.speakers.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>登壇者情報</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {seminarPlan.content.speakers.map((speaker, index) => (
                <div key={index} style={{ padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: '#667eea' }}>
                    {speaker.name} 
                    {speaker.title && <span style={{ fontWeight: 'normal', marginLeft: '0.5rem' }}>（{speaker.title}）</span>}
                  </h4>
                  {speaker.company && <p style={{ marginBottom: '0.5rem', color: '#666' }}>{speaker.company}</p>}
                  {speaker.expertise && <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}><strong>専門分野：</strong>{speaker.expertise}</p>}
                  {speaker.profile && <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{speaker.profile}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 配布資料 */}
        {seminarPlan.content.materials.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>配布資料・教材</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {seminarPlan.content.materials.map((material, index) => (
                <li key={index} style={{ padding: '1rem', border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '0.5rem' }}>
                  <strong>{material.title}</strong>
                  {material.type && <span style={{ marginLeft: '0.5rem', color: '#666' }}>（{material.type}）</span>}
                  {material.description && <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{material.description}</div>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* マーケティング戦略 */}
      <section style={{ marginBottom: '3rem', pageBreakInside: 'avoid' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>マーケティング戦略</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>集客チャネル</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {seminarPlan.marketing.promotionChannels.map((channel, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{channel}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa', width: '120px' }}>申込方法</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>{seminarPlan.marketing.registrationMethod}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>申込締切</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>{formatDate(seminarPlan.marketing.applicationDeadline)}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>参加費</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>{formatCurrency(seminarPlan.marketing.fee)}</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem', fontWeight: 'bold', backgroundColor: '#f8f9fa' }}>定員</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #dee2e6' }}>{seminarPlan.marketing.capacity}名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {seminarPlan.marketing.followUpPlan && (
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>フォローアップ計画</h3>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              {seminarPlan.marketing.followUpPlan}
            </div>
          </div>
        )}
      </section>

      {/* 運営・予算 */}
      <section style={{ marginBottom: '3rem', pageBreakInside: 'avoid' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>運営・予算管理</h2>
        
        {/* 必要機材 */}
        {seminarPlan.logistics.equipmentNeeds.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>必要機材・設備</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
              {seminarPlan.logistics.equipmentNeeds.map((equipment, index) => (
                <div key={index} style={{ padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '4px', border: '1px solid #dee2e6' }}>
                  {equipment}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 予算 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>予算計画</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
            <thead>
              <tr style={{ backgroundColor: '#667eea', color: 'white' }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>項目</th>
                <th style={{ padding: '1rem', textAlign: 'right' }}>金額</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '1rem' }}>会場費</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>{formatCurrency(seminarPlan.logistics.budget.venue)}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '1rem' }}>講師費用</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>{formatCurrency(seminarPlan.logistics.budget.speakers)}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '1rem' }}>資料・機材費</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>{formatCurrency(seminarPlan.logistics.budget.materials)}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '1rem' }}>宣伝・広告費</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>{formatCurrency(seminarPlan.logistics.budget.promotion)}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '1rem' }}>その他費用</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>{formatCurrency(seminarPlan.logistics.budget.other)}</td>
              </tr>
              <tr style={{ backgroundColor: '#f8f9fa', fontWeight: 'bold' }}>
                <td style={{ padding: '1rem' }}>合計</td>
                <td style={{ padding: '1rem', textAlign: 'right' }}>{formatCurrency(seminarPlan.logistics.budget.total)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* スタッフィング計画 */}
        {seminarPlan.logistics.staffingPlan && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>スタッフィング計画</h3>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              {seminarPlan.logistics.staffingPlan}
            </div>
          </div>
        )}

        {/* リスク管理 */}
        {seminarPlan.logistics.riskManagement && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>リスク管理</h3>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              {seminarPlan.logistics.riskManagement}
            </div>
          </div>
        )}

        {/* 緊急時対応計画 */}
        {seminarPlan.logistics.contingencyPlan && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>緊急時対応計画</h3>
            <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              {seminarPlan.logistics.contingencyPlan}
            </div>
          </div>
        )}
      </section>

      {/* 評価・改善計画 */}
      <section style={{ marginBottom: '3rem', pageBreakInside: 'avoid' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>評価・改善計画</h2>
        
        {/* 成功指標 */}
        {seminarPlan.evaluation.successMetrics.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>成功指標・KPI</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {seminarPlan.evaluation.successMetrics.map((metric, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{metric}</li>
              ))}
            </ul>
          </div>
        )}

        {/* アンケート質問 */}
        {seminarPlan.evaluation.surveyQuestions.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>アンケート質問項目</h3>
            <ol style={{ paddingLeft: '1.5rem' }}>
              {seminarPlan.evaluation.surveyQuestions.map((question, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{question}</li>
              ))}
            </ol>
          </div>
        )}

        {/* フォローアップアクション */}
        {seminarPlan.evaluation.followUpActions.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>フォローアップアクション</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {seminarPlan.evaluation.followUpActions.map((action, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{action}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <footer style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #dee2e6', color: '#666', fontSize: '0.9rem' }}>
        <p>作成日：{new Date().toLocaleDateString('ja-JP')}</p>
        <p>BtoBセミナー企画書作成アプリで生成</p>
      </footer>
    </div>
  );
};

export default PreviewSection;