import React from 'react';
import LegalLayout from '../../components/LegalLayout';

const CGV = () => {
    return (
        <LegalLayout title="Conditions Générales de Vente">
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
                <span className="highlight-missing">[IMPORTANT : VÉRIFIER CETTE CLAUSE]</span><br />
                Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats :
            </p>
            <ul>
                <li>De fourniture de contenu numérique non fourni sur un support matériel dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation (ex: horoscope envoyé immédiatement).</li>
                <li>De fourniture de services pleinement exécutés avant la fin du délai de rétractation (ex: séance effectuée).</li>
            </ul>
            <p>
                Pour les autres services, le Client dispose d'un délai de 14 jours pour exercer son droit de rétractation.
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
