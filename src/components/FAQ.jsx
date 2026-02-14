import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: 'auto',
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out'
            });
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in'
            });
        }
    }, [isOpen]);

    return (
        <div style={{
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
        }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem 0',
                    outline: 'none'
                }}
            >
                <span style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '1.5rem',
                    color: 'var(--color-text)',
                    fontWeight: 400,
                    paddingRight: '2rem',
                    lineHeight: 1.2
                }}>
                    {question}
                </span>
                <span style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-bordeaux)',
                    fontWeight: 300,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px'
                }}>
                    +
                </span>
            </button>
            <div
                ref={contentRef}
                style={{
                    height: 0,
                    opacity: 0,
                    overflow: 'hidden'
                }}
            >
                <div style={{
                    paddingBottom: '2rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: '#444',
                    lineHeight: 1.7,
                    maxWidth: '95%'
                }}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            category: "L'horoscope",
            questions: [
                {
                    q: "C'est quoi exactement l'horoscope Cérès ?",
                    a: "C'est un horoscope mensuel rédigé entièrement par Priscilla, basé sur tes informations de naissance (date, heure et lieu). Ce n'est pas un horoscope générique qu'on retrouve partout : en fonction de ton ascendant, tu reçois un contenu pensé et écrit avec soin, avec les points clés de ton mois, les énergies à venir et des conseils concrets pour les traverser."
                },
                {
                    q: "En quoi c'est différent d'un horoscope gratuit ?",
                    a: "Les horoscopes gratuits sont souvent générés automatiquement et identiques d'un site à l'autre. Ici, c'est Priscilla qui rédige chaque mois, avec sa lecture astrologique et son intuition. Tu reçois un vrai travail d'analyse, pas un copié-collé."
                }
            ]
        },
        {
            category: "Paiement et désabonnement",
            questions: [
                {
                    q: "Est-ce que je suis engagé·e ?",
                    a: "Non, aucun engagement. Tu peux te désabonner à tout moment et en un seul clic depuis chaque email reçu. C'est simple, transparent et sans frais."
                }
            ]
        },
        {
            category: "Les accompagnements",
            questions: [
                {
                    q: "C'est quoi un soin énergétique à distance ?",
                    a: "C'est un format complet d'1h. On commence par 30 min d'échange (visio ou téléphone) pour faire le point. Ensuite, je coupe et travaille à distance pendant 30 min sur tes énergies. Tu reçois enfin un compte-rendu vocal détaillé de tout ce qui a été libéré."
                },
                {
                    q: "Comment se passe une séance de coaching intuitif ?",
                    a: "C'est un appel en visio ou par téléphone, en tête-à-tête avec Priscilla. Tu arrives avec ta question, ton blocage ou ta décision à prendre. En une séance, on pose les mots sur ce qui est flou, on éclaire la situation et tu repars aligné·e, avec une direction claire. Pas de blabla, du concret."
                }
            ]
        },
        {
            category: "Pour les débutant·es",
            questions: [
                {
                    q: "Je n'y connais rien en astrologie, c'est pour moi quand même ?",
                    a: "Absolument. Tu n'as besoin d'aucune connaissance en astrologie. Priscilla traduit tout en langage clair et accessible. Que tu sois passionné·e ou simplement curieux·se, tout est fait pour que tu comprennes et que ça te parle."
                }
            ]
        }
    ];

    // Simple counter for unique IDs
    let globalIndex = 0;

    return (
        <section id="faq-section" style={{
            padding: '6rem 20px',
            backgroundColor: 'var(--color-blanc-nacre)',
            color: 'var(--color-text)'
        }}>
            <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
                <h2 className="text-center" style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    marginBottom: '4rem',
                    fontFamily: 'var(--font-editorial)',
                    color: 'var(--color-bordeaux)',
                    fontWeight: 400
                }}>
                    Questions fréquentes
                </h2>

                {faqData.map((section, sIndex) => (
                    <div key={sIndex} style={{ marginBottom: '3rem' }}>
                        {/* Section Category Title */}
                        <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
                            <h3 style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#999',
                                display: 'inline-block',
                                paddingBottom: '0.1rem' // Adjusted for alignment
                            }}>
                                {section.category}
                            </h3>
                        </div>

                        <div>
                            {section.questions.map((item, qIndex) => {
                                const currentIndex = globalIndex++;
                                return (
                                    <FAQItem
                                        key={currentIndex}
                                        question={item.q}
                                        answer={item.a}
                                        isOpen={openIndex === currentIndex}
                                        onClick={() => toggleAccordion(currentIndex)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default FAQ;
