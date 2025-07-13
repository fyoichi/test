import React from 'react';

const MarketingForm = ({ data, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  const handleChannelChange = (channel, checked) => {
    const newChannels = checked
      ? [...data.promotionChannels, channel]
      : data.promotionChannels.filter(c => c !== channel);
    
    handleChange('promotionChannels', newChannels);
  };

  const promotionOptions = [
    '自社Webサイト',
    'メールマガジン',
    'SNS（LinkedIn, Twitter, Facebook）',
    'パートナー企業での告知',
    '業界メディア・雑誌',
    'プレスリリース',
    'ダイレクトメール',
    'テレアポ・営業活動',
    'セミナーポータルサイト',
    '既存顧客への案内'
  ];

  return (
    <div>
      <h2>マーケティング戦略</h2>
      
      <div className="form-group">
        <label>集客チャネル（複数選択可）</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem', marginTop: '0.5rem' }}>
          {promotionOptions.map(option => (
            <label key={option} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={data.promotionChannels.includes(option)}
                onChange={(e) => handleChannelChange(option, e.target.checked)}
                style={{ marginRight: '0.5rem' }}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="grid">
        <div className="form-group">
          <label>申込方法</label>
          <select
            value={data.registrationMethod}
            onChange={(e) => handleChange('registrationMethod', e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="webform">Webフォーム</option>
            <option value="email">メール</option>
            <option value="phone">電話</option>
            <option value="fax">FAX</option>
            <option value="eventbrite">Eventbrite</option>
            <option value="peatix">Peatix</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div className="form-group">
          <label>申込締切日</label>
          <input
            type="date"
            value={data.applicationDeadline}
            onChange={(e) => handleChange('applicationDeadline', e.target.value)}
          />
        </div>
      </div>

      <div className="grid">
        <div className="form-group">
          <label>参加費用（円）</label>
          <input
            type="number"
            value={data.fee}
            onChange={(e) => handleChange('fee', parseInt(e.target.value) || 0)}
            placeholder="0"
            min="0"
          />
        </div>

        <div className="form-group">
          <label>定員</label>
          <input
            type="number"
            value={data.capacity}
            onChange={(e) => handleChange('capacity', parseInt(e.target.value) || 0)}
            placeholder="100"
            min="1"
          />
        </div>
      </div>

      <div className="form-group">
        <label>フォローアップ計画</label>
        <textarea
          value={data.followUpPlan}
          onChange={(e) => handleChange('followUpPlan', e.target.value)}
          placeholder="セミナー後のフォローアップ方法を記載してください（サンキューメール、資料送付、個別面談の案内など）"
          rows="4"
        />
      </div>
    </div>
  );
};

export default MarketingForm;