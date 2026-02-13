import React from 'react';
import LegalLayout from '../../components/LegalLayout';

const PolitiqueConfidentialite = () => {
    return (
        <LegalLayout title="Politique de Confidentialité">
            <p>
                La protection de vos données personnelles est une priorité pour Cérès.
                Cette politique de confidentialité vous explique comment nous collectons, utilisons et protégeons vos informations.
            </p>

            <h2>1. Collecte des données</h2>
            <p>
                Nous collectons les données suivantes lorsque vous utilisez notre site, notamment lors de l'inscription à l'horoscope ou de la prise de contact :
            </p>
            <ul>
                <li><strong>Identité :</strong> Nom, prénom.</li>
                <li><strong>Contact :</strong> Adresse email.</li>
                <li><strong>Informations astrologiques :</strong> Date, heure et lieu de naissance (nécessaires pour l'établissement de votre thème astral et horoscope).</li>
            </ul>

            <h2>2. Utilisation des données</h2>
            <p>
                Vos données sont utilisées pour les finalités suivantes :
            </p>
            <ul>
                <li>Envoi de votre horoscope personnalisé par email.</li>
                <li>Gestion de votre abonnement et de la relation client.</li>
                <li>Réponse à vos demandes via le formulaire de contact.</li>
                <li>Respect de nos obligations légales et réglementaires.</li>
            </ul>

            <h2>3. Partage des données</h2>
            <p>
                Vos données personnelles sont strictement confidentielles. Elles ne sont <strong>jamais vendues, louées ou cédées à des tiers</strong> à des fins commerciales.
                Elles peuvent être transmises à nos prestataires techniques (hébergement, service d'envoi d'emails) uniquement pour la bonne exécution du service.
            </p>

            <h2>4. Conservation des données</h2>
            <p>
                Nous conservons vos données uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul>
                <li><strong>Clients actifs :</strong> Pendant toute la durée de la relation commerciale.</li>
                <li><strong>Prospects :</strong> 3 ans à compter du dernier contact.</li>
                <li><strong>Données de facturation :</strong> 10 ans (obligation légale).</li>
            </ul>

            <h2>5. Vos droits</h2>
            <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données :
            </p>
            <ul>
                <li>Droit d'accès et de rectification.</li>
                <li>Droit à l'effacement (« droit à l'oubli »).</li>
                <li>Droit à la limitation du traitement.</li>
                <li>Droit d'opposition.</li>
            </ul>
            <p>
                Pour exercer ces droits, vous pouvez nous contacter à tout moment à l'adresse suivante :
                <a href="mailto:contact@ceresfrance.com"> contact@ceresfrance.com</a>.
            </p>
        </LegalLayout>
    );
};

export default PolitiqueConfidentialite;
