import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: 'auto',
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in'
            });
        }
    }, [isOpen]);

    return (
        <div style={{
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            marginBottom: '1rem',
            paddingBottom: '0.5rem'
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
                    padding: '0.5rem 0',
                    outline: 'none'
                }}
            >
                <span style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '1.2rem',
                    color: 'var(--color-text)',
                    fontWeight: 400,
                    paddingRight: '1rem'
                }}>
                    {question}
                </span>
                <span style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-bordeaux)',
                    fontWeight: 300,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0
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
                    paddingTop: '0.5rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: '#555',
                    lineHeight: 1.6,
                    paddingBottom: '1rem'
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
            category: "🔮 L'horoscope",
            questions: [
                {
                    q: "C'est quoi exactement l'horoscope Cérès ?",
                    a: "C'est un horoscope mensuel rédigé entièrement par Priscilla, basé sur tes informations de naissance (date, heure et lieu). Ce n'est pas un horoscope générique qu'on retrouve partout : chaque signe reçoit un contenu pensé et écrit avec soin, avec les points clés de ton mois, les énergies à venir et des conseils concrets pour les traverser."
                },
                {
                    q: "En quoi c'est différent d'un horoscope gratuit ?",
                    a: "Les horoscopes gratuits sont souvent générés automatiquement et identiques d'un site à l'autre. Ici, c'est Priscilla qui rédige chaque mois, avec sa lecture astrologique et son intuition. Tu reçois un vrai travail d'analyse, pas un copié-collé. C'est la différence entre lire la météo et avoir quelqu'un qui te prépare pour la journée."
                },
                {
                    q: "Quand et comment je reçois mon horoscope ?",
                    a: "Tu le reçois directement dans ta boîte mail, chaque mois. Pas besoin de te connecter quelque part ni de télécharger quoi que ce soit : il arrive chez toi, sans rien faire."
                },
                {
                    q: "Est-ce que je peux offrir un abonnement à quelqu'un ?",
                    a: "Oui ! C'est une belle idée de cadeau. Contacte directement Priscilla par email pour mettre ça en place."
                }
            ]
        },
        {
            category: "💳 Paiement et engagement",
            questions: [
                {
                    q: "Est-ce que je suis engagé·e ?",
                    a: "Non, aucun engagement. Tu peux te désabonner à tout moment, sans justification et sans frais."
                },
                {
                    q: "Comment je me désabonne ?",
                    a: "C'est simple : un seul clic depuis le lien présent dans chaque email que tu reçois, ou en envoyant un message à Priscilla. Pas de parcours du combattant."
                },
                {
                    q: "Le paiement est-il sécurisé ?",
                    a: "Oui, à 100 %. Les paiements sont traités par une plateforme certifiée et sécurisée. Tes données bancaires ne sont jamais stockées ni accessibles."
                }
            ]
        },
        {
            category: "🌿 Les accompagnements",
            questions: [
                {
                    q: "C'est quoi un soin énergétique à distance ?",
                    a: "C'est un format complet d'1h. On commence par 30 min d'échange (visio ou téléphone) pour faire le point. Ensuite, je coupe et travaille à distance pendant 30 min sur tes énergies. Tu reçois enfin un compte-rendu vocal détaillé de tout ce qui a été libéré."
                },
                {
                    q: "Comment se passe une séance de coaching intuitif ?",
                    a: "C'est un appel en visio ou par téléphone, en tête-à-tête avec Priscilla. Tu arrives avec ta question, ton blocage ou ta décision à prendre. En une séance, on pose les mots sur ce qui est flou, on éclaire la situation et tu repars aligné·e, avec une direction claire. Pas de blabla, du concret."
                },
                {
                    q: "C'est quoi \"Pose ta question\" ?",
                    a: "C'est le format idéal si tu n'es pas encore prêt·e pour une séance complète. Tu envoies une question précise à Priscilla, et elle te répond avec sa lecture astrologique et intuitive. C'est rapide, ciblé et ça te donne de la clarté sur un point précis de ta vie."
                },
                {
                    q: "Quelle est la différence entre le coaching intuitif et le soin énergétique ?",
                    a: "Le coaching intuitif, c'est un échange en direct : on parle, on creuse, on éclaire. Tu repars avec des réponses concrètes. Le soin énergétique, c'est un travail en profondeur sur ce que ton corps et ton énergie portent, souvent des choses que ta tête refuse de voir. Les deux sont complémentaires, mais l'un passe par la parole, l'autre par l'énergie."
                },
                {
                    q: "Est-ce que ça marche vraiment à distance ?",
                    a: "Oui. Priscilla accompagne des personnes à distance depuis plus de 5 ans, partout en France et au-delà. L'énergie et l'intuition ne dépendent pas de la proximité physique. Les résultats et les retours de ses clients parlent d'eux-mêmes."
                }
            ]
        },
        {
            category: "🔰 Pour les débutant·es",
            questions: [
                {
                    q: "Je n'y connais rien en astrologie, c'est pour moi quand même ?",
                    a: "Absolument. Tu n'as besoin d'aucune connaissance en astrologie. Priscilla traduit tout en langage clair et accessible. Que tu sois passionné·e ou simplement curieux·se, tout est fait pour que tu comprennes et que ça te parle."
                },
                {
                    q: "C'est de l'astrologie ou du coaching ?",
                    a: "Les deux. L'approche de Priscilla mélange l'astrologie comme outil de lecture et l'intuition comme boussole. Ce n'est ni du dogme, ni de la voyance. C'est un accompagnement humain, ancré et bienveillant, qui t'aide à y voir plus clair."
                }
            ]
        },
        {
            category: "👩 Priscilla",
            questions: [
                {
                    q: "Qui est Priscilla ?",
                    a: "Priscilla accompagne des personnes en quête de clarté depuis plus de 5 ans. Son approche mêle astrologie, intuition et coaching pour t'aider à comprendre où tu en es et où tu vas. Ce qui la distingue : elle ne te donne pas des réponses toutes faites. Elle t'aide à trouver les tiennes."
                }
            ]
        },
        {
            category: "📩 Questions pratiques",
            questions: [
                {
                    q: "Comment je contacte Priscilla ?",
                    a: "Il te suffit de cliquer sur \"Contact\" dans le menu du site. Ça ouvre directement un email prêt à envoyer. Simple, rapide."
                },
                {
                    q: "Quels sont les délais pour avoir un rendez-vous ?",
                    a: "Ça dépend de la période, mais en général tu peux obtenir un créneau sous quelques jours. Réserve directement en ligne pour voir les disponibilités."
                }
            ]
        }
    ];

    // Simple counter for unique IDs
    let globalIndex = 0;

    return (
        <section id="faq-section" style={{
            padding: '4rem 20px',
            backgroundColor: 'var(--color-blanc-nacre)',
            color: 'var(--color-text)'
        }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 className="text-center" style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    marginBottom: '5rem',
                    fontFamily: 'var(--font-editorial)',
                    color: 'var(--color-bordeaux)',
                    fontWeight: 400
                }}>
                    Avant de te lancer
                </h2>

                {faqData.map((section, sIndex) => (
                    <div key={sIndex} style={{ marginBottom: '3rem' }}>
                        {/* Section Category Title */}
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#999',
                                display: 'inline-block',
                                borderBottom: '1px solid var(--color-bordeaux)',
                                paddingBottom: '0.3rem'
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
