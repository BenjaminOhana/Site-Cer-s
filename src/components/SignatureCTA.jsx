const SignatureCTA = () => {
    return (
        <section className="signature-cta">
            <div className="signature-cta__line" />

            <div className="signature-cta__content">
                <p className="signature-cta__quote">
                    « Quand un site a une âme, ça se sent. »
                </p>

                <p className="signature-cta__credit">
                    Conçu par <strong>Benjamin Poulet — Entrepreneur Aligné</strong>
                </p>

                <a
                    href="https://entrepreneuraligne.fr"
                    target="_blank"
                    rel="noreferrer"
                    className="signature-cta__link"
                >
                    Révèle l'âme du tien →
                </a>
            </div>

            <div className="signature-cta__line" />

            <style>{`
                .signature-cta {
                    padding: 2rem 20px;
                    background-color: #FAF5F2;
                    text-align: center;
                    border-top: 1px solid rgba(169, 71, 29, 0.08);
                }

                .signature-cta__line {
                    width: 60px;
                    height: 1px;
                    background-color: var(--color-bordeaux);
                    opacity: 0.3;
                    margin: 0 auto;
                }

                .signature-cta__content {
                    padding: 1.5rem 0;
                }

                .signature-cta__quote {
                    font-family: var(--font-editorial);
                    font-style: italic;
                    font-size: 1.15rem;
                    color: var(--color-text);
                    opacity: 0.7;
                    margin-bottom: 0.6rem;
                    letter-spacing: 0.02em;
                    line-height: 1.6;
                }

                .signature-cta__credit {
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    font-weight: 300;
                    color: var(--color-text);
                    opacity: 0.7;
                    margin-bottom: 1rem;
                    letter-spacing: 0.04em;
                }

                .signature-cta__credit strong {
                    font-weight: 600;
                }

                .signature-cta__link {
                    display: inline-block;
                    font-family: var(--font-body);
                    font-size: 0.8rem;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: var(--color-bordeaux);
                    text-decoration: none;
                    padding: 0.6rem 0;
                    border-bottom: 1px solid transparent;
                    transition: border-color 0.3s ease, opacity 0.3s ease;
                    opacity: 0.85;
                }

                .signature-cta__link:hover {
                    border-bottom-color: var(--color-bordeaux);
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default SignatureCTA;
