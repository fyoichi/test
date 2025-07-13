import React from 'react';

const BasicInfoForm = ({ data, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  return (
    <div>
      <h2>基本情報</h2>
      
      <div className="grid">
        <div className="form-group">
          <label>セミナータイトル *</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="例：新規顧客獲得のためのデジタルマーケティング戦略"
          />
        </div>

        <div className="form-group">
          <label>テーマ・分野 *</label>
          <input
            type="text"
            value={data.theme}
            onChange={(e) => handleChange('theme', e.target.value)}
            placeholder="例：デジタルマーケティング、営業戦略"
          />
        </div>
      </div>

      <div className="form-group">
        <label>セミナーの目的・ゴール *</label>
        <textarea
          value={data.objective}
          onChange={(e) => handleChange('objective', e.target.value)}
          placeholder="このセミナーで達成したい具体的な目標を記載してください"
          rows="3"
        />
      </div>

      <div className="form-group">
        <label>ターゲット参加者 *</label>
        <textarea
          value={data.targetAudience}
          onChange={(e) => handleChange('targetAudience', e.target.value)}
          placeholder="例：中小企業の経営者、マーケティング担当者（勤続年数3年以上）"
          rows="3"
        />
      </div>

      <div className="grid">
        <div className="form-group">
          <label>想定参加者数</label>
          <input
            type="number"
            value={data.expectedParticipants}
            onChange={(e) => handleChange('expectedParticipants', parseInt(e.target.value) || 0)}
            placeholder="50"
            min="1"
          />
        </div>

        <div className="form-group">
          <label>開催形式</label>
          <select
            value={data.format}
            onChange={(e) => handleChange('format', e.target.value)}
          >
            <option value="offline">オフライン</option>
            <option value="online">オンライン</option>
            <option value="hybrid">ハイブリッド</option>
          </select>
        </div>
      </div>

      <div className="grid">
        <div className="form-group">
          <label>開催日</label>
          <input
            type="date"
            value={data.date}
            onChange={(e) => handleChange('date', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>開催時間</label>
          <input
            type="time"
            value={data.time}
            onChange={(e) => handleChange('time', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>所要時間</label>
          <input
            type="text"
            value={data.duration}
            onChange={(e) => handleChange('duration', e.target.value)}
            placeholder="例：2時間"
          />
        </div>
      </div>

      <div className="form-group">
        <label>開催場所・会場</label>
        <input
          type="text"
          value={data.venue}
          onChange={(e) => handleChange('venue', e.target.value)}
          placeholder="例：東京国際フォーラム ホールA"
        />
      </div>
    </div>
  );
};

export default BasicInfoForm;