export const SeminarPlanTemplate = {
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
    agenda: [
      {
        time: '',
        title: '',
        speaker: '',
        duration: '',
        description: ''
      }
    ],
    speakers: [
      {
        name: '',
        title: '',
        company: '',
        profile: '',
        expertise: ''
      }
    ],
    materials: [
      {
        type: '',
        title: '',
        description: ''
      }
    ]
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
    budget: {
      venue: 0,
      speakers: 0,
      materials: 0,
      promotion: 0,
      other: 0,
      total: 0
    },
    riskManagement: '',
    contingencyPlan: ''
  },
  evaluation: {
    successMetrics: [],
    surveyQuestions: [],
    followUpActions: []
  }
};

export const DefaultSeminarPlan = () => JSON.parse(JSON.stringify(SeminarPlanTemplate));