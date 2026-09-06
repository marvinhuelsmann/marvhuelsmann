/**
 * German cities that get their own landing page under /webdesign/[city].
 * Each entry carries a short, city-specific intro in German and English so the
 * pages read as written for the place, not stamped out of a template.
 */
export const STATES = {
    BE: "Berlin",
    HH: "Hamburg",
    BY: "Bayern",
    NW: "Nordrhein-Westfalen",
    HE: "Hessen",
    BW: "Baden-Württemberg",
    SN: "Sachsen",
    HB: "Bremen",
    NI: "Niedersachsen",
    SH: "Schleswig-Holstein",
    ST: "Sachsen-Anhalt",
    RP: "Rheinland-Pfalz",
    TH: "Thüringen",
    MV: "Mecklenburg-Vorpommern",
    BB: "Brandenburg",
    SL: "Saarland",
};

export const CITIES = [
    {slug: "berlin", name: "Berlin", state: "BE", blurb: {
        de: "Berlin ist mein Zuhause: Startup-Hauptstadt, Kreativszene und kurze Wege in jeden Kiez. Hier treffen wir uns auf einen Kaffee, bevor die erste Zeile Code entsteht.",
        us: "Berlin is home: startup capital, creative scene and a short ride to any Kiez. Here we can meet for a coffee before the first line of code is written."}},
    {slug: "hamburg", name: "Hamburg", state: "HH", blurb: {
        de: "Hamburg verbindet Hafen, Handel und eine der stärksten Medien- und Agenturlandschaften Deutschlands. Unternehmen aus der Hansestadt erwarten klare Gestaltung und saubere Technik – genau mein Anspruch.",
        us: "Hamburg combines its port, trade and one of Germany's strongest media and agency scenes. Businesses from the Hanseatic city expect clear design and clean engineering – exactly my standard."}},
    {slug: "muenchen", name: "München", state: "BY", blurb: {
        de: "München ist Tech-Standort, Sitz großer Konzerne und Heimat unzähliger Mittelständler, die digital sichtbar sein wollen. Für Apple-Apps und Websites mit Premium-Anspruch bin ich gerne dein Partner.",
        us: "Munich is a tech hub, home to major corporations and countless mid-sized companies that want to be visible online. For Apple apps and websites with a premium feel, I'm happy to be your partner."}},
    {slug: "koeln", name: "Köln", state: "NW", blurb: {
        de: "Köln lebt von Medien, Messen und einer offenen, direkten Art – die passt gut zu meiner Arbeitsweise. Ob Startup in Ehrenfeld oder Traditionsbetrieb im Umland: Ich baue, was sich gut anfühlt.",
        us: "Cologne thrives on media, trade fairs and an open, direct manner – which matches the way I work. Whether a startup in Ehrenfeld or a family business nearby: I build things that feel right."}},
    {slug: "frankfurt", name: "Frankfurt am Main", state: "HE", blurb: {
        de: "Frankfurt ist Finanzplatz, Verkehrsknoten und Standort vieler internationaler Unternehmen. Mehrsprachige Websites und Apps, die Vertrauen ausstrahlen, sind hier besonders gefragt.",
        us: "Frankfurt is a financial centre, transport hub and base for many international companies. Multilingual websites and apps that radiate trust are in high demand here."}},
    {slug: "stuttgart", name: "Stuttgart", state: "BW", blurb: {
        de: "Stuttgart steht für Ingenieurskunst, Automobil und Hidden Champions. Ich übersetze technische Präzision in digitale Produkte, die Kunden und Bewerber überzeugen.",
        us: "Stuttgart stands for engineering, automotive and hidden champions. I translate technical precision into digital products that convince customers and applicants alike."}},
    {slug: "duesseldorf", name: "Düsseldorf", state: "NW", blurb: {
        de: "Düsseldorf ist Mode-, Werbe- und Wirtschaftsmetropole am Rhein. Für Marken, die Design ernst nehmen, gestalte ich Websites und Apps mit Liebe zum Detail.",
        us: "Düsseldorf is a fashion, advertising and business metropolis on the Rhine. For brands that take design seriously, I craft websites and apps with attention to detail."}},
    {slug: "leipzig", name: "Leipzig", state: "SN", blurb: {
        de: "Leipzig wächst schnell und zieht Kreative, Gründer und junge Unternehmen an. Ein moderner Webauftritt oder eine eigene App passt perfekt zur Aufbruchstimmung der Stadt.",
        us: "Leipzig is growing fast and attracts creatives, founders and young companies. A modern website or your own app fits the city's spirit of departure perfectly."}},
    {slug: "dortmund", name: "Dortmund", state: "NW", blurb: {
        de: "Dortmund hat sich vom Kohle- und Stahlstandort zum Technologie- und Logistikzentrum gewandelt. Ich helfe Unternehmen aus dem Ruhrgebiet, diesen Wandel auch digital zu zeigen.",
        us: "Dortmund has transformed from coal and steel into a technology and logistics centre. I help companies from the Ruhr area show that transformation online as well."}},
    {slug: "essen", name: "Essen", state: "NW", blurb: {
        de: "Essen ist Energie- und Konzernstandort mitten im Ruhrgebiet. Von der Handwerkerseite bis zur Unternehmens-App: Ich baue digitale Auftritte, die im Kopf bleiben.",
        us: "Essen is an energy and corporate hub in the heart of the Ruhr. From a craftsman's site to a company app: I build digital presences people remember."}},
    {slug: "bremen", name: "Bremen", state: "HB", blurb: {
        de: "Bremen vereint Hafenwirtschaft, Luft- und Raumfahrt und einen starken Mittelstand. Ich entwickle Websites und Apps, die so zuverlässig arbeiten wie die Unternehmen an der Weser.",
        us: "Bremen combines its port economy, aerospace and a strong Mittelstand. I develop websites and apps that work as reliably as the businesses on the Weser."}},
    {slug: "dresden", name: "Dresden", state: "SN", blurb: {
        de: "Dresden ist Kulturstadt und zugleich Zentrum der Mikroelektronik in Deutschland. Technik und Ästhetik gehören hier zusammen – und genau so gestalte ich digitale Produkte.",
        us: "Dresden is a city of culture and at the same time Germany's microelectronics hub. Technology and aesthetics belong together here – which is exactly how I design digital products."}},
    {slug: "hannover", name: "Hannover", state: "NI", blurb: {
        de: "Hannover ist Messestadt und Sitz vieler Industrie- und Versicherungsunternehmen. Klare, schnelle Websites und praktische Apps sind hier ein echter Wettbewerbsvorteil.",
        us: "Hanover is a trade-fair city and home to many industrial and insurance companies. Clear, fast websites and practical apps are a real competitive edge here."}},
    {slug: "nuernberg", name: "Nürnberg", state: "BY", blurb: {
        de: "Nürnberg verbindet Tradition mit einer wachsenden Tech-Szene rund um die Metropolregion. Für Unternehmen aus Franken entwickle ich Websites und Apple-Apps, die den Unterschied machen.",
        us: "Nuremberg combines tradition with a growing tech scene across the metropolitan region. For companies from Franconia I develop websites and Apple apps that make the difference."}},
    {slug: "duisburg", name: "Duisburg", state: "NW", blurb: {
        de: "Duisburg hat den größten Binnenhafen Europas und eine Industrie, die digital aufholt. Ich unterstütze Betriebe aus Duisburg mit Websites, die Kunden finden und überzeugen.",
        us: "Duisburg has Europe's largest inland port and an industry that is catching up digitally. I support businesses from Duisburg with websites customers find and trust."}},
    {slug: "bochum", name: "Bochum", state: "NW", blurb: {
        de: "Bochum ist Universitätsstadt und einer der wichtigsten Standorte für IT-Sicherheit in Deutschland. Sichere, sauber gebaute Websites und Apps passen perfekt hierher.",
        us: "Bochum is a university city and one of Germany's most important locations for IT security. Secure, cleanly built websites and apps fit right in."}},
    {slug: "wuppertal", name: "Wuppertal", state: "NW", blurb: {
        de: "Wuppertal ist bekannt für die Schwebebahn und einen erfinderischen Mittelstand. Ich bringe diesen Erfindergeist auf den Bildschirm – mit Websites und Apps, die Freude machen.",
        us: "Wuppertal is known for its suspension railway and an inventive Mittelstand. I bring that inventive spirit to the screen – with websites and apps that are a joy to use."}},
    {slug: "bielefeld", name: "Bielefeld", state: "NW", blurb: {
        de: "Bielefeld gibt es wirklich – und mit ihm ein starkes Cluster aus Maschinenbau, Lebensmittel und IT in Ostwestfalen. Ich baue digitale Auftritte, die genauso real und solide sind.",
        us: "Bielefeld really exists – and with it a strong cluster of engineering, food and IT in East Westphalia. I build digital presences that are just as real and solid."}},
    {slug: "bonn", name: "Bonn", state: "NW", blurb: {
        de: "Bonn ist UN-Stadt, Sitz von DAX-Konzernen und vielen Organisationen mit internationalem Publikum. Mehrsprachige, barrierearme Websites sind hier besonders wertvoll.",
        us: "Bonn is a UN city, home to DAX corporations and many organisations with an international audience. Multilingual, accessible websites are especially valuable here."}},
    {slug: "muenster", name: "Münster", state: "NW", blurb: {
        de: "Münster ist Fahrradstadt, Universitätsstadt und lebenswert wie kaum eine andere. Für Praxen, Kanzleien und Startups aus Münster gestalte ich Websites mit Charakter.",
        us: "Münster is a bicycle city, a university city and as liveable as few others. For practices, law firms and startups from Münster I design websites with character."}},
    {slug: "mannheim", name: "Mannheim", state: "BW", blurb: {
        de: "Mannheim ist Gründerstadt mit Quadraten, Popakademie und starker Industrie. Ich entwickle Websites und Apps für Unternehmen aus der Metropolregion Rhein-Neckar.",
        us: "Mannheim is a founders' city with its grid, pop academy and strong industry. I develop websites and apps for businesses from the Rhine-Neckar metropolitan region."}},
    {slug: "karlsruhe", name: "Karlsruhe", state: "BW", blurb: {
        de: "Karlsruhe ist mit dem KIT eine der wichtigsten IT-Städte Deutschlands. Hier zählt technische Qualität – und die liefere ich, von der Website bis zur nativen Apple-App.",
        us: "With KIT, Karlsruhe is one of Germany's most important IT cities. Technical quality counts here – and that's what I deliver, from the website to the native Apple app."}},
    {slug: "augsburg", name: "Augsburg", state: "BY", blurb: {
        de: "Augsburg vereint Fuggerstadt-Geschichte mit Hightech und Luft- und Raumfahrt. Ich helfe Unternehmen aus Schwaben, sich digital modern und glaubwürdig zu präsentieren.",
        us: "Augsburg combines Fugger history with high-tech and aerospace. I help companies from Swabia present themselves online in a modern and credible way."}},
    {slug: "wiesbaden", name: "Wiesbaden", state: "HE", blurb: {
        de: "Wiesbaden ist Landeshauptstadt, Kurstadt und Standort vieler Beratungen und Versicherungen. Elegante, vertrauenswürdige Websites passen zum Auftritt der Stadt.",
        us: "Wiesbaden is a state capital, spa town and base for many consultancies and insurers. Elegant, trustworthy websites match the city's appearance."}},
    {slug: "moenchengladbach", name: "Mönchengladbach", state: "NW", blurb: {
        de: "Mönchengladbach ist Textil-, Logistik- und Fußballstadt am Niederrhein. Ich unterstütze lokale Unternehmen mit Websites, die gefunden werden und Anfragen bringen.",
        us: "Mönchengladbach is a textile, logistics and football city on the Lower Rhine. I support local businesses with websites that get found and generate enquiries."}},
    {slug: "gelsenkirchen", name: "Gelsenkirchen", state: "NW", blurb: {
        de: "Gelsenkirchen steht mitten im Strukturwandel des Ruhrgebiets. Eine moderne Website oder App ist hier ein günstiger Weg, neue Kunden zu erreichen.",
        us: "Gelsenkirchen sits in the middle of the Ruhr's structural change. A modern website or app is an affordable way to reach new customers here."}},
    {slug: "aachen", name: "Aachen", state: "NW", blurb: {
        de: "Aachen ist mit der RWTH Forschungs- und Gründerstadt im Dreiländereck. Für technologieorientierte Startups und Spin-offs baue ich Produkte, die Tempo machen.",
        us: "With RWTH, Aachen is a research and founders' city in the tri-border region. For technology-driven startups and spin-offs I build products that pick up speed."}},
    {slug: "braunschweig", name: "Braunschweig", state: "NI", blurb: {
        de: "Braunschweig ist eine der forschungsintensivsten Regionen Europas. Ich entwickle Websites und Apps, die Forschung und Mittelstand verständlich nach außen tragen.",
        us: "Braunschweig is one of Europe's most research-intensive regions. I develop websites and apps that communicate research and Mittelstand clearly to the outside."}},
    {slug: "chemnitz", name: "Chemnitz", state: "SN", blurb: {
        de: "Chemnitz war Kulturhauptstadt Europas 2025 und ist Industrie- und Maschinenbaustadt. Ich bringe sächsische Unternehmen mit klaren Websites und Apps ins digitale Schaufenster.",
        us: "Chemnitz was European Capital of Culture 2025 and is an industrial and engineering city. I put Saxon companies into the digital shop window with clear websites and apps."}},
    {slug: "kiel", name: "Kiel", state: "SH", blurb: {
        de: "Kiel ist Landeshauptstadt, Universitätsstadt und Tor zur Ostsee. Für Segelmacher, Startups und Verwaltungen entwickle ich Websites, die Klarheit bringen.",
        us: "Kiel is a state capital, university city and gateway to the Baltic Sea. For sailmakers, startups and administrations I develop websites that bring clarity."}},
    {slug: "halle-saale", name: "Halle (Saale)", state: "ST", blurb: {
        de: "Halle ist Händelstadt, Universitätsstadt und Standort eines wachsenden Technologieparks. Ich helfe Unternehmen aus Halle, digital sichtbar und modern aufzutreten.",
        us: "Halle is Handel's city, a university city and home to a growing technology park. I help businesses from Halle appear visible and modern online."}},
    {slug: "magdeburg", name: "Magdeburg", state: "ST", blurb: {
        de: "Magdeburg ist Landeshauptstadt an der Elbe und zieht mit neuen Chip-Investitionen viele Unternehmen an. Eine professionelle Website oder App macht dich für sie sichtbar.",
        us: "Magdeburg is a state capital on the Elbe, attracting many companies with new chip investments. A professional website or app makes you visible to them."}},
    {slug: "freiburg", name: "Freiburg im Breisgau", state: "BW", blurb: {
        de: "Freiburg ist Green City, Universitätsstadt und Tor zum Schwarzwald. Ich baue nachhaltig schnelle, schlanke Websites, die zum Anspruch der Stadt passen.",
        us: "Freiburg is a green city, a university city and the gateway to the Black Forest. I build sustainably fast, lean websites that match the city's ambition."}},
    {slug: "krefeld", name: "Krefeld", state: "NW", blurb: {
        de: "Krefeld ist Samt- und Seidenstadt mit starkem Chemie- und Maschinenbau-Umfeld. Ich gestalte digitale Auftritte, die Tradition und Moderne verbinden.",
        us: "Krefeld is the city of velvet and silk with a strong chemical and engineering environment. I design digital presences that connect tradition and modernity."}},
    {slug: "mainz", name: "Mainz", state: "RP", blurb: {
        de: "Mainz ist Gutenberg-, Medien- und Biotech-Stadt. Für Unternehmen aus Rheinhessen entwickle ich Websites und Apps, die Inhalte klar und überzeugend vermitteln.",
        us: "Mainz is a Gutenberg, media and biotech city. For businesses from Rhenish Hesse I develop websites and apps that communicate content clearly and convincingly."}},
    {slug: "luebeck", name: "Lübeck", state: "SH", blurb: {
        de: "Lübeck ist Hansestadt, Weltkulturerbe und Medizintechnik-Standort. Ich baue Websites und Apps, die Geschichte und Innovation elegant zusammenbringen.",
        us: "Lübeck is a Hanseatic city, World Heritage site and medical technology hub. I build websites and apps that elegantly bring together history and innovation."}},
    {slug: "erfurt", name: "Erfurt", state: "TH", blurb: {
        de: "Erfurt ist Landeshauptstadt mit historischem Kern und Logistikdrehscheibe in der Mitte Deutschlands. Für Unternehmen aus Thüringen gestalte ich moderne, schnelle Websites.",
        us: "Erfurt is a state capital with a historic core and a logistics hub in the centre of Germany. For companies from Thuringia I design modern, fast websites."}},
    {slug: "oberhausen", name: "Oberhausen", state: "NW", blurb: {
        de: "Oberhausen ist Einkaufs- und Freizeitstadt im westlichen Ruhrgebiet. Ich helfe Händlern, Gastronomen und Dienstleistern, online genauso einladend zu wirken wie vor Ort.",
        us: "Oberhausen is a shopping and leisure city in the western Ruhr. I help retailers, restaurateurs and service providers look as inviting online as they do in person."}},
    {slug: "rostock", name: "Rostock", state: "MV", blurb: {
        de: "Rostock ist Hansestadt an der Ostsee mit Hafen, Werften und einer der ältesten Universitäten Nordeuropas. Für Unternehmen aus Mecklenburg-Vorpommern baue ich digitale Auftritte mit Weitblick.",
        us: "Rostock is a Hanseatic city on the Baltic with a port, shipyards and one of Northern Europe's oldest universities. For businesses from Mecklenburg-Vorpommern I build digital presences with vision."}},
    {slug: "kassel", name: "Kassel", state: "HE", blurb: {
        de: "Kassel ist documenta-Stadt und Standort für Mobilität und Maschinenbau in Nordhessen. Ich verbinde Gestaltung und Technik zu Websites, die auffallen.",
        us: "Kassel is the documenta city and a mobility and engineering hub in northern Hesse. I combine design and technology into websites that stand out."}},
    {slug: "hagen", name: "Hagen", state: "NW", blurb: {
        de: "Hagen ist Tor zum Sauerland und Sitz der FernUniversität. Ich entwickle Websites für Handwerk, Industrie und Bildung, die auf jedem Gerät funktionieren.",
        us: "Hagen is the gateway to the Sauerland and home to the distance-learning university. I develop websites for trades, industry and education that work on every device."}},
    {slug: "potsdam", name: "Potsdam", state: "BB", blurb: {
        de: "Potsdam liegt direkt vor meiner Haustür: Filmstadt, Wissenschaftsstandort und Sitz vieler Softwareunternehmen. Hier bin ich auch persönlich schnell vor Ort.",
        us: "Potsdam is right on my doorstep: film city, science hub and home to many software companies. I can be there in person at short notice."}},
    {slug: "saarbruecken", name: "Saarbrücken", state: "SL", blurb: {
        de: "Saarbrücken ist Landeshauptstadt und mit dem DFKI ein Zentrum für Informatik und KI. Für saarländische Unternehmen baue ich Websites und Apps, die technisch vorne mitspielen.",
        us: "Saarbrücken is a state capital and, with DFKI, a centre for computer science and AI. For companies from Saarland I build websites and apps that keep up technically."}},
    {slug: "hamm", name: "Hamm", state: "NW", blurb: {
        de: "In Hamm bin ich geboren – die Stadt am Rand des Ruhrgebiets kenne ich also aus erster Hand. Für Unternehmen aus Hamm und Umgebung gestalte ich Websites und Apps mit besonderer Verbundenheit.",
        us: "I was born in Hamm – so I know the city at the edge of the Ruhr first-hand. For businesses from Hamm and the surrounding area I design websites and apps with a special connection."}},
    {slug: "ludwigshafen", name: "Ludwigshafen am Rhein", state: "RP", blurb: {
        de: "Ludwigshafen ist Chemiestadt am Rhein mit einem starken industriellen Umfeld. Ich helfe Zulieferern und Dienstleistern, sich online klar und professionell zu zeigen.",
        us: "Ludwigshafen is a chemical city on the Rhine with a strong industrial environment. I help suppliers and service providers present themselves clearly and professionally online."}},
    {slug: "oldenburg", name: "Oldenburg", state: "NI", blurb: {
        de: "Oldenburg ist Universitätsstadt und Zentrum für Energie- und Gesundheitswirtschaft im Nordwesten. Ich baue Websites und Apps, die für Kunden und Patienten leicht zugänglich sind.",
        us: "Oldenburg is a university city and a centre for energy and healthcare in the northwest. I build websites and apps that are easy to access for customers and patients."}},
    {slug: "osnabrueck", name: "Osnabrück", state: "NI", blurb: {
        de: "Osnabrück ist Friedensstadt und Logistik- sowie Agrartechnik-Standort. Für Unternehmen aus dem Osnabrücker Land entwickle ich Websites, die Vertrauen schaffen.",
        us: "Osnabrück is the city of peace and a logistics and agricultural technology hub. For companies from the Osnabrück region I develop websites that build trust."}},
    {slug: "leverkusen", name: "Leverkusen", state: "NW", blurb: {
        de: "Leverkusen ist Chemie- und Pharmastandort zwischen Köln und Düsseldorf. Ich gestalte digitale Auftritte, die Präzision und Verlässlichkeit ausstrahlen.",
        us: "Leverkusen is a chemical and pharmaceutical hub between Cologne and Düsseldorf. I design digital presences that radiate precision and reliability."}},
    {slug: "heidelberg", name: "Heidelberg", state: "BW", blurb: {
        de: "Heidelberg ist Wissenschaftsstadt mit internationalem Publikum und lebendiger Startup-Szene. Mehrsprachige Websites und Apps sind hier fast Pflicht – ich liefere sie.",
        us: "Heidelberg is a science city with an international audience and a lively startup scene. Multilingual websites and apps are almost mandatory here – and I deliver them."}},
    {slug: "darmstadt", name: "Darmstadt", state: "HE", blurb: {
        de: "Darmstadt ist Wissenschaftsstadt, Sitz der ESA-Kontrollzentrale und vieler Software-Unternehmen. Für technisch anspruchsvolle Produkte bin ich der richtige Ansprechpartner.",
        us: "Darmstadt is a science city, home to ESA's control centre and many software companies. For technically demanding products I'm the right person to talk to."}},
    {slug: "solingen", name: "Solingen", state: "NW", blurb: {
        de: "Solingen ist Klingenstadt – Präzision hat hier Tradition. Ich bringe diesen Qualitätsanspruch in Websites und Apps, die scharf und klar gestaltet sind.",
        us: "Solingen is the city of blades – precision is a tradition here. I bring that quality standard to websites and apps that are sharply and clearly designed."}},
    {slug: "regensburg", name: "Regensburg", state: "BY", blurb: {
        de: "Regensburg verbindet Weltkulturerbe mit Hightech, Automobil und Biotechnologie. Für Unternehmen aus der Oberpfalz entwickle ich Websites und Apple-Apps mit Charakter.",
        us: "Regensburg combines World Heritage with high-tech, automotive and biotechnology. For companies from the Upper Palatinate I develop websites and Apple apps with character."}},
    {slug: "ingolstadt", name: "Ingolstadt", state: "BY", blurb: {
        de: "Ingolstadt ist Automobil- und Technikstadt an der Donau. Ich gestalte digitale Produkte, die den hohen Qualitätsanspruch der Region widerspiegeln.",
        us: "Ingolstadt is an automotive and technology city on the Danube. I design digital products that reflect the region's high quality standards."}},
    {slug: "wuerzburg", name: "Würzburg", state: "BY", blurb: {
        de: "Würzburg ist Universitätsstadt, Weinregion und Standort für Medizin und Forschung. Ich baue Websites und Apps, die Wissen ansprechend und zugänglich vermitteln.",
        us: "Würzburg is a university city, wine region and a hub for medicine and research. I build websites and apps that convey knowledge in an appealing, accessible way."}},
    {slug: "paderborn", name: "Paderborn", state: "NW", blurb: {
        de: "Paderborn ist Informatik-Hochburg mit Universität und Heinz Nixdorf Forum. Für Unternehmen aus Ostwestfalen-Lippe entwickle ich technisch saubere Websites und Apps.",
        us: "Paderborn is a computer science stronghold with its university and the Heinz Nixdorf Forum. For companies from East Westphalia-Lippe I develop technically clean websites and apps."}},
    {slug: "wolfsburg", name: "Wolfsburg", state: "NI", blurb: {
        de: "Wolfsburg ist Autostadt mit starkem Fokus auf Mobilität und Digitalisierung. Ich helfe Zulieferern und Dienstleistern, digital genauso professionell aufzutreten.",
        us: "Wolfsburg is the car city with a strong focus on mobility and digitalisation. I help suppliers and service providers appear just as professional online."}},
    {slug: "ulm", name: "Ulm", state: "BW", blurb: {
        de: "Ulm hat den höchsten Kirchturm der Welt und eine starke Wissenschafts- und Industrielandschaft. Ich baue Websites und Apps, die genauso hoch hinaus wollen.",
        us: "Ulm has the world's tallest church spire and a strong science and industry landscape. I build websites and apps that aim just as high."}},
    {slug: "heilbronn", name: "Heilbronn", state: "BW", blurb: {
        de: "Heilbronn wächst mit dem Bildungscampus und dem KI-Innovationspark zu einem Zukunftsstandort. Für Unternehmen aus der Region gestalte ich moderne digitale Auftritte.",
        us: "Heilbronn is growing into a hub for the future with its education campus and AI innovation park. For companies from the region I design modern digital presences."}},
    {slug: "goettingen", name: "Göttingen", state: "NI", blurb: {
        de: "Göttingen ist die Stadt, die Wissen schafft – Universität, Max-Planck-Institute und Messtechnik prägen sie. Ich baue Websites, die Wissen klar strukturieren.",
        us: "Göttingen is the city that creates knowledge – shaped by its university, Max Planck institutes and measurement technology. I build websites that structure knowledge clearly."}},
    {slug: "pforzheim", name: "Pforzheim", state: "BW", blurb: {
        de: "Pforzheim ist Goldstadt mit Schmuck-, Uhren- und Designtradition. Ich gestalte Websites und Apps, die diesem Anspruch an Form und Detail gerecht werden.",
        us: "Pforzheim is the golden city with a tradition in jewellery, watches and design. I craft websites and apps that live up to that standard for form and detail."}},
    {slug: "offenbach", name: "Offenbach am Main", state: "HE", blurb: {
        de: "Offenbach ist Design-Stadt mit der HfG und einer jungen, kreativen Szene direkt neben Frankfurt. Ich baue digitale Produkte mit dem Gestaltungsanspruch, den die Stadt lebt.",
        us: "Offenbach is a design city with the HfG and a young, creative scene right next to Frankfurt. I build digital products with the design ambition the city lives."}},
    {slug: "bremerhaven", name: "Bremerhaven", state: "HB", blurb: {
        de: "Bremerhaven ist Seestadt, Klimaforschungs- und Offshore-Standort. Für Unternehmen an der Nordseeküste entwickle ich Websites, die klar und robust sind.",
        us: "Bremerhaven is a maritime city and a hub for climate research and offshore energy. For companies on the North Sea coast I develop websites that are clear and robust."}},
    {slug: "koblenz", name: "Koblenz", state: "RP", blurb: {
        de: "Koblenz liegt am Deutschen Eck, wo Rhein und Mosel zusammenfließen. Ich verbinde für Unternehmen aus der Region Gestaltung und Technik zu einem stimmigen Auftritt.",
        us: "Koblenz sits at the Deutsches Eck where Rhine and Moselle meet. For companies from the region I bring design and technology together into a coherent presence."}},
    {slug: "trier", name: "Trier", state: "RP", blurb: {
        de: "Trier ist die älteste Stadt Deutschlands und lebendige Universitäts- und Weinstadt. Ich baue moderne Websites und Apps, die Geschichte und Gegenwart verbinden.",
        us: "Trier is Germany's oldest city and a lively university and wine town. I build modern websites and apps that connect history and the present."}},
    {slug: "jena", name: "Jena", state: "TH", blurb: {
        de: "Jena ist Lichtstadt – Optik, Photonik und Software prägen den Standort. Für Unternehmen aus Jena entwickle ich technisch präzise Websites und Apps.",
        us: "Jena is the city of light – optics, photonics and software define the location. For companies from Jena I develop technically precise websites and apps."}},
    {slug: "schwerin", name: "Schwerin", state: "MV", blurb: {
        de: "Schwerin ist Landeshauptstadt mit Schloss und Seenlandschaft. Ich unterstütze Unternehmen und Institutionen aus Schwerin mit Websites, die Vertrauen und Klarheit schaffen.",
        us: "Schwerin is a state capital with its castle and lake landscape. I support companies and institutions from Schwerin with websites that build trust and clarity."}},
    {slug: "cottbus", name: "Cottbus", state: "BB", blurb: {
        de: "Cottbus ist Universitätsstadt in der Lausitz, einer Region im Aufbruch. Ich helfe Unternehmen aus Cottbus, den Wandel mit einem modernen Webauftritt sichtbar zu machen.",
        us: "Cottbus is a university city in Lusatia, a region on the move. I help businesses from Cottbus make that change visible with a modern website."}},
    {slug: "erlangen", name: "Erlangen", state: "BY", blurb: {
        de: "Erlangen ist Medizintechnik- und Forschungsstadt in der Metropolregion Nürnberg. Ich baue Websites und Apps mit der Sorgfalt, die dieser Standort verlangt.",
        us: "Erlangen is a medical technology and research city in the Nuremberg metropolitan region. I build websites and apps with the care this location demands."}},
    {slug: "reutlingen", name: "Reutlingen", state: "BW", blurb: {
        de: "Reutlingen liegt am Fuß der Schwäbischen Alb und ist Heimat vieler Weltmarktführer im Mittelstand. Ich mache diese Stärke online sichtbar.",
        us: "Reutlingen lies at the foot of the Swabian Alb and is home to many world-market-leading Mittelstand companies. I make that strength visible online."}},
    {slug: "fuerth", name: "Fürth", state: "BY", blurb: {
        de: "Fürth ist Kleeblattstadt und Nachbar von Nürnberg mit wachsender Kreativ- und Tech-Szene. Für Unternehmen aus Fürth gestalte ich Websites und Apps mit Persönlichkeit.",
        us: "Fürth is the cloverleaf city and Nuremberg's neighbour with a growing creative and tech scene. For companies from Fürth I design websites and apps with personality."}},
    {slug: "siegen", name: "Siegen", state: "NW", blurb: {
        de: "Siegen ist Universitätsstadt und Heimat vieler mittelständischer Weltmarktführer im Siegerland. Ich baue Websites, die Ingenieursqualität digital erlebbar machen.",
        us: "Siegen is a university city and home to many mid-sized world market leaders in the Siegerland. I build websites that make engineering quality tangible online."}},
    {slug: "guetersloh", name: "Gütersloh", state: "NW", blurb: {
        de: "Gütersloh ist Sitz großer Medien- und Hausgerätekonzerne in Ostwestfalen. Ich gestalte digitale Auftritte, die den professionellen Anspruch der Region treffen.",
        us: "Gütersloh is home to major media and appliance corporations in East Westphalia. I design digital presences that meet the region's professional standards."}},
    {slug: "flensburg", name: "Flensburg", state: "SH", blurb: {
        de: "Flensburg ist Hafenstadt an der dänischen Grenze mit maritimer und deutsch-dänischer Prägung. Ich entwickle mehrsprachige Websites und Apps für den Norden.",
        us: "Flensburg is a port city on the Danish border with a maritime, German-Danish character. I develop multilingual websites and apps for the north."}},
    {slug: "konstanz", name: "Konstanz", state: "BW", blurb: {
        de: "Konstanz liegt am Bodensee und verbindet Universität, Tourismus und Mittelstand im Dreiländereck. Ich gestalte Websites, die so klar sind wie der Blick auf den See.",
        us: "Konstanz lies on Lake Constance and combines university, tourism and Mittelstand in the tri-border area. I design websites as clear as the view of the lake."}},
    {slug: "tuebingen", name: "Tübingen", state: "BW", blurb: {
        de: "Tübingen ist Universitätsstadt und KI- sowie Biotech-Standort mit internationalem Ruf. Ich baue Websites und Apps, die wissenschaftliche Qualität modern kommunizieren.",
        us: "Tübingen is a university city and an AI and biotech hub with an international reputation. I build websites and apps that communicate scientific quality in a modern way."}},
    {slug: "bamberg", name: "Bamberg", state: "BY", blurb: {
        de: "Bamberg ist Weltkulturerbe, Universitätsstadt und Heimat traditionsreicher Betriebe. Ich gestalte Websites und Apps, die Tradition zeitgemäß erzählen.",
        us: "Bamberg is a World Heritage site, university city and home to businesses steeped in tradition. I design websites and apps that tell tradition in a contemporary way."}},
    {slug: "passau", name: "Passau", state: "BY", blurb: {
        de: "Passau ist Dreiflüssestadt an der Grenze zu Österreich mit Universität und Tourismus. Ich baue Websites und Apps, die Gäste und Kunden begeistern.",
        us: "Passau is the city of three rivers on the Austrian border with a university and tourism. I build websites and apps that delight guests and customers."}},
    {slug: "kaiserslautern", name: "Kaiserslautern", state: "RP", blurb: {
        de: "Kaiserslautern ist mit Universität, Fraunhofer und DFKI eine Silicon Woods der Pfalz. Für Tech-Unternehmen aus der Region entwickle ich Produkte, die mithalten.",
        us: "With its university, Fraunhofer and DFKI, Kaiserslautern is the Silicon Woods of the Palatinate. For tech companies from the region I develop products that keep up."}},
];

export const CITY_BY_SLUG = Object.fromEntries(CITIES.map((c) => [c.slug, c]));

/** Cities sharing a state with `city` (falling back to the biggest cities), max `n`. */
export function relatedCities(city, n = 6) {
    const sameState = CITIES.filter((c) => c.state === city.state && c.slug !== city.slug);
    const fallback = CITIES.filter((c) => c.slug !== city.slug && !sameState.includes(c));
    return [...sameState, ...fallback].slice(0, n);
}

/** Cities grouped by state, keeping the population order inside each group. */
export function citiesByState() {
    const groups = {};
    for (const c of CITIES) (groups[c.state] ||= []).push(c);
    return Object.entries(groups)
        .map(([code, cities]) => ({code, name: STATES[code], cities}))
        .sort((a, b) => a.name.localeCompare(b.name, "de"));
}

export const TOP_CITIES = CITIES.slice(0, 12);
