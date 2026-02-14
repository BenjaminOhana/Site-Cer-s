import React from 'react';
import LegalLayout from '../../components/LegalLayout';

const CGV = () => {
    return (
        <LegalLayout
            title="Conditions Générales de Vente"
            seoTitle="CGV - Conditions Générales de Vente | Cérès"
            seoDescription="Conditions Générales de Vente (CGV) de Cérès. Informations sur les services, tarifs, paiements et modalités de livraison."
            robots="index, follow"
            canonical="https://ceresfrance.com/cgv"
        >
            <h2>1. Objet</h2>
            <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong>Priscilla Owona (Cérès)</strong>
                et toute personne (le « Client ») passant commande sur le site internet Cérès.
            </p>

            <h2>2. Services proposés</h2>
            <p>
                Cérès propose les services suivants :
            </p>
            <ul>
                <li><strong>Horoscopes personnalisés :</strong> Envoi mensuel par email d'un contenu astrologique rédigé sur mesure.</li>
                <li><strong>Accompagnements :</strong> Séances de coaching intuitif et soins énergétiques à distance.</li>
            </ul>

            <h2>3. Tarifs</h2>
            <p>
                Les prix sont indiqués en euros (€) et s'entendent toutes taxes comprises (TTC).
                L'éditeur se réserve le droit de modifier ses prix à tout moment, mais les services seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
            </p>

            <h2>4. Paiement</h2>
            <p>
                Le paiement est exigible immédiatement à la commande. Le règlement s'effectue par carte bancaire via une plateforme sécurisée (Stripe) ou tout autre moyen indiqué lors du processus de commande.
            </p>

            <h2>5. Livraison</h2>
            <ul>
                <li><strong>Horoscopes :</strong> Livrés par voie électronique (email) à l'adresse indiquée par le Client.</li>
                <li><strong>Séances :</strong> Réalisées à distance (téléphone, visio) ou selon les modalités convenues lors de la réservation.</li>
            </ul>

            <h2>6. Droit de rétractation</h2>
            <p>
                Conformément aux dispositions de l'article L.221-18 du Code de la Consommation, le Client dispose en principe d'un délai de quatorze (14) jours à compter de la commande pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalité.
            </p>
            <p><strong>Exceptions légales (Article L.221-28 du Code de la Consommation) :</strong></p>
            <ul>
                <li>
                    <strong>Contenu numérique (Horoscopes) :</strong>Le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel, dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation. En validant sa commande d'horoscope, le Client accepte que l'envoi puisse être effectué immédiatement et renonce expressément à son droit de rétractation une fois le fichier reçu.
                </li>
                <li>
                    <strong>Services (Coaching / Soins) :</strong> Si le Client demande que la prestation commence avant l'expiration du délai de rétractation, il peut exercer son droit de rétractation mais restera redevable d'un montant proportionnel au service fourni jusqu'à la notification de sa rétractation. Si la séance est intégralement réalisée avant la fin du délai de 14 jours, le droit de rétractation ne peut plus être exercé.
                </li>
            </ul>
            <p>
                <strong>Exercice du droit :</strong> Pour exercer son droit de rétractation sur les services éligibles, le Client doit notifier sa décision par une déclaration dénuée d'ambiguïté à l'adresse email suivante : <a href="mailto:contact@ceresfrance.com">contact@ceresfrance.com</a>.
                Le remboursement sera effectué dans un délai de 14 jours suivant la notification.
            </p>

            <h2>7. Annulation et report</h2>
            <p>
                Pour les séances d'accompagnement, toute annulation ou demande de report doit intervenir au moins 24 heures à l'avance.
                Passé ce délai, la séance pourra être considérée comme due.
            </p>

            <h2>8. Litiges</h2>
            <p>
                Tout litige relatif à l'interprétation et à l'exécution des présentes CGV est soumis au droit français.
                À défaut de résolution amiable, le litige sera porté devant les tribunaux compétents.
            </p>

            <h2>9. Médiation de la consommation</h2>
            <p>
                Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, le client a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui l'oppose au professionnel.
                <br /><br />
                L'entité de médiation est actuellement en cours de désignation.
            </p>
        </LegalLayout>
    );
};

export default CGV;
