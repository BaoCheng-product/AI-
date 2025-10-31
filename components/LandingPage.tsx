import React, { useState } from 'react';
import { GiraffeIcon, UserIcon, WhatsAppIcon, TelegramIcon, MessageIcon, PlusIcon, PlayIcon, DietIcon, ShoppingCartIcon, ChevronLeftIcon, ChevronRightIcon, CheckIcon, ShieldIcon, StarIcon, TwitterIcon, InstagramIcon, YouTubeIcon, FacebookIcon, TiktokIcon } from './Icons';
import { View, Language } from '../types';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

interface LandingPageProps {
  onNavigate: (view: View) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, language, setLanguage }) => {
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = t.landing.coreFeatures.slides;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 overflow-x-hidden">
      <div className="bg-[#f0f7ff]">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Header */}
          <header className="py-5 flex justify-between items-center">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('landing')}>
              <GiraffeIcon className="w-10 h-10" />
              <span className="font-bold text-2xl tracking-tighter">ChatGiraffe</span>
            </div>
            <nav className="hidden lg:flex items-center space-x-8 text-gray-600 font-medium">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }} className="hover:text-gray-900 transition-colors">{t.header.home}</a>
              <a href="#articles" onClick={(e) => scrollToSection(e, 'articles')} className="hover:text-gray-900 transition-colors">{t.header.article}</a>
              <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-gray-900 transition-colors">{t.header.pricing}</a>
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-900 transition-colors">{t.header.oneAccounting}</a>
            </nav>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
              <button 
                onClick={() => onNavigate('profile')}
                className="p-2.5 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
              >
                <UserIcon className="w-5 h-5" />
              </button>
              <button onClick={() => onNavigate('chat')} className="font-semibold text-white bg-black rounded-full px-5 py-2.5 text-sm hover:bg-gray-800 transition-colors">
                {t.header.getStarted}
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <main className="pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter" dangerouslySetInnerHTML={{ __html: t.landing.title }}/>
              <p className="text-gray-500 text-lg flex items-center space-x-3">
                <span>{t.landing.subtitle}</span>
                <WhatsAppIcon className="w-6 h-6 text-green-500" />
                <TelegramIcon className="w-6 h-6 text-blue-500" />
                <MessageIcon className="w-6 h-6 text-gray-400" />
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button onClick={() => onNavigate('chat')} className="bg-black text-white font-semibold rounded-full px-8 py-4 flex items-center space-x-2 shadow-[0_0_20px_4px_rgba(192,132,252,0.3),_0_0_20px_4px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_6px_rgba(192,132,252,0.4),_0_0_30px_6px_rgba(74,222,128,0.4)] transition-shadow duration-300 w-full sm:w-auto justify-center">
                  <span>{t.landing.whatsappButton}</span>
                  <WhatsAppIcon className="w-6 h-6 text-green-400" />
                </button>
                <button onClick={() => onNavigate('chat')} className="bg-white text-black font-semibold rounded-full px-8 py-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto">
                  {t.landing.otherAppsButton}
                </button>
              </div>
            </div>
            <div className="relative flex justify-center items-center h-[600px] lg:h-auto">
              <div className="w-[300px] h-[610px] bg-black rounded-[48px] shadow-2xl p-2.5 transform scale-95 md:scale-100">
                <div className="bg-white w-full h-full rounded-[36px] p-4 flex flex-col space-y-3 overflow-hidden">
                  <div className="self-end bg-blue-500 text-white p-3.5 rounded-3xl rounded-br-lg max-w-[90%]">
                      <div className="flex items-center space-x-2">
                          <PlayIcon className="w-7 h-7 flex-shrink-0"/>
                          <svg width="150" height="24" viewBox="0 0 150 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="10" width="2" height="4" rx="1"/> <rect x="4" y="8" width="2" height="8" rx="1"/> <rect x="8" y="5" width="2" height="14" rx="1"/> <rect x="12" y="9" width="2" height="6" rx="1"/> <rect x="16" y="11" width="2" height="2" rx="1"/> <rect x="20" y="7" width="2" height="10" rx="1"/> <rect x="24" y="2" width="2" height="20" rx="1"/> <rect x="28" y="4" width="2" height="16" rx="1"/> <rect x="32" y="8" width="2" height="8" rx="1"/> <rect x="36" y="10" width="2" height="4" rx="1"/> <rect x="40" y="6" width="2" height="12" rx="1"/> <rect x="44" y="1" width="2" height="22" rx="1"/> <rect x="48" y="5" width="2" height="14" rx="1"/> <rect x="52" y="8" width="2" height="8" rx="1"/> <rect x="56" y="10" width="2" height="4" rx="1"/> <rect x="60" y="9" width="2" height="6" rx="1"/> <rect x="64" y="5" width="2" height="14" rx="1"/> <rect x="68" y="2" width="2" height="20" rx="1"/> <rect x="72" y="6" width="2" height="12" rx="1"/> <rect x="76" y="8" height="8" width="2" rx="1"/>
                            <circle cx="85" cy="12" r="2" fill="white" />
                            <rect x="91" y="11.5" width="59" height="1" fill="rgba(255,255,255,0.5)" rx="0.5"/>
                          </svg>
                      </div>
                      <p className="mt-2 text-sm leading-snug">{t.landing.mockup.voiceMessage}</p>
                  </div>
                  
                  <div className="self-start bg-gray-100 text-gray-800 py-2 px-4 rounded-3xl rounded-bl-lg max-w-[80%] text-sm">
                      {t.landing.mockup.aiResponse}
                  </div>

                  <div className="bg-white p-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-gray-50">
                    <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                      <div className="flex items-center space-x-1.5">
                        <DietIcon className="w-4 h-4 text-orange-400" />
                        <span>{t.landing.mockup.dietCategory}</span>
                      </div>
                      <span>{t.landing.mockup.time}</span>
                    </div>
                    <p className="font-medium text-lg">{t.landing.mockup.lunchItem}</p>
                    <p className="font-bold text-2xl">$120</p>
                  </div>

                  <div className="bg-white p-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-gray-50">
                    <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                      <div className="flex items-center space-x-1.5">
                        <ShoppingCartIcon className="w-4 h-4 text-blue-400" />
                        <span>{t.landing.mockup.shoppingCategory}</span>
                      </div>
                      <span>{t.landing.mockup.time}</span>
                    </div>
                    <p className="font-medium text-lg">{t.landing.mockup.shoppingItem}</p>
                    <p className="font-bold text-2xl">$300</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-8 text-center">
            {/* Use Cases */}
            <div className="bg-blue-100 text-blue-600 inline-block px-4 py-1 rounded-full text-sm font-semibold">{t.landing.useCases.tag}</div>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" dangerouslySetInnerHTML={{ __html: t.landing.useCases.title }}/>
            <p className="max-w-3xl mx-auto text-gray-500 text-lg">{t.landing.useCases.description}</p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {t.landing.useCases.cards.map((card, index) => (
                    <div key={index} className={`relative rounded-2xl overflow-hidden h-64 ${index === 1 || index === 2 ? 'col-span-1 md:col-span-1' : ''} ${index === 3 ? 'col-span-2 md:col-span-1' : ''}`}>
                      <img src={card.imageUrl} alt={card.text} className="w-full h-full object-cover"/>
                      <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg text-left text-sm font-medium">{card.text}</div>
                    </div>
                ))}
            </div>

            {/* Core Features */}
            <div className="mt-32">
              <div className="bg-blue-100 text-blue-600 inline-block px-4 py-1 rounded-full text-sm font-semibold">{t.landing.coreFeatures.tag}</div>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">{t.landing.coreFeatures.title}</h2>
              <div className="bg-gray-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden min-h-[400px]">
                  <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors"><ChevronLeftIcon className="w-6 h-6"/></button>
                  <div className="w-full md:w-1/3 mb-8 md:mb-0">
                      <img src={carouselItems[currentSlide].imageUrl} alt="Feature" className="mx-auto" />
                  </div>
                  <div className="w-full md:w-1/2 text-left">
                      <h3 className="text-3xl font-bold mb-4">{carouselItems[currentSlide].title}</h3>
                      <p className="text-gray-500 mb-6">{carouselItems[currentSlide].description}</p>
                      <button className="bg-black text-white font-semibold rounded-lg px-6 py-3">{carouselItems[currentSlide].buttonText}</button>
                  </div>
                  <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors"><ChevronRightIcon className="w-6 h-6"/></button>
              </div>
            </div>

            {/* Articles */}
            <div id="articles" className="mt-32">
                <div className="bg-blue-100 text-blue-600 inline-block px-4 py-1 rounded-full text-sm font-semibold">{t.landing.articles.tag}</div>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">{t.landing.articles.title}</h2>
                <div className="grid lg:grid-cols-2 gap-8 text-left">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
                        <img src={t.landing.articles.featured.imageUrl} alt={t.landing.articles.featured.title} className="rounded-lg mb-4 w-full h-64 object-cover" />
                        <h3 className="font-bold text-2xl mb-2">{t.landing.articles.featured.title}</h3>
                        <p className="text-gray-500 flex-grow">{t.landing.articles.featured.description}</p>
                        <p className="text-gray-400 text-sm mt-4">by {t.landing.articles.featured.author}</p>
                    </div>
                    <div className="space-y-6">
                        {t.landing.articles.list.map((article, index) => (
                          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center space-x-4">
                              <div>
                                  <h4 className="font-bold text-lg mb-1">{article.title}</h4>
                                  <p className="text-gray-500 text-sm">{article.description}</p>
                              </div>
                              <img src={article.imageUrl} alt={article.title} className="w-24 h-24 object-cover rounded-lg flex-shrink-0"/>
                          </div>
                        ))}
                    </div>
                </div>
                <button className="mt-12 bg-black text-white font-semibold rounded-full px-8 py-3">{t.landing.articles.buttonText}</button>
            </div>

            {/* Security */}
            <div className="mt-32">
                <div className="bg-blue-100 text-blue-600 inline-block px-4 py-1 rounded-full text-sm font-semibold">{t.landing.security.tag}</div>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{t.landing.security.title}</h2>
                <p className="max-w-3xl mx-auto text-gray-500 text-lg">{t.landing.security.description}</p>
                <div className="mt-12 relative w-full max-w-lg mx-auto h-80">
                  <ShieldIcon className="w-32 h-32 text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"/>
                  {t.landing.security.images.map((img, i) => (
                    <img key={i} src={img.url} alt="security" className={`w-24 h-24 object-cover rounded-2xl absolute shadow-lg ${img.position}`} />
                  ))}
                </div>
            </div>

            {/* Pricing */}
            <div id="pricing" className="mt-32">
                <div className="bg-blue-100 text-blue-600 inline-block px-4 py-1 rounded-full text-sm font-semibold">{t.landing.pricing.tag}</div>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">{t.landing.pricing.title}</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                    {t.landing.pricing.plans.map((plan, index) => (
                        <div key={index} className={`p-8 rounded-2xl border ${plan.recommended ? 'border-orange-400' : 'border-gray-200'}`}>
                            <h3 className="font-bold text-xl">{plan.name}</h3>
                            <p className="text-gray-500 mt-2">{plan.description}</p>
                            <p className="text-5xl font-bold my-6">{plan.price}<span className="text-lg font-medium text-gray-500">/month</span></p>
                            <ul className="space-y-3">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center space-x-3">
                                        <CheckIcon className={`w-5 h-5 ${plan.recommended ? 'text-orange-500' : 'text-gray-800'}`}/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full mt-8 py-3 font-semibold rounded-lg ${plan.recommended ? 'bg-orange-500 text-white' : 'bg-black text-white'}`}>{plan.buttonText}</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="mt-32">
              <div className="bg-blue-100 text-blue-600 inline-block px-4 py-1 rounded-full text-sm font-semibold">{t.landing.testimonials.tag}</div>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">{t.landing.testimonials.title}</h2>
              <div className="flex space-x-6 pb-6 overflow-x-auto">
                  {t.landing.testimonials.reviews.map((review, index) => (
                      <div key={index} className="bg-gray-100 p-6 rounded-2xl min-w-[300px] text-left">
                          <div className="flex items-center space-x-3 mb-4">
                              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full"/>
                              <div>
                                  <p className="font-semibold">{review.name}</p>
                                  <div className="flex">
                                      {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-yellow-400"/>)}
                                  </div>
                              </div>
                          </div>
                          <p className="text-gray-600 text-sm">{review.text}</p>
                      </div>
                  ))}
              </div>
            </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="bg-black text-white py-24 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.landing.finalCta.title}</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">{t.landing.finalCta.description}</p>
          <button onClick={() => onNavigate('chat')} className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full px-8 py-4 flex items-center space-x-2 mx-auto">
            <span>{t.landing.finalCta.buttonText}</span>
            <WhatsAppIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-4 sm:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <GiraffeIcon className="w-8 h-8" />
              <span className="font-bold text-xl">ChatGiraffe</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-500 mb-6 md:mb-0">
               <a href="#" className="hover:text-black"><TwitterIcon className="w-6 h-6" /></a>
               <a href="#" className="hover:text-black"><InstagramIcon className="w-6 h-6" /></a>
               <a href="#" className="hover:text-black"><YouTubeIcon className="w-6 h-6" /></a>
               <a href="#" className="hover:text-black"><FacebookIcon className="w-6 h-6" /></a>
               <a href="#" className="hover:text-black"><TiktokIcon className="w-6 h-6" /></a>
            </div>
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
          </div>
           <div className="flex justify-center md:justify-start space-x-6 mt-6 text-sm text-gray-500">
              <a href="#" className="hover:text-black">{t.footer.terms}</a>
              <a href="#" className="hover:text-black">{t.footer.privacy}</a>
          </div>
        </div>
      </footer>

      <button onClick={() => onNavigate('chat')} className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-black text-white rounded-full px-5 py-3 flex items-center space-x-2 shadow-lg hover:scale-105 transition-transform z-50">
        <PlusIcon className="w-5 h-5"/>
        <span className="font-semibold text-sm">{t.landing.fab}</span>
      </button>
    </div>
  );
}

export default LandingPage;