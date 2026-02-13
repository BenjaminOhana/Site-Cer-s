import React from 'react';
import LegalLayout from '../../components/LegalLayout';

const MentionsLegales = () => {
    return (
        <LegalLayout title="Mentions Légales">
            <h2>1. Éditeur du site</h2>
            <p>
                Le site <strong>Cérès</strong> est édité par :<br />
                <strong>Priscilla Owona</strong><br />
                Adresse : 3 rue Sainte-Geneviève, 27200 Vernon<br />
                Téléphone : +33 6 50 91 66 64<br />
                SIRET : 900 367 061 00018<br />
                TVA non applicable, ex art. 293 B du CGI<br />
                Email : <a href="mailto:contact@ceresfrance.com">contact@ceresfrance.com</a><br />
                Directrice de la publication : Priscilla Owona
            </p>

            <h2>2. Hébergement</h2>
            <p>
                Le site est hébergé par :<br />
                <strong>Netlify Inc.</strong><br />
                Adresse : 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA<br />
                Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">https://www.netlify.com</a>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                Toute reproduction, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite.
            </p>

            <h2>4. Responsabilité</h2>
            <p>
                L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont il se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                Toutefois, l'éditeur ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.
            </p>
        </LegalLayout>
    );
};

export default MentionsLegales;
