import React from 'react';

const LogisticsForm = ({ data, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  const handleBudgetChange = (field, value) => {
    const newBudget = {
      ...data.budget,
      [field]: parseInt(value) || 0
    };
    
    // 合計を自動計算
    newBudget.total = newBudget.venue + newBudget.speakers + newBudget.materials + newBudget.promotion + newBudget.other;
    
    onUpdate({
      ...data,
      budget: newBudget
    });
  };

  const handleEquipmentChange = (equipment, checked) => {
    const newEquipment = checked
      ? [...data.equipmentNeeds, equipment]
      : data.equipmentNeeds.filter(e => e !== equipment);
    
    handleChange('equipmentNeeds', newEquipment);
  };

  const equipmentOptions = [
    'プロジェクター',
    'スクリーン',
    'マイク（ワイヤレス）',
    'マイク（ピンマイク）',
    'スピーカー',
    'PC・ノートパソコン',
    'レーザーポインター',
    'ホワイトボード',
    'フリップチャート',
    'カメラ（録画用）',
    '照明機器',
    '受付用テーブル',
    '椅子・テーブル',
    'Wi-Fi環境',
    '電源・延長コード'
  ];

  return (
    <div>
      <h2>運営・予算管理</h2>
      
      <div className="form-group">
        <label>必要機材・設備（複数選択可）</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginTop: '0.5rem' }}>
          {equipmentOptions.map(option => (
            <label key={option} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={data.equipmentNeeds.includes(option)}
                onChange={(e) => handleEquipmentChange(option, e.target.checked)}
                style={{ marginRight: '0.5rem' }}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>スタッフィング計画</label>
        <textarea
          value={data.staffingPlan}
          onChange={(e) => handleChange('staffingPlan', e.target.value)}
          placeholder="必要なスタッフ数と役割分担を記載してください（受付：2名、進行：1名、技術サポート：1名など）"
          rows="4"
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>予算計画</h3>
        <div className="grid">
          <div className="form-group">
            <label>会場費（円）</label>
            <input
              type="number"
              value={data.budget.venue}
              onChange={(e) => handleBudgetChange('venue', e.target.value)}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>講師費用（円）</label>
            <input
              type="number"
              value={data.budget.speakers}
              onChange={(e) => handleBudgetChange('speakers', e.target.value)}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>資料・機材費（円）</label>
            <input
              type="number"
              value={data.budget.materials}
              onChange={(e) => handleBudgetChange('materials', e.target.value)}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>宣伝・広告費（円）</label>
            <input
              type="number"
              value={data.budget.promotion}
              onChange={(e) => handleBudgetChange('promotion', e.target.value)}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>その他費用（円）</label>
            <input
              type="number"
              value={data.budget.other}
              onChange={(e) => handleBudgetChange('other', e.target.value)}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>予算合計（円）</label>
            <input
              type="number"
              value={data.budget.total}
              readOnly
              style={{ backgroundColor: '#f8f9fa', fontWeight: 'bold' }}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>リスク管理</label>
        <textarea
          value={data.riskManagement}
          onChange={(e) => handleChange('riskManagement', e.target.value)}
          placeholder="想定されるリスクとその対策を記載してください（天候、機材トラブル、講師の急な変更など）"
          rows="4"
        />
      </div>

      <div className="form-group">
        <label>緊急時対応計画</label>
        <textarea
          value={data.contingencyPlan}
          onChange={(e) => handleChange('contingencyPlan', e.target.value)}
          placeholder="緊急事態が発生した場合の対応手順を記載してください"
          rows="4"
        />
      </div>
    </div>
  );
};

export default LogisticsForm;