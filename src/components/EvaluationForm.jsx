import React from 'react';

const EvaluationForm = ({ data, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  const updateArray = (field, index, value) => {
    const newArray = [...data[field]];
    newArray[index] = value;
    handleChange(field, newArray);
  };

  const addArrayItem = (field) => {
    handleChange(field, [...data[field], '']);
  };

  const removeArrayItem = (field, index) => {
    const newArray = data[field].filter((_, i) => i !== index);
    handleChange(field, newArray);
  };

  return (
    <div>
      <h2>評価・改善計画</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>成功指標・KPI</h3>
          <button className="btn" onClick={() => addArrayItem('successMetrics')}>指標追加</button>
        </div>
        
        {data.successMetrics.map((metric, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input
              type="text"
              value={metric}
              onChange={(e) => updateArray('successMetrics', index, e.target.value)}
              placeholder="例：参加者満足度4.0以上、リード獲得数50件以上"
              style={{ flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            <button
              onClick={() => removeArrayItem('successMetrics', index)}
              style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px' }}
            >
              削除
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>アンケート質問項目</h3>
          <button className="btn" onClick={() => addArrayItem('surveyQuestions')}>質問追加</button>
        </div>
        
        {data.surveyQuestions.map((question, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input
              type="text"
              value={question}
              onChange={(e) => updateArray('surveyQuestions', index, e.target.value)}
              placeholder="例：セミナーの内容は期待に応えるものでしたか？"
              style={{ flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            <button
              onClick={() => removeArrayItem('surveyQuestions', index)}
              style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px' }}
            >
              削除
            </button>
          </div>
        ))}
        
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <h4>推奨アンケート項目</h4>
          <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
            <li>セミナーの内容は期待に応えるものでしたか？（5段階評価）</li>
            <li>講師の説明は分かりやすかったですか？（5段階評価）</li>
            <li>今回のセミナーを同僚にも推薦しますか？（NPS）</li>
            <li>今後どのようなテーマのセミナーを希望しますか？（自由記述）</li>
            <li>弊社の製品・サービスについて詳しい説明を聞きたいですか？（はい/いいえ）</li>
          </ul>
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>フォローアップアクション</h3>
          <button className="btn" onClick={() => addArrayItem('followUpActions')}>アクション追加</button>
        </div>
        
        {data.followUpActions.map((action, index) => (
          <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input
              type="text"
              value={action}
              onChange={(e) => updateArray('followUpActions', index, e.target.value)}
              placeholder="例：1週間以内にサンキューメール送付、興味を示した参加者に個別面談提案"
              style={{ flex: 1, padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            <button
              onClick={() => removeArrayItem('followUpActions', index)}
              style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px' }}
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvaluationForm;