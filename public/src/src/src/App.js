import React, { useState } from 'react';
import { Download, User, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Check, FileText, Sparkles } from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState('landing');
  const [selectedTier, setSelectedTier] = useState(null);
  const [activeTab, setActiveTab] = useState('cv-form');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  
  const [cvData, setCvData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: [{ company: '', position: '', duration: '', description: '' }],
    education: [{ institution: '', degree: '', year: '', description: '' }],
    skills: ''
  });

  const [letterData, setLetterData] = useState({
    recipientName: '',
    companyName: '',
    position: '',
    introduction: '',
    whyCompany: '',
    whyYou: '',
    closing: ''
  });

  const pricingTiers = {
    basic: {
      name: 'Basic',
      price: 29,
      features: [
        'Choose from 3 clean templates',
        'Professional CV format',
        'Instant PDF download',
        'Perfect for entry-level positions'
      ],
      templates: ['modern', 'professional', 'minimal'],
      popular: false
    },
    professional: {
      name: 'Professional',
      price: 59,
      features: [
        'Choose from 6 premium templates',
        'Professional CV format',
        'Motivational Letter template included',
        'Instant PDF download',
        'Stand out from the crowd'
      ],
      templates: ['modern', 'professional', 'minimal', 'creative', 'executive', 'elegant'],
      popular: true
    },
    premium: {
      name: 'Premium',
      price: 99,
      features: [
        'ALL 10+ premium templates',
        'Professional CV format',
        'Motivational Letter template included',
        'Interview Tips Guide (PDF)',
        'Instant downloads',
        'Best value for serious job seekers'
      ],
      templates: ['modern', 'professional', 'minimal', 'creative', 'executive', 'elegant', 'bold', 'corporate', 'tech', 'artistic'],
      popular: false
    }
  };

  const templates = {
    modern: { name: 'Modern', headerBg: 'bg-gradient-to-r from-blue-600 to-blue-800', bgColor: 'bg-white', textColor: 'text-gray-800', accentColor: 'text-blue-600' },
    professional: { name: 'Professional', headerBg: 'bg-gray-800', bgColor: 'bg-gray-50', textColor: 'text-gray-900', accentColor: 'text-gray-700' },
    minimal: { name: 'Minimal', headerBg: 'bg-gray-900', bgColor: 'bg-white', textColor: 'text-gray-800', accentColor: 'text-gray-900' },
    creative: { name: 'Creative', headerBg: 'bg-gradient-to-r from-purple-600 to-pink-600', bgColor: 'bg-white', textColor: 'text-gray-800', accentColor: 'text-purple-600' },
    executive: { name: 'Executive', headerBg: 'bg-gradient-to-r from-slate-700 to-slate-900', bgColor: 'bg-slate-50', textColor: 'text-gray-900', accentColor: 'text-slate-700' },
    elegant: { name: 'Elegant', headerBg: 'bg-gradient-to-r from-emerald-600 to-teal-600', bgColor: 'bg-white', textColor: 'text-gray-800', accentColor: 'text-emerald-600' },
    bold: { name: 'Bold', headerBg: 'bg-gradient-to-r from-orange-600 to-red-600', bgColor: 'bg-white', textColor: 'text-gray-800', accentColor: 'text-orange-600' },
    corporate: { name: 'Corporate', headerBg: 'bg-gradient-to-r from-indigo-700 to-blue-700', bgColor: 'bg-gray-50', textColor: 'text-gray-900', accentColor: 'text-indigo-700' },
    tech: { name: 'Tech', headerBg: 'bg-gradient-to-r from-cyan-600 to-blue-600', bgColor: 'bg-white', textColor: 'text-gray-800', accentColor: 'text-cyan-600' },
    artistic: { name: 'Artistic', headerBg: 'bg-gradient-to-r from-pink-500 to-purple-500', bgColor: 'bg-white', textColor: 'text-gray-800', accentColor: 'text-pink-600' }
  };

  const handleCvChange = (e) => {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
  };

  const handleLetterChange = (e) => {
    setLetterData({ ...letterData, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...cvData.experience];
    newExperience[index][field] = value;
    setCvData({ ...cvData, experience: newExperience });
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...cvData.education];
    newEducation[index][field] = value;
    setCvData({ ...cvData, education: newEducation });
  };

  const addExperience = () => {
    setCvData({ ...cvData, experience: [...cvData.experience, { company: '', position: '', duration: '', description: '' }] });
  };

  const addEducation = () => {
    setCvData({ ...cvData, education: [...cvData.education, { institution: '', degree: '', year: '', description: '' }] });
  };

  const removeExperience = (index) => {
    setCvData({ ...cvData, experience: cvData.experience.filter((_, i) => i !== index) });
  };

  const removeEducation = (index) => {
    setCvData({ ...cvData, education: cvData.education.filter((_, i) => i !== index) });
  };

  const selectTier = (tier) => {
    setSelectedTier(tier);
    setCurrentStep('builder');
  };

  const handlePayment = () => {
    alert('Payment Integration Coming Soon!\n\nYou selected: ' + pricingTiers[selectedTier].name + ' Package\nPrice: R' + pricingTiers[selectedTier].price + '\n\nIn the full version:\n- PayFast payment gateway will process your payment\n- CV will be generated as PDF\n- Email sent to: ' + cvData.email);
  };

  const currentTemplate = templates[selectedTemplate];
  const availableTemplates = selectedTier ? pricingTiers[selectedTier].templates : [];

  if (currentStep === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center text-white mb-16 pt-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-5xl md:text-6xl font-bold">MyProCv</h1>
            </div>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">Your Professional CV in Minutes</p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Stand out from the crowd with a professionally designed CV. Perfect for matriculants, students, and job seekers across South Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {Object.entries(pricingTiers).map(([key, tier]) => (
              <div
                key={key}
                className={'bg-white rounded-2xl shadow-2xl overflow-hidden transform transition hover:scale-105 ' + (tier.popular ? 'ring-4 ring-yellow-400' : '')}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-center py-2 font-bold text-gray-900">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">R{tier.price}</span>
                    <span className="text-gray-600"> once-off</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => selectTier(key)}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-white">
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
                <span>SA Designed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MyProCv Builder</h1>
              <p className="text-sm text-gray-600">
                {pricingTiers[selectedTier].name} Package - R{pricingTiers[selectedTier].price}
              </p>
            </div>
            <button
              onClick={() => setCurrentStep('landing')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              ← Change Package
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('cv-form')}
            className={'px-6 py-3 rounded-lg font-medium whitespace-nowrap transition ' + (activeTab === 'cv-form' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100')}
          >
            1. CV Details
          </button>
          {['professional', 'premium'].includes(selectedTier) && (
            <button
              onClick={() => setActiveTab('letter-form')}
              className={'px-6 py-3 rounded-lg font-medium whitespace-nowrap transition ' + (activeTab === 'letter-form' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100')}
            >
              2. Cover Letter
            </button>
          )}
          <button
            onClick={() => setActiveTab('template')}
            className={'px-6 py-3 rounded-lg font-medium whitespace-nowrap transition ' + (activeTab === 'template' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100')}
          >
            {['professional', 'premium'].includes(selectedTier) ? '3' : '2'}. Choose Template
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={'px-6 py-3 rounded-lg font-medium whitespace-nowrap transition ' + (activeTab === 'preview' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100')}
          >
            {['professional', 'premium'].includes(selectedTier) ? '4' : '3'}. Preview
          </button>
        </div>

        {activeTab === 'cv-form' && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <User className="w-6 h-6" /> Personal Information
            </h2>
            
            <div className="space-y-4 mb-8">
              <input type="text" name="fullName" placeholder="Full Name" value={cvData.fullName} onChange={handleCvChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="Email" value={cvData.email} onChange={handleCvChange} className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <input type="tel" name="phone" placeholder="Phone" value={cvData.phone} onChange={handleCvChange} className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <input type="text" name="location" placeholder="Location" value={cvData.location} onChange={handleCvChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <textarea name="summary" placeholder="Professional Summary" value={cvData.summary} onChange={handleCvChange} rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Briefcase className="w-6 h-6" /> Work Experience</h2>
            {cvData.experience.map((exp, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-3">
                  <input type="text" placeholder="Company" value={exp.company} onChange={(e) => handleExperienceChange(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input type="text" placeholder="Position" value={exp.position} onChange={(e) => handleExperienceChange(index, 'position', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg" />
                    <input type="text" placeholder="Duration" value={exp.duration} onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <textarea placeholder="Description" value={exp.description} onChange={(e) => handleExperienceChange(index, 'description', e.target.value)} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                  {cvData.experience.length > 1 && <button onClick={() => removeExperience(index)} className="text-red-600 text-sm">Remove</button>}
                </div>
              </div>
            ))}
            <button onClick={addExperience} className="mb-8 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">+ Add Experience</button>

            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><GraduationCap className="w-6 h-6" /> Education</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-3">
                  <input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleEducationChange(index, 'institution', e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleEducationChange(index, 'degree', e.target.value)} className="px-4 py-2 border rounded-lg" />
                    <input type="text" placeholder="Year" value={edu.year} onChange={(e) => handleEducationChange(index, 'year', e.target.value)} className="px-4 py-2 border rounded-lg" />
                  </div>
                  <textarea placeholder="Details" value={edu.description} onChange={(e) => handleEducationChange(index, 'description', e.target.value)} rows="2" className="w-full px-4 py-2 border rounded-lg" />
                  {cvData.education.length > 1 && <button onClick={() => removeEducation(index)} className="text-red-600 text-sm">Remove</button>}
                </div>
              </div>
            ))}
            <button onClick={addEducation} className="mb-8 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">+ Add Education</button>

            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6" /> Skills</h2>
            <textarea name="skills" placeholder="Your skills" value={cvData.skills} onChange={handleCvChange} rows="3" className="w-full px-4 py-3 border rounded-lg mb-6" />

            <button onClick={() => setActiveTab(['professional', 'premium'].includes(selectedTier) ? 'letter-form' : 'template')} className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold">Next →</button>
          </div>
        )}

        {activeTab === 'letter-form' && ['professional', 'premium'].includes(selectedTier) && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><FileText className="w-6 h-6" /> Motivational Letter</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="recipientName" placeholder="Recipient" value={letterData.recipientName} onChange={handleLetterChange} className="px-4 py-3 border rounded-lg" />
                <input type="text" name="companyName" placeholder="Company" value={letterData.companyName} onChange={handleLetterChange} className="px-4 py-3 border rounded-lg" />
              </div>
              <input type="text" name="position" placeholder="Position" value={letterData.position} onChange={handleLetterChange} className="w-full px-4 py-3 border rounded-lg" />
              <textarea name="introduction" placeholder="Introduction" value={letterData.introduction} onChange={handleLetterChange} rows="3" className="w-full px-4 py-3 border rounded-lg" />
              <textarea name="whyCompany" placeholder="Why this company?" value={letterData.whyCompany} onChange={handleLetterChange} rows="3" className="w-full px-4 py-3 border rounded-lg" />
              <textarea name="whyYou" placeholder="Why you?" value={letterData.whyYou} onChange={handleLetterChange} rows="4" className="w-full px-4 py-3 border rounded-lg" />
              <textarea name="closing" placeholder="Closing" value={letterData.closing} onChange={handleLetterChange} rows="2" className="w-full px-4 py-3 border rounded-lg" />
            </div>
            <div className="flex gap-4 mt-6">
              <button onClick={() => setActiveTab('cv-form')} className="flex-1 py-4 bg-gray-200 rounded-lg font-bold">← Back</button>
              <button onClick={() => setActiveTab('template')} className="flex-1 py-4 bg-blue-600 text-white rounded-lg font-bold">Next →</button>
            </div>
          </div>
        )}

        {activeTab === 'template' && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Choose Template</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {availableTemplates.map((key) => (
                <div key={key} onClick={() => setSelectedTemplate(key)} className={'cursor-pointer rounded-lg border-4 ' + (selectedTemplate === key ? 'border-blue-600' : 'border-gray-200')}>
                  <div className={templates[key].headerBg + ' p-3 text-white text-center text-sm font-bold'}>{templates[key].name}</div>
                  <div className="p-3 h-24 bg-gray-50"></div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => setActiveTab(['professional', 'premium'].includes(selectedTier) ? 'letter-form' : 'cv-form')} className="flex-1 py-4 bg-gray-200 rounded-lg font-bold">← Back</button>
              <button onClick={() => setActiveTab('preview')} className="flex-1 py-4 bg-blue-600 text-white rounded-lg font-bold">Preview →</button>
            </div>
          </div>
        )}

        {activeTab === 'preview' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-center">Your CV</h3>
              <div className={currentTemplate.bgColor + ' p-8 border-2 rounded-lg'}>
                <div className={currentTemplate.headerBg + ' text-white p-6 rounded-lg mb-6'}>
                  <h1 className="text-3xl font-bold mb-2">{cvData.fullName || 'Your Name'}</h1>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {cvData.email && <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {cvData.email}</span>}
                    {cvData.phone && <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {cvData.phone}</span>}
                    {cvData.location && <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {cvData.location}</span>}
                  </div>
                </div>
                {cvData.summary && <div className="mb-6"><h2 className={currentTemplate.accentColor + ' text-xl font-bold mb-2'}>Summary</h2><p>{cvData.summary}</p></div>}
                {cvData.experience[0].company && <div className="mb-6"><h2 className={currentTemplate.accentColor + ' text-xl font-bold mb-3'}>Experience</h2>{cvData.experience.map((exp, i) => exp.company && <div key={i} className="mb-4"><h3 className="font-bold">{exp.position}</h3><p>{exp.company} - {exp.duration}</p><p className="text-sm">{exp.description}</p></div>)}</div>}
                {cvData.education[0].institution && <div className="mb-6"><h2 className={currentTemplate.accentColor + ' text-xl font-bold mb-3'}>Education</h2>{cvData.education.map((edu, i) => edu.institution && <div key={i} className="mb-4"><h3 className="font-bold">{edu.degree}</h3><p>{edu.institution} - {edu.year}</p></div>)}</div>}
                {cvData.skills && <div><h2 className={currentTemplate.accentColor + ' text-xl font-bold mb-2'}>Skills</h2><p>{cvData.skills}</p></div>}
              </div>
            </div>

            {['professional', 'premium'].includes(selectedTier) && letterData.companyName && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-center">Your Cover Letter</h3>
                <div className="p-8 border-2 rounded-lg space-y-4">
                  <div><p className="text-sm">{cvData.fullName}</p><p className="text-sm">{cvData.email}</p></div>
                  <div><p className="font-medium">{letterData.companyName}</p><p className="font-bold">Re: {letterData.position}</p></div>
                  {letterData.introduction && <p>{letterData.introduction}</p>}
                  {letterData.whyCompany && <p>{letterData.whyCompany}</p>}
                  {letterData.whyYou && <p>{letterData.whyYou}</p>}
                  {letterData.closing && <p>{letterData.closing}</p>}
                  <p>Sincerely,<br/>{cvData.fullName}</p>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2">Ready to Download?</h3>
                <p className="text-gray-600">R{pricingTiers[selectedTier].price}</p>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setActiveTab('template')} className="flex-1 py-4 bg-gray-200 rounded-lg font-bold">← Edit</button>
                <button onClick={handlePayment} className="flex-1 py-4 bg-green-600 text-white rounded-lg font-bold flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />Pay R{pricingTiers[selectedTier].price}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
