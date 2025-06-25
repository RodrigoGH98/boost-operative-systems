import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => key
});

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.howWeWork': 'How We Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'AI Solutions Built Around',
    'hero.titleHighlight': 'Your Operations',
    'hero.description': 'From idea to implementation, we craft custom tools that automate, optimize, and unlock value across industries.',
    'hero.cta': 'Start Your Project',
    
    // Services
    'services.title': 'Strategic AI, Custom-Built for Real-World Ops',
    'services.strategy.title': 'AI Strategy & Opportunity Mapping',
    'services.strategy.description': 'Identify high-impact automation opportunities and develop comprehensive AI roadmaps tailored to your business goals.',
    'services.tools.title': 'Custom Tool & Dashboard Development',
    'services.tools.description': 'Build bespoke applications and interactive dashboards that transform complex data into actionable insights.',
    'services.optimization.title': 'Process Optimization via AI',
    'services.optimization.description': 'Streamline workflows and eliminate bottlenecks using machine learning and intelligent automation solutions.',
    'services.integration.title': 'ERP/Data Integration & Automation',
    'services.integration.description': 'Seamlessly connect disparate systems and automate data flows for enhanced operational efficiency.',
    
    // How We Work
    'howWeWork.title': 'How We Work',
    'howWeWork.diagnose.title': 'Diagnose',
    'howWeWork.diagnose.items': '• Business process audit\n• Pain point identification\n• Opportunity assessment',
    'howWeWork.design.title': 'Design',
    'howWeWork.design.items': '• Solution architecture\n• User experience mapping\n• Technical specifications',
    'howWeWork.build.title': 'Build',
    'howWeWork.build.items': '• Agile development\n• Quality assurance\n• Performance optimization',
    'howWeWork.deliver.title': 'Deliver',
    'howWeWork.deliver.items': '• Deployment & training\n• Support & maintenance\n• Performance monitoring',
    
    // About
    'about.title': 'About BOOST',
    'about.description1': 'Boost is a technology consultancy focused on transforming operations for manufacturing and logistics companies through intelligent systems. We specialize in developing custom tools powered by automation, artificial intelligence, and real-time data analytics to help businesses optimize their processes, reduce inefficiencies, and make faster, smarter decisions.',
    'about.description2': 'Our modular solutions are designed to integrate seamlessly into existing workflows, enabling better planning, clearer visibility, and measurable impact across key areas like production, warehousing, and distribution.',
    'about.description3': 'With a strong commercial focus, Boost delivers not just technology — but business value. We partner with our clients to understand their goals, build scalable tools around their needs, and ensure every solution supports growth, profitability, and long-term competitiveness in an evolving market.',
    'about.efficiency.title': 'Built for Efficiency',
    'about.efficiency.description': 'Streamlined solutions that maximize impact',
    'about.dataDriven.title': 'Data-Driven by Design',
    'about.dataDriven.description': 'Every decision backed by intelligent insights',
    'about.fastDeploy.title': 'Fast-to-Deploy Tools',
    'about.fastDeploy.description': 'Rapid implementation for immediate value',
    'about.scalable.title': 'Scalable by Nature',
    'about.scalable.description': 'Solutions that grow with your business',
    
    // Contact
    'contact.title': "Let's Build Something Intelligent",
    'contact.description': 'Ready to transform your operations with AI-powered solutions? Our team is here to understand your challenges and build custom tools that deliver real results.',
    'contact.custom.title': 'Custom Solutions',
    'contact.custom.description': 'Tailored to your specific needs',
    'contact.fast.title': 'Fast Implementation',
    'contact.fast.description': 'From idea to deployment in weeks',
    'contact.proven.title': 'Proven Results',
    'contact.proven.description': 'Real impact on your operations',
    'contact.cta': 'Tell Us About Your Need →',
    'contact.reply': "We'll reply within 24 hours with a custom roadmap",
    
    // Start Project Page
    'startProject.hero.title': 'Start Your Project with',
    'startProject.hero.titleHighlight': 'Boost',
    'startProject.hero.description': 'Custom tools powered by AI, built for manufacturing and logistics companies.',
    'startProject.hero.cta': 'Start Now →',
    'startProject.back': 'Back',
    'startProject.thankYou.title': 'Thank You!',
    'startProject.thankYou.description': "We'll get in touch within 24 hours to discuss your project.",
    'startProject.thankYou.backHome': 'Back to Home',
    'startProject.form.title': 'Tell us about your need',
    'startProject.form.companyName': 'Company Name',
    'startProject.form.companyPlaceholder': 'Your company name',
    'startProject.form.role': 'Your Role',
    'startProject.form.roleSelect': 'Select your role',
    'startProject.form.email': 'Email',
    'startProject.form.emailPlaceholder': 'your@email.com',
    'startProject.form.phone': 'WhatsApp / Phone (Optional)',
    'startProject.form.phonePlaceholder': '+1 234 567 8900',
    'startProject.form.challenge': "What's your biggest challenge today?",
    'startProject.form.otherChallenge': 'Other challenge (Optional)',
    'startProject.form.otherChallengePlaceholder': 'Describe any other challenge...',
    'startProject.form.upload': 'Upload your process document (Optional)',
    'startProject.form.uploadHint': 'Send us a flow, a photo, or a dashboard — we\'ll understand it.',
    'startProject.form.submit': 'Send My Project Brief',
    'startProject.form.submitting': 'Submitting...',
    'startProject.sidebar.title': 'What You\'ll Get',
    'startProject.sidebar.item1': 'Discovery call with our team',
    'startProject.sidebar.item2': 'Draft scope and timeline',
    'startProject.sidebar.item3': 'Access to real case studies',
    'startProject.sidebar.item4': 'A roadmap tailored to your process',
    'startProject.challenges.manual': 'Manual processes',
    'startProject.challenges.visibility': 'Lack of visibility',
    'startProject.challenges.errors': 'Errors or delays',
    'startProject.challenges.cost': 'High operating cost',
    'startProject.challenges.integration': 'Integration between systems',
    'startProject.roles.owner': 'Owner',
    'startProject.roles.director': 'Director',
    'startProject.roles.opsManager': 'Ops Manager',
    'startProject.roles.it': 'IT',
    'startProject.roles.other': 'Other',
    
    // Footer
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
    'footer.linkedin': 'LinkedIn',
    'footer.rights': 'All rights reserved.'
  },
  es: {
    // Header
    'nav.services': 'Servicios',
    'nav.howWeWork': 'Cómo Trabajamos',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Soluciones de IA Construidas Alrededor de',
    'hero.titleHighlight': 'Tus Operaciones',
    'hero.description': 'De la idea a la implementación, creamos herramientas personalizadas que automatizan, optimizan y desbloquean valor en todas las industrias.',
    'hero.cta': 'Iniciar Tu Proyecto',
    
    // Services
    'services.title': 'IA Estratégica, Construida a Medida para Operaciones del Mundo Real',
    'services.strategy.title': 'Estrategia de IA y Mapeo de Oportunidades',
    'services.strategy.description': 'Identificar oportunidades de automatización de alto impacto y desarrollar hojas de ruta de IA integrales adaptadas a tus objetivos comerciales.',
    'services.tools.title': 'Desarrollo de Herramientas y Dashboards Personalizados',
    'services.tools.description': 'Construir aplicaciones a medida y dashboards interactivos que transforman datos complejos en insights accionables.',
    'services.optimization.title': 'Optimización de Procesos vía IA',
    'services.optimization.description': 'Agilizar flujos de trabajo y eliminar cuellos de botella usando aprendizaje automático y soluciones de automatización inteligente.',
    'services.integration.title': 'Integración ERP/Datos y Automatización',
    'services.integration.description': 'Conectar sistemas dispares sin problemas y automatizar flujos de datos para mejorar la eficiencia operacional.',
    
    // How We Work
    'howWeWork.title': 'Cómo Trabajamos',
    'howWeWork.diagnose.title': 'Diagnosticar',
    'howWeWork.diagnose.items': '• Auditoría de procesos comerciales\n• Identificación de puntos de dolor\n• Evaluación de oportunidades',
    'howWeWork.design.title': 'Diseñar',
    'howWeWork.design.items': '• Arquitectura de soluciones\n• Mapeo de experiencia de usuario\n• Especificaciones técnicas',
    'howWeWork.build.title': 'Construir',
    'howWeWork.build.items': '• Desarrollo ágil\n• Aseguramiento de calidad\n• Optimización de rendimiento',
    'howWeWork.deliver.title': 'Entregar',
    'howWeWork.deliver.items': '• Implementación y capacitación\n• Soporte y mantenimiento\n• Monitoreo de rendimiento',
    
    // About
    'about.title': 'Acerca de BOOST',
    'about.description1': 'Boost es una consultoría tecnológica enfocada en transformar las operaciones de empresas de manufactura y logística a través de sistemas inteligentes. Nos especializamos en desarrollar herramientas personalizadas impulsadas por automatización, inteligencia artificial y análisis de datos en tiempo real para ayudar a las empresas a optimizar sus procesos, reducir ineficiencias y tomar decisiones más rápidas e inteligentes.',
    'about.description2': 'Nuestras soluciones modulares están diseñadas para integrarse perfectamente en los flujos de trabajo existentes, permitiendo mejor planificación, mayor visibilidad e impacto medible en áreas clave como producción, almacenamiento y distribución.',
    'about.description3': 'Con un fuerte enfoque comercial, Boost entrega no solo tecnología, sino valor comercial. Nos asociamos con nuestros clientes para entender sus objetivos, construir herramientas escalables según sus necesidades y asegurar que cada solución apoye el crecimiento, la rentabilidad y la competitividad a largo plazo en un mercado en evolución.',
    'about.efficiency.title': 'Construido para la Eficiencia',
    'about.efficiency.description': 'Soluciones optimizadas que maximizan el impacto',
    'about.dataDriven.title': 'Impulsado por Datos por Diseño',
    'about.dataDriven.description': 'Cada decisión respaldada por insights inteligentes',
    'about.fastDeploy.title': 'Herramientas de Implementación Rápida',
    'about.fastDeploy.description': 'Implementación rápida para valor inmediato',
    'about.scalable.title': 'Escalable por Naturaleza',
    'about.scalable.description': 'Soluciones que crecen con tu negocio',
    
    // Contact
    'contact.title': 'Construyamos Algo Inteligente',
    'contact.description': '¿Listo para transformar tus operaciones con soluciones impulsadas por IA? Nuestro equipo está aquí para entender tus desafíos y construir herramientas personalizadas que entreguen resultados reales.',
    'contact.custom.title': 'Soluciones Personalizadas',
    'contact.custom.description': 'Adaptadas a tus necesidades específicas',
    'contact.fast.title': 'Implementación Rápida',
    'contact.fast.description': 'De la idea al despliegue en semanas',
    'contact.proven.title': 'Resultados Comprobados',
    'contact.proven.description': 'Impacto real en tus operaciones',
    'contact.cta': 'Cuéntanos Sobre Tu Necesidad →',
    'contact.reply': 'Responderemos en 24 horas con una hoja de ruta personalizada',
    
    // Start Project Page
    'startProject.hero.title': 'Inicia Tu Proyecto con',
    'startProject.hero.titleHighlight': 'Boost',
    'startProject.hero.description': 'Herramientas personalizadas impulsadas por IA, construidas para empresas de manufactura y logística.',
    'startProject.hero.cta': 'Comenzar Ahora →',
    'startProject.back': 'Atrás',
    'startProject.thankYou.title': '¡Gracias!',
    'startProject.thankYou.description': 'Nos pondremos en contacto dentro de 24 horas para discutir tu proyecto.',
    'startProject.thankYou.backHome': 'Volver al Inicio',
    'startProject.form.title': 'Cuéntanos sobre tu necesidad',
    'startProject.form.companyName': 'Nombre de la Empresa',
    'startProject.form.companyPlaceholder': 'Nombre de tu empresa',
    'startProject.form.role': 'Tu Cargo',
    'startProject.form.roleSelect': 'Selecciona tu cargo',
    'startProject.form.email': 'Correo Electrónico',
    'startProject.form.emailPlaceholder': 'tu@correo.com',
    'startProject.form.phone': 'WhatsApp / Teléfono (Opcional)',
    'startProject.form.phonePlaceholder': '+1 234 567 8900',
    'startProject.form.challenge': '¿Cuál es tu mayor desafío hoy?',
    'startProject.form.otherChallenge': 'Otro desafío (Opcional)',
    'startProject.form.otherChallengePlaceholder': 'Describe cualquier otro desafío...',
    'startProject.form.upload': 'Sube tu documento de proceso (Opcional)',
    'startProject.form.uploadHint': 'Envíanos un flujo, una foto o un dashboard — lo entenderemos.',
    'startProject.form.submit': 'Enviar Mi Propuesta de Proyecto',
    'startProject.form.submitting': 'Enviando...',
    'startProject.sidebar.title': 'Lo Que Obtendrás',
    'startProject.sidebar.item1': 'Llamada de descubrimiento con nuestro equipo',
    'startProject.sidebar.item2': 'Borrador de alcance y cronograma',
    'startProject.sidebar.item3': 'Acceso a casos de estudio reales',
    'startProject.sidebar.item4': 'Una hoja de ruta adaptada a tu proceso',
    'startProject.challenges.manual': 'Procesos manuales',
    'startProject.challenges.visibility': 'Falta de visibilidad',
    'startProject.challenges.errors': 'Errores o retrasos',
    'startProject.challenges.cost': 'Alto costo operativo',
    'startProject.challenges.integration': 'Integración entre sistemas',
    'startProject.roles.owner': 'Propietario',
    'startProject.roles.director': 'Director',
    'startProject.roles.opsManager': 'Gerente de Operaciones',
    'startProject.roles.it': 'TI',
    'startProject.roles.other': 'Otro',
    
    // Footer
    'footer.terms': 'Términos',
    'footer.privacy': 'Privacidad',
    'footer.linkedin': 'LinkedIn',
    'footer.rights': 'Todos los derechos reservados.'
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('boost-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('boost-language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
