import React from 'react';

const ContentForm = ({ data, onUpdate }) => {
  const updateAgenda = (index, field, value) => {
    const newAgenda = [...data.agenda];
    newAgenda[index] = { ...newAgenda[index], [field]: value };
    onUpdate({ ...data, agenda: newAgenda });
  };

  const addAgendaItem = () => {
    onUpdate({
      ...data,
      agenda: [...data.agenda, { time: '', title: '', speaker: '', duration: '', description: '' }]
    });
  };

  const removeAgendaItem = (index) => {
    onUpdate({
      ...data,
      agenda: data.agenda.filter((_, i) => i !== index)
    });
  };

  const updateSpeaker = (index, field, value) => {
    const newSpeakers = [...data.speakers];
    newSpeakers[index] = { ...newSpeakers[index], [field]: value };
    onUpdate({ ...data, speakers: newSpeakers });
  };

  const addSpeaker = () => {
    onUpdate({
      ...data,
      speakers: [...data.speakers, { name: '', title: '', company: '', profile: '', expertise: '' }]
    });
  };

  const removeSpeaker = (index) => {
    onUpdate({
      ...data,
      speakers: data.speakers.filter((_, i) => i !== index)
    });
  };

  const updateMaterial = (index, field, value) => {
    const newMaterials = [...data.materials];
    newMaterials[index] = { ...newMaterials[index], [field]: value };
    onUpdate({ ...data, materials: newMaterials });
  };

  const addMaterial = () => {
    onUpdate({
      ...data,
      materials: [...data.materials, { type: '', title: '', description: '' }]
    });
  };

  const removeMaterial = (index) => {
    onUpdate({
      ...data,
      materials: data.materials.filter((_, i) => i !== index)
    });
  };

  return (
    <div>
      <h2>セミナー内容</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>アジェンダ</h3>
          <button className="btn" onClick={addAgendaItem}>項目追加</button>
        </div>
        
        {data.agenda.map((item, index) => (
          <div key={index} className="agenda-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4>項目 {index + 1}</h4>
              <button
                onClick={() => removeAgendaItem(index)}
                style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px' }}
              >
                削除
              </button>
            </div>
            
            <div className="grid">
              <div className="form-group">
                <label>時間</label>
                <input
                  type="text"
                  value={item.time}
                  onChange={(e) => updateAgenda(index, 'time', e.target.value)}
                  placeholder="14:00-14:30"
                />
              </div>
              <div className="form-group">
                <label>所要時間</label>
                <input
                  type="text"
                  value={item.duration}
                  onChange={(e) => updateAgenda(index, 'duration', e.target.value)}
                  placeholder="30分"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>タイトル</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateAgenda(index, 'title', e.target.value)}
                placeholder="セッションのタイトル"
              />
            </div>
            
            <div className="form-group">
              <label>登壇者</label>
              <input
                type="text"
                value={item.speaker}
                onChange={(e) => updateAgenda(index, 'speaker', e.target.value)}
                placeholder="登壇者名"
              />
            </div>
            
            <div className="form-group">
              <label>内容説明</label>
              <textarea
                value={item.description}
                onChange={(e) => updateAgenda(index, 'description', e.target.value)}
                placeholder="このセッションで話す内容の詳細"
                rows="3"
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>登壇者情報</h3>
          <button className="btn" onClick={addSpeaker}>登壇者追加</button>
        </div>
        
        {data.speakers.map((speaker, index) => (
          <div key={index} className="agenda-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4>登壇者 {index + 1}</h4>
              <button
                onClick={() => removeSpeaker(index)}
                style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px' }}
              >
                削除
              </button>
            </div>
            
            <div className="grid">
              <div className="form-group">
                <label>氏名</label>
                <input
                  type="text"
                  value={speaker.name}
                  onChange={(e) => updateSpeaker(index, 'name', e.target.value)}
                  placeholder="山田太郎"
                />
              </div>
              <div className="form-group">
                <label>役職</label>
                <input
                  type="text"
                  value={speaker.title}
                  onChange={(e) => updateSpeaker(index, 'title', e.target.value)}
                  placeholder="代表取締役"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>会社・所属</label>
              <input
                type="text"
                value={speaker.company}
                onChange={(e) => updateSpeaker(index, 'company', e.target.value)}
                placeholder="株式会社サンプル"
              />
            </div>
            
            <div className="form-group">
              <label>プロフィール</label>
              <textarea
                value={speaker.profile}
                onChange={(e) => updateSpeaker(index, 'profile', e.target.value)}
                placeholder="経歴や実績など"
                rows="3"
              />
            </div>
            
            <div className="form-group">
              <label>専門分野</label>
              <input
                type="text"
                value={speaker.expertise}
                onChange={(e) => updateSpeaker(index, 'expertise', e.target.value)}
                placeholder="デジタルマーケティング、営業戦略"
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>配布資料・教材</h3>
          <button className="btn" onClick={addMaterial}>資料追加</button>
        </div>
        
        {data.materials.map((material, index) => (
          <div key={index} className="agenda-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4>資料 {index + 1}</h4>
              <button
                onClick={() => removeMaterial(index)}
                style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '4px' }}
              >
                削除
              </button>
            </div>
            
            <div className="grid">
              <div className="form-group">
                <label>種類</label>
                <select
                  value={material.type}
                  onChange={(e) => updateMaterial(index, 'type', e.target.value)}
                >
                  <option value="">選択してください</option>
                  <option value="presentation">プレゼンテーション資料</option>
                  <option value="handout">配布資料</option>
                  <option value="workbook">ワークブック</option>
                  <option value="template">テンプレート</option>
                  <option value="checklist">チェックリスト</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div className="form-group">
                <label>タイトル</label>
                <input
                  type="text"
                  value={material.title}
                  onChange={(e) => updateMaterial(index, 'title', e.target.value)}
                  placeholder="資料のタイトル"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>説明</label>
              <textarea
                value={material.description}
                onChange={(e) => updateMaterial(index, 'description', e.target.value)}
                placeholder="資料の内容や使用目的"
                rows="2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentForm;