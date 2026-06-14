// =================================================================
// CONFIGURACIÓN Y DATA ESTATICA (English Translation)
// =================================================================

// CONFIGURACIÓN GLOBAL DE BOTONES DE PAGO (Solo define la estructura y el delay global)
const paymentButtonsConfig = [
    { id: 'whatsapp', icon: 'fab fa-whatsapp', label: 'WhatsApp', color: 'hover:bg-green-500', delay: 5000 },
    { id: 'telegram', icon: 'fab fa-telegram-plane', label: 'Telegram', color: 'hover:bg-blue-500', delay: 10000 },
    { id: 'paypal', icon: 'fab fa-paypal', label: 'Paypal', color: 'hover:bg-blue-600', delay: 15000 },
    { id: 'bank', icon: 'fas fa-university', label: 'Bank', color: 'hover:bg-gray-600', delay: 20000 },
    { id: 'donate', icon: 'fas fa-gift', label: 'Thanks', color: 'hover:bg-orange-500', delay: 25000 },
    { id: 'crypto', icon: 'fas fa-bitcoin', label: 'Crypto', color: 'hover:bg-yellow-500', delay: 30000 }
];

let posts = JSON.parse(localStorage.getItem('storelPosts')) || [
    {
        id: 1,
        user: 'Smart',
        userImage: 'https://i.postimg.cc/P5p883pm/Adm-digital-product-marketplace-social-networks-(modi).png',
        title: 'YouTube Shorts Guia "Cero Excusas"',
        description: 'Producto digital: Aquí tienes un plan integral con Cero conocimientos, las mejores prácticas para maximizar creación de contenido de forma estratégica, ideas de contenido, formato, duración, optimización, análisis, resolución de problemas y estrategias de expansión comercial. Construye un ecosistema sostenible y escalable en una plataforma con un alto volumen de tráfico. Segmento vertical para la monetización de ingresos. Herramientas de contenido con inteligencia artificial. Domina rápidamente visibilidad y participación en crecimiento de audiencia, impulsar marcas, promoción de negocios de comercio electrónico, etc.',
        mediaUrl: 'youtubeshortstorel.mp4', // El video que subiste a GitHub
        tags: ['photo', 'pdf', 'producto digital', 'png', 'youtube', 'video short', 'ebook'], 
        fileUrl: 'https://www.paypal.com/ncp/payment/L46LMRMN76FC4', // ESTE ES SOLO PARA EL BOTÓN AZUL (BUY NOW)
        fileType: 'video', // Indica que el tipo de archivo es un video
        fileSize: '2.4 MB',
        price: '1.53',
        isFree: false,
        showFileInfo: false,
        likes: 5,
        paymentOptions: {
            whatsapp: false,
            telegram: false, 
            paypal: false,
            bank: false,
            donate: false,
            crypto: false,
        }, // <--- Esta coma es importante
        landingContent: {
            show: true, 
            extendedDescription: "Youtube videos shorts te permite crear videos que tienen una duración menor a 60 segundos, este producto digital destaca el potencial para creadores como una nueva estrategia de marketing efectiva para llegar a audiencias diversas a nivel global en tiempo record. Demostrado que en esta era de la informacion, internet es un medio donde personas interesantes con historias interesantes descubren que tienen el potencial para crear libros de poesía, ser un educador en cualquier tema, promocionar sus productos fisicos o digitales, etc. Videos shorts basados en dispositivos móviles están transformando las redes sociales, maximizando un alcance orgánico con miles de millones de vistas diarias. Aborda los desafíos comunes que impiden el crecimiento en YouTube y la necesidad de un sistema estructurado para superar las excusas y lograr el éxito. a) Muchos aspiran a crear contenido en YouTube, pero las excusas se interponen. b) La clave no es la falta de ideas, sino la ausencia de un sistema. c) Desconocimiento y falta de información o exceso de información que termina por confundir.",
            features: [
                { label: "Formato", value: "PDF (Guía Maestra) + Audio MP3 ('Audiolibro') + 6 Videos lecciones para implementar + 3000 Video Shorts 'Reels' (Píldoras de Acción)." },
                { label: "Calidad", value: "Alta Definición 476.8 MB" },
                { label: "Entrega", value: "Inmediata" },
                { label: "Licencia", value: "Uso Personal" }
            ]
        },
        comments: [
            // Es importante que la fecha esté en formato ISO string
            { id: 67, user: 'Promonopsony', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=P', text: 'Llevaba meses estancado con mi marca y no sabía por dónde empezar a crear contenido. Este pack me dio las mejores prácticas estratégicas que necesitaba. ¡Mi comunidad ha crecido muchísimo desde que apliqué sus consejos.', date: '2026-06-12T00:39:00Z', replies: [] }, // Comentario de hace ~24 horas
            { id: 66, user: 'Retaility', userImage: 'https://i.postimg.cc/cLcXNnDJ/digital-product-marketplace-social-networks-66.jpg', text: 'Empecé sin tener ni idea de cómo empezar y en una semana ya subí mis primeros 5 Shorts. Las lecciones de implementación son tan prácticas que no te dejan perderte. ¡producto recomendado!', date: '2026-06-09T11:21:00Z', replies: [] }, // Comentario de hace ~72 horas
            { id: 65, user: 'CircuitSage', userImage: 'https://placehold.co/30x30/bdbdff/0000ff?text=C', text: 'Llevaba meses intentando despegar y esta guía me dio las mejores prácticas para maximizar mis resultados. Entender el formato y la optimización fue un antes y un después.', date: '2026-06-08T09:00:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 64, user: '@FrameFighter', userImage: 'https://i.postimg.cc/7Y0Kmc0t/digital-product-marketplace-social-networks-64.jpg', text: 'La metodología paso a paso para crear contenido estratégico es genial. Mis videos cortos ahora tienen un propósito claro y dirigen tráfico directo a mis otros canales.', date: '2026-06-07T17:11:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 63, user: 'ByteBard', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=BB', text: 'Una inversión 100% rentable. Las estrategias de expansión comercial no solo sirven para YouTube, me ayudaron a impulsar mi negocio local y llevarlo al entorno digital.', date: '2026-06-06T11:21:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 62, user: 'CodeCrafter', userImage: 'https://i.postimg.cc/WpQ9mjFT/digital-product-marketplace-social-networks-62.jpg', text: 'Pasé de cero a tener una audiencia activa que interactúa con mis videos. La guía te enseña exactamente cómo dominar cada parte importante para crear una comunidad.', date: '2026-06-05T09:00:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 61, user: '@PixelPioneer', userImage: 'https://placehold.co/30x30/bdbdff/0000ff?text=P', text: 'Había intentado crear contenido antes y me frustré. Este método sin conocimientos previos me dio la confianza y las herramientas para empezar a generar impacto desde el día uno.', date: '2026-06-04T17:11:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 60, user: 'stormfox', userImage: 'https://i.postimg.cc/mDn9sLf3/digital-product-marketplace-social-networks-60.jpg', text: '¡Es exactamente lo que necesitaba para mi marca personal! Por fin entendí cómo construir un ecosistema en una plataforma con alto volumen de tráfico sin ser un experto en edición.', date: '2026-06-03T06:30:00Z', replies: [] }, // Comentario de hace ~2 semanas
            { id: 59, user: 'flyiok1', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=F', text: 'Dominé la visibilidad y participación en mi canal mucho más rápido de lo que imaginaba. Las mejores prácticas que enseñan aquí son el secreto mejor guardado de los creadores grandes.', date: '2026-06-02T10:45:00Z', replies: [] }, // Comentario de hace ~2 semanas
            { id: 58, user: 'Enrique Anguiano', userImage: 'https://placehold.co/30x30/bdbdff/0000ff?text=EA', text: 'Lo mejor de la guía cero excusas es su enfoque en el segmento vertical para monetización. No solo se trata de ganar seguidores, sino de construir un modelo de ingresos exponenciales.', date: '2026-06-01T12:14:00Z', replies: [] }, // Comentario de hace ~2 semanas
            { id: 57, user: 'Gamaliel Olmos', userImage: 'https://i.postimg.cc/KYJL0707/digital-product-marketplace-social-networks-57.jpg', text: 'Tener un negocio de e-commerce y no usar YouTube Shorts es perder dinero. La guía me enseñó a promocionar mis productos de forma estratégica y ya tripliqué mis ventas.', date: '2026-05-30T10:51:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 56, user: 'Vidal V Vega', userImage: 'https://placehold.co/30x30/bdbdff/0000ff?text=V', text: 'Lo que me gustó es que videos antes pasaban desapercibidos, pero aplicar estas estrategias con constancia hizo que el algoritmo me empezara a recomendar. ¡Excelente compra!', date: '2026-05-29T13:41:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 55, user: 'Arcadio Guillermo', userImage: 'https://i.postimg.cc/PrwWdwqj/digital-product-marketplace-social-networks-55.jpg', text: 'Empecé con cero conocimientos y esta guía me dio el mapa exacto. En solo semanas logré mi primer pico de visitas y activé mi monetización. ¡Valió cada centavo!', date: '2026-05-28T00:33:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 54, user: 'Concepcion Ake', userImage: 'https://i.postimg.cc/brK1Qz3M/digital-product-marketplace-social-networks-54.jpg', text: '¡Una inversión que se paga sola! Las estrategias de IA y monetización valen muchísimo más de lo que cuesta la guía. ¡Deberías comprarla ya!', date: '2026-05-26T11:48:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 53, user: 'Pamela Zurita', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=PZ', text: 'Si realmente quieres monetizar tu contenido y crear un ecosistema escalable, esta es tu oportunidad. ¡No te vas a arrepentir!', date: '2026-05-25T16:02:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 52, user: 'Myrna Patricio', userImage: 'https://i.postimg.cc/kGVx6VF8/digital-product-marketplace-social-networks-52.jpg', text: 'Me encanta que todo está explicado de forma muy visual y sin rodeos. Implementas lo aprendido el mismo día que lo lees.', date: '2026-05-24T09:13:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 51, user: 'Ligia Roa Gutierrz', userImage: 'https://i.postimg.cc/DZprwQsk/digital-product-marketplace-social-networks-51.jpg', text: 'Es el mejor manual práctico que he leído. Te ahorra meses de prueba y error. ¡Ve directo al grano y compra la guía', date: '2026-05-21T13:46:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 50, user: 'Petrona Garnica', userImage: 'https://i.postimg.cc/xdRGWV1t/digital-product-marketplace-social-networks-50.jpg', text: 'No lo pienses más, si quieres vivir de esto o escalar tu negocio, esta guía tiene todo el conocimiento necesario y más.', date: '2026-05-18T17:04:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 49, user: 'Cristhian Ku Vazquez', userImage: 'https://placehold.co/30x30/bdbdff/0000ff?text=CK', text: 'Compré la guía con dudas, pero es el curso más completo y accionable que he visto sobre YouTube Shorts. ¡Cero excusas para no triunfar.', date: '2026-05-15T01:05:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 48, user: 'Zoila Guerrero', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=ZG', text: 'Pude impulsar mi negocio de manera orgánica y rápida. Las técnicas de esta guía son el empujón que toda marca necesita.', date: '2026-05-09T13:37:00Z', replies: [] }, // Comentario de hace ~2 meses
            { id: 47, user: 'Dalila Armenta', userImage: 'https://i.postimg.cc/25mFcSrN/digital-product-marketplace-social-networks-47.jpg', text: 'Si tienes una marca y no estás usando Shorts, estás perdiendo dinero. Esta guía te da el plan maestro para dominar la plataforma.', date: '2026-05-08T08:27:00Z', replies: [] }, // Comentario de hace ~2 meses
            { id: 46, user: 'Armando Ballesteros', userImage: 'https://placehold.co/30x30/bdbdff/0000ff?text=AB', text: 'La visibilidad que he ganado para mi negocio de comercio electrónico gracias a estas estrategias es impresionante. ¡Vale cada centavo!', date: '2026-05-05T07:20:00Z', replies: [] }, // Comentario de hace ~2 meses
            { id: 45, user: 'Santa Zermeno Ochoa', userImage: 'https://i.postimg.cc/fRYff943/digital-product-marketplace-social-networks-45.jpg', text: 'Esta guía te enseña a darle a tu marca una visibilidad masiva en la plataforma con más tráfico del mundo.', date: '2026-05-04T21:29:00Z', replies: [] }, // Comentario de hace ~2 meses
            { id: 44, user: 'Matias Figueroa', userImage: 'https://i.postimg.cc/5yGSn5NP/digital-product-marketplace-social-networks-44.jpg', text: 'Promocionar mi negocio en YouTube Shorts me trajo clientes que realmente estaban buscando mis servicios. ¡Es oro puro!', date: '2026-05-03T00:17:00Z', replies: [] }, // Comentario de hace ~2 meses
            { id: 43, user: 'Anastacia Cornelio E', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=AC', text: 'Mi marca personal despegó por completo. La guía me enseñó a proyectar profesionalismo y autoridad en videos de pocos segundos.', date: '2026-04-30T11:12:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 42, user: 'Pastor Pichardo', userImage: 'https://i.postimg.cc/d1s61txd/digital-product-marketplace-social-networks-42.jpg', text: 'Las estrategias de expansión comercial que muestran te abren la mente. YouTube es una máquina de ventas si sabes usarla.', date: '2026-04-29T06:17:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 41, user: 'Bertha Alva Glz', userImage: 'https://i.postimg.cc/Sx9D1P9v/digital-product-marketplace-social-networks-41.jpg', text: 'Logré promocionar mi tienda online a través de Shorts y el retorno de inversión ha sido brutal. ¡Totalmente recomendada!', date: '2026-04-27T11:29:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 40, user: 'Teresita Arguelles', userImage: 'https://i.postimg.cc/bY6CZk8s/digital-product-marketplace-social-networks-40.jpg', text: 'La monetización ya no es un sueño lejano. Con esta guía estructuré mi canal para generar ingresos estables y escalables.', date: '2026-04-26T06:02:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 39, user: 'Estanislao Navarro', userImage: 'https://placehold.co/30x30/bdbdff/0000ff?text=EN', text: 'Aprender a construir un ecosistema digital con alto volumen de tráfico era lo que necesitaba para llevar mi marca al siguiente nivel.', date: '2026-04-23T11:08:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 38, user: 'Dionicia Segovia', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=DS', text: 'Tengo un negocio de e-commerce y usar esta guía para promocionar mis productos fue la mejor decisión del año. ¡Excelente inversión!', date: '2026-04-15T05:07:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 37, user: 'Jacinto Picazo L', userImage: 'https://i.postimg.cc/9Mbxtq9V/digital-product-marketplace-social-networks-37.jpg', text: 'Esta guía es el mejor curso de negocios. Te enseña a monetizar tu canal desde el día uno y a escalar tus ingresos.', date: '2026-04-14T11:25:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 36, user: 'Isidra Echeverria', userImage: 'https://i.postimg.cc/MGy3HLZh/digital-product-marketplace-social-networks-36.jpg', text: 'Pude integrar mis productos de comercio electrónico a los Shorts de manera natural. ¡Las ventas se han disparad', date: '2026-04-09T06:07:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 35, user: 'Victoriano Tadeo Olmos', userImage: 'https://i.postimg.cc/Gh555Y5m/digital-product-marketplace-social-networks-35.jpg', text: 'La segmentación vertical que enseñan me ayudó a atraer al público ideal para monetizar mis ingresos de forma recurrente.', date: '2026-04-07T11:25:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 34, user: 'Sabino Ayala', userImage: 'https://i.postimg.cc/rshPcty0/digital-product-marketplace-social-networks-34.jpg', text: 'Por fin entiendo cómo construir un ecosistema sostenible! No solo gano vistas, sino que estoy creando un negocio escalable.', date: '2026-04-02T06:07:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 33, user: 'Jonatan S Roque', userImage: 'https://placehold.co/30x30/bdbdff/0000ff?text=JR', text: 'La forma en que explican el algoritmo para ganar visibilidad rápida es brillante. ¡Estoy muy feliz con los resultados de mi canal', date: '2026-03-28T23:01:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 32, user: 'Antonio Juan', userImage: 'https://i.postimg.cc/qBXrSm8S/digital-product-marketplace-social-networks-32.jpg', text: 'Si quieres ganar seguidores calificados y participativos, esta guía te da el paso a paso exacto para lograrlo.', date: '2026-03-27T13:28:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 31, user: 'Alcala Berta', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=AB', text: 'Mis videos pasaron de tener 50 vistas a miles. La estrategia de visibilidad que enseñan es completamente efectiva.', date: '2026-03-25T02:08:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 30, user: 'thething', userImage: 'https://i.postimg.cc/7PFTwSY7/digital-product-marketplace-social-networks-30.png', text: 'Conseguir participación y comentarios ya no es un misterio. Las tácticas de esta guía realmente conectan con la gente.', date: '2026-03-20T12:15:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 29, user: 'Rita Ceballos', userImage: 'https://i.postimg.cc/FHQFnZFp/digital-product-marketplace-social-networks-29.jpg', text: 'El crecimiento de mi audiencia ha sido explosivo. Esta guía te enseña exactamente cómo posicionarte rápido en YouTube.', date: '2026-03-17T01:55:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 28, user: 'Sagrocery ads', userImage: 'https://i.postimg.cc/76XTqRhh/digital-product-marketplace-social-networks-28.jpg', text: 'Quería que mi canal fuera más visible y esta guía me dio las claves exactas para dominar el feed de Shorts.', date: '2026-03-14T06:07:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 27, user: 'Commercialio17', userImage: 'https://i.postimg.cc/ZRL6CR7J/digital-product-marketplace-social-networks-27.jpg', text: 'En solo dos semanas aptts-floating-iconlicando estas estrategias de crecimiento, mi audiencia se duplicó. ¡La visibilidad en YouTube es real!', date: '2026-03-08T23:01:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 26, user: 'Berto Ambrosio', userImage: 'https://i.postimg.cc/3xW1VgLZ/digital-product-marketplace-social-networks-26.jpg', text: 'Me resolvió la vida. Ahora puedo delegar la lluvia de ideas y la redacción de guiones a la IA de manera estratégica.', date: '2026-03-07T13:28:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 25, user: 'Soledad Alejandre', userImage: 'https://i.postimg.cc/RVSXQrwx/digital-product-marketplace-social-networks-25.png', text: 'Usar las herramientas de Inteligencia Artificial que recomiendan me ayudó a mejorar la resolución visual y el impacto de mis videos sin ser diseñador.', date: '2026-03-05T02:08:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 24, user: '@CodeCrafter', userImage: 'https://i.postimg.cc/j2KvFm9x/digital-product-marketplace-social-networks-24.jpg', text: 'La guía te enseña a superar cualquier obstáculo técnico o creativo rápidamente. Es un manual de supervivencia para creadores.', date: '2026-03-04T12:15:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 23, user: 'Iris de Leon', userImage: 'https://i.postimg.cc/nhLSZ8LC/digital-product-marketplace-social-networks-23.jpg', text: 'Pude resolver mis problemas de retención gracias a los consejos de optimización. ¡Mis espectadores ahora ven mis videos completos!', date: '2026-02-28T06:10:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 22, user: 'Valentina Cabral', userImage: 'https://i.postimg.cc/j2Q3qtNJ/digital-product-marketplace-social-networks-22.jpg', text: 'Si sufres de bloqueo creativo, esta guía soluciona todos tus problemas. La IA te da ideas infinitas y listas para usar.', date: '2026-02-26T21:03:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 21, user: '@LogicLord', userImage: 'https://i.postimg.cc/SxQ3s2gm/digital-product-marketplace-social-networks-21.jpg', text: 'Las herramientas con IA que enseñan a usar son un antes y un después. Ahora edito y publico en la mitad del tiempo.', date: '2026-02-25T17:44:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 20, user: 'taurusshark', userImage: 'https://i.postimg.cc/Gmq0JJ4V/digital-product-marketplace-social-networks-20.jpg', text: 'Estaba atascado sin saber cómo resolver la falta de interacción en mis videos. La guía me dio las soluciones exactas para mejorar mi participación.', date: '2026-02-22T01:11:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 19, user: 'doge7Net', userImage: 'https://i.postimg.cc/T1gMrzbj/digital-product-marketplace-social-networks-19.jpg', text: '¡La integración de herramientas de Inteligencia Artificial que recomiendan te ahorra horas de trabajo! Es como tener un asistente personal.', date: '2026-02-18T01:55:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 18, user: 'Eloy de La Garza', userImage: 'https://i.postimg.cc/L8RRV8vr/digital-product-marketplace-social-networks-18.jpg', text: 'Las ideas de contenido están súper bien estructuradas. Pasé de no saber qué grabar a tener un calendario de publicaciones para todo el mes.', date: '2026-02-16T06:07:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 17, user: 'Judith Alejandro', userImage: 'https://i.postimg.cc/pVh2W7md/digital-product-marketplace-social-networks-17.jpg', text: 'Me encanta que te explican el formato exacto que funciona hoy en día. Nada de rodeos, te muestran lo que realmente le gusta a la plataforma.', date: '2026-02-15T23:01:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 16, user: 'DataDynamo', userImage: 'https://i.postimg.cc/q7jFykZD/digital-product-marketplace-social-networks-16.jpg', text: 'La optimización del canal que proponen es increíble. Mis videos ahora aparecen en las búsquedas correctas gracias a sus técnicas.', date: '2026-02-12T13:28:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 15, user: 'Braulio Santana', userImage: 'https://i.postimg.cc/0jb1b6kV/digital-product-marketplace-social-networks-15.jpg', text: 'Las estrategias de contenido que enseñan aquí son oro puro. Ya no publico por publicar; ahora todo tiene un propósito.', date: '2026-02-11T00:03:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 14, user: '@sputnik12', userImage: 'https://i.postimg.cc/vmsy3HhM/digital-product-marketplace-social-networks-14.jpg', text: 'Aprender a optimizar el formato y la duración de mis Shorts cambió mi alcance. ¡Mis métricas se dispararon en solo unos días!', date: '2026-02-08T12:15:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 13, user: 'Rufino de La Cruz', userImage: 'https://i.postimg.cc/tgQqwzqG/digital-product-marketplace-social-networks-13.jpg', text: '¡Se me acababan las ideas de contenido! Este curso me dio un catálogo inmenso de temas estratégicos para no quedarme nunca en blanco.', date: '2026-02-06T07:10:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 12, user: '@ShellShaman', userImage: 'https://i.postimg.cc/c4z4MSP1/digital-product-marketplace-social-networks-12.jpg', text: 'La sección de mejores prácticas me voló la cabeza. Ahora sé exactamente cómo estructurar mis videos para retener a la audiencia.', date: '2026-02-05T21:03:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 11, user: 'floralizard', userImage: 'https://i.postimg.cc/Bndbs0CN/digital-product-marketplace-social-networks-11.jpg', text: 'Tenía mi canal abandonado por falta de conocimientos técnicos. Esta guía me salvó la vida y me hizo el proceso súper sencillo.', date: '2026-02-02T17:44:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 10, user: 'Isai Moreno', userImage: 'https://i.postimg.cc/9QxPBrC4/digital-product-marketplace-social-networks-10.jpg', text: 'Empecé desde cero y en menos de una semana ya tenía mis primeros tres Shorts publicados gracias a las instrucciones de esta guía.', date: '2026-02-01T00:18:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 09, user: 'Lupita Beltran', userImage: 'https://i.postimg.cc/wxJVdqQq/digital-product-marketplace-social-networks-9.jpg', text: '¡Por fin un curso que no te abruma con tecnicismos! La guía es súper práctica y directa al grano para los que no sabemos nada.', date: '2026-01-26T07:26:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 08, user: 'Agoraby', userImage: 'https://i.postimg.cc/0y9ZfTSh/digital-product-marketplace-social-networks-8.png', text: 'Si eres principiante total, este es el mejor punto de partida. Explican todo tan claro que mi abuela podría empezar a subir videos hoy mismo.', date: '2026-01-25T09:06:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 07, user: 'Sara Balderas', userImage: 'https://i.postimg.cc/85xtmsdv/digital-product-marketplace-social-networks-7.png', text: 'Llevaba meses queriendo empezar en YouTube y me daba pánico la cámara. Esta guía me quitó el miedo y me enseñó lo fácil que es crear contenido.', date: '2026-01-24T17:27:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 06, user: 'Unimart', userImage: 'https://i.postimg.cc/6pKbP2sw/digital-product-marketplace-social-networks-6.png', text: 'Lo que más me gustó de "Cero Excusas" es que no necesitas experiencia previa. Te llevan de la mano paso a paso. ¡100% recomendada!', date: '2026-01-23T20:13:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 05, user: 'Rey Rios', userImage: 'https://i.postimg.cc/zDPdqt9h/digital-product-marketplace-social-networks-5.png', text: '¡Pensé que YouTube era solo para videos largos y complicados! Con esta guía pasé de cero conocimientos a entender exactamente cómo funciona el algoritmo de los Shorts.', date: '2026-01-22T10:05:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 04, user: 'Milton Jara', userImage: 'https://i.postimg.cc/zBzdG9zy/digital-product-marketplace-social-networks-4.jpg', text: 'Estoy satisfecho con este multipack! La calidad es muy buena y cumple totalmente lo que dice.', date: '2026-01-21T02:11:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 03, user: 'Andrea Carranza', userImage: 'https://i.postimg.cc/tTpcVs5T/digital-product-marketplace-social-networks-3.jpg', text: 'Este pack me parece alto pero creo que tambien la calidad es decir calidad-precio, contenido accesible. ¡Una compra que vale la pena!', date: '2026-01-20T08:35:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 02, user: 'Ana Garcia', userImage: 'https://i.postimg.cc/76W56SHz/digital-product-marketplace-social-networks-2.jpg', text: 'Este producto superó mis expectativas. La calidad es excelente y cumple perfectamente con lo que promete. ¡Totalmente recomendado!', date: '2026-01-18T12:11:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 01, user: 'Arturo Mendez', userImage: 'https://i.postimg.cc/GpNRTKDL/digital-product-marketplace-social-networks-1.jpg', text: 'Me encanta este producto, la calidad es excelente y cumple todas mis expectativas. Sin duda lo recomendaría a mis amigos y familiares. ¡Una gran compra!', date: '2026-01-17T10:05:00Z', replies: [] } // Comentario de hace ~6 meses   
          ]  
     }
];

// ***********************************************
// CORRECCIÓN CRÍTICA DE VARIABLES
// ***********************************************
const productFeed = document.getElementById('product-feed');
const noResultsMessage = document.getElementById('no-results');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
// ***********************************************


function savePostsToStorage() {
    localStorage.setItem('storelPosts', JSON.stringify(posts)); 
}

// =================================================================
// NUEVA FUNCIÓN DE TIEMPO RELATIVO ABREVIADO
// =================================================================

function getRelativeTime(dateString) {
    const now = new Date();
    const past = new Date(dateString);
    const seconds = Math.floor((now - past) / 1000);

    let interval = Math.floor(seconds / 31536000); // años
    if (interval >= 1) {
        return interval + "y";
    }
    interval = Math.floor(seconds / 2592000); // meses
    if (interval >= 1) {
        return interval + "mo";
    }
    interval = Math.floor(seconds / 86400); // días
    if (interval >= 1) {
        return interval + "d";
    }
    interval = Math.floor(seconds / 3600); // horas
    if (interval >= 1) {
        return interval + "h";
    }
    interval = Math.floor(seconds / 60); // minutos
    if (interval >= 1) {
        return interval + "m";
    }
    return Math.floor(seconds) + "s"; // segundos
}


// =================================================================
// LÓGICA DE RENDERIZADO PRINCIPAL
// =================================================================

function renderReplies(replies) {
    if (!replies || replies.length === 0) return '';
    return replies.map(r => {
        const exactDate = new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        const relativeTime = getRelativeTime(r.date);
        return `
        <div class="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg" data-reply-id="${r.id}">
             <div class="flex items-center justify-between space-x-3 mb-1">
                <div class="flex items-center space-x-3">
                    <img class="w-6 h-6 rounded-full object-cover" src="${r.userImage}" alt="Reply Profile">
                    <span class="font-bold text-xs">${r.user}</span>
                    <p class="text-xs text-gray-500">${exactDate} &bull; ${relativeTime}</p>
                </div>
            </div>
            <p id="reply-text-${r.id}" class="text-gray-700 dark:text-gray-300 text-xs">${r.text}</p>
        </div>
    `}).join('');
}

function getPostMedia(url, fileType, altText) {
    if (!url) {
        return `<div class="media-placeholder w-full h-full"><i class="fas fa-cloud-upload-alt text-4xl mb-4"></i><span>No preview file available</span></div>`;
    }
    switch(fileType) {
        case 'image':
            return `<img src="${url}" onerror="this.onerror=null;this.src='https://placehold.co/600x800/e2e8f0/64748b?text=Image+not+available';" alt="${altText}" class="media-content">`;
        case 'video':
            return `<video controls class="media-content" style="background: #000;"><source src="${url}" type="video/mp4">Your browser does not support the video.</video>`;
        case 'audio':
            return `<div class="w-full p-6 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center"><i class="fas fa-music text-4xl mb-4 text-blue-500"></i><audio controls class="w-full mt-4"><source src="${url}" type="audio/mpeg">Your browser does not support the audio.</audio></div>`;
        default:
            return `<div class="media-placeholder w-full h-full"><i class="fas fa-file text-4xl mb-4"></i><span>Digital File</span></div>`;
    }
}

function getFileTypeText(fileType) {
    const typeMap = {
        'image': 'Image', 'video': 'Video', 'audio': 'Audio', 'pdf': 'PDF Document', 'ebook': 'E-Book', 'archive': 'Compressed Archive'
    };
    return typeMap[fileType] || 'Digital File';
}

function initializePaymentButtons(postId) {
    const container = document.getElementById(`payment-buttons-container-${postId}`);
    if (container) {
        container.classList.add('visible');
    }

    // Usamos el paymentButtonsConfig global para obtener los delays
    paymentButtonsConfig.forEach(buttonConfig => {
        setTimeout(() => {
            const button = document.getElementById(`${buttonConfig.id}-button-${postId}`);
            if (button) {
                // El botón solo se muestra si NO tiene la clase 'hidden' inicial
                button.classList.remove('hidden'); 
            }
        }, buttonConfig.delay);
    });
}

function renderAllPosts(filteredPosts = posts) {
    if (!productFeed) return;
    
    productFeed.innerHTML = '';
    
    if (filteredPosts.length === 0) {
        if (noResultsMessage) noResultsMessage.classList.remove('hidden');
        return;
    } else {
        if (noResultsMessage) noResultsMessage.classList.add('hidden');
    }

    filteredPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // GENERACIÓN DE BOTONES DE PAGO (Versión Ultra-Segura)
const paymentButtonsHTML = paymentButtonsConfig
    .filter(btn => post.paymentOptions && post.paymentOptions[btn.id] === true)
    .map(btn => {
        return `
            <button class="payment-btn buy-button hidden bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white ${btn.color} hover:text-white"
                    data-method="${btn.id}" 
                    data-price="${post.price}" 
                    data-title="${post.title}"
                    id="${btn.id}-button-${post.id}">
                <i class="${btn.icon} text-lg"></i>
                <span>${btn.label}</span>
                <span class="text-xs">${btn.label === 'Thanks' ? 'Donation' : 'View Option'}</span>
            </button>
        `;
    }).join('');

        // --- Generate Comments HTML (Banner Reubicado) ---
        let commentsHtml = '';
        if (post.comments && post.comments.length > 0) {
            
            const commentHTMLArray = post.comments.map(c => {
                const exactDate = new Date(c.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                const relativeTime = getRelativeTime(c.date);
                
                return `
                <div id="comment-${c.id}" class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-2">
                    <div class="flex items-center justify-between space-x-3 mb-1">
                        <div class="flex items-center space-x-3">
                            <img class="w-8 h-8 rounded-full object-cover" src="${c.userImage}" alt="Comment Profile">
                            <span class="font-bold text-sm">${c.user}</span>
                            <p class="text-xs text-gray-500">${exactDate} &bull; ${relativeTime}</p>
                        </div>
                    </div>
                    <p id="comment-text-${c.id}" class="text-gray-700 dark:text-gray-300 text-sm">${c.text}</p>
                    <button onclick="toggleReplyBox(${c.id})" class="text-blue-500 text-xs mt-2 hover:underline">Reply</button>
                    <div id="reply-box-${c.id}" class="hidden mt-2 flex space-x-2">
                        <input type="text" id="reply-input-${c.id}" class="flex-grow p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm" placeholder="Add a reply...">
                        <button onclick="addReply(${post.id}, ${c.id})" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">Post</button>
                    </div>
                    <div id="replies-list-${c.id}" class="pl-4 mt-2 border-l border-gray-300 dark:border-gray-600 space-y-2">
                        ${renderReplies(c.replies)}
                    </div>
                </div>
            `});

            // Inject the banner between the first and second comment if at least two exist
            if (commentHTMLArray.length >= 2) {
                commentHTMLArray.splice(1, 0, 
                    `<div class="ad-banner text-xs sm:text-sm my-4">Advertisement: Between Comments! (Ad X)</div>`
                );
            }

            commentsHtml = commentHTMLArray.join('');
        } else {
            commentsHtml = '<p class="text-sm text-gray-500 dark:text-gray-400">Be the first to comment.</p>';
        }


        // --- FULL POST HTML ---
        card.innerHTML = `
            <div class="ad-banner text-xs sm:text-sm mb-4">Advertisement: Within Post (Ad 2)</div>

            <div class="flex items-center space-x-3 mb-4">
                <div class="flex items-center space-x-3">
                    <img class="w-12 h-12 rounded-full object-cover" src="${post.userImage}" alt="Profile">
                    <div class="flex flex-col w-full">
                        <p class="text-lg font-semibold">${post.user}</p>
                    </div>
                </div>
            </div>

            <h2 class="text-2xl font-bold">${post.title}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${post.description}</p>
            
            <div class="mb-4 text-xs text-blue-500">
                ${post.tags ? post.tags.map(tag => `<span class="mr-2 opacity-75 cursor-pointer hover:underline" onclick="filterPosts('#${tag}')">#${tag}</span>`).join('') : ''}
            </div>
            
            <div class="ad-banner text-xs sm:text-sm mt-6 mb-4">Advertisement: Under Description (Ad 3)</div>

            <div class="w-full rounded-lg overflow-hidden my-6">
                <div class="media-container">
                    <div class="media-content">
                        ${getPostMedia(post.mediaUrl, post.fileType, post.title)}
                    </div>
                </div>
            </div>

            <div id="file-info-card-${post.id}" class="file-info-card ${(!post.fileSize || !post.showFileInfo) ? 'hidden' : ''}">
                <div class="flex justify-between items-center">
                    <div>
                        <h4 class="font-semibold text-blue-700 dark:text-blue-300">File Information</h4>
                        <p class="text-xs text-blue-600 dark:text-blue-400">Type: ${getFileTypeText(post.fileType)} | Size: ${post.fileSize || 'Unknown'}</p>
                    </div>
                    ${(post.isFree && post.fileUrl) ? `<a href="${post.fileUrl}" download class="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition-colors">Download FREE</a>` : ''}
                </div>
            </div>

            <div class="flex items-center justify-between mb-4">
                <span class="text-2xl font-bold ${post.isFree ? 'text-green-600' : 'text-blue-600'}">${post.isFree ? 'FREE' : '$' + post.price}</span>
           
                <div class="flex items-center space-x-4">
                    <button onclick="toggleLike(${post.id}, this)" class="like-button text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors ${localStorage.getItem(`liked-${post.id}`) === 'true' ? 'text-red-500' : ''}">
                        <i class="fas fa-heart text-2xl"></i>
                    </button>
                    <span class="likes-count text-lg font-medium">${post.likes}</span>
                    </div>
            </div>
            
            <div class="ad-banner text-xs sm:text-sm mt-6">Advertisement: Above Buttons (Ad 4)</div>
            
            <!-- COMPLEMENTO INDEPENDIENTE: INFORMACIÓN EXTENDIDA (LANDING VIEW) -->
            ${post.landingContent && post.landingContent.show ? `
                <div class="my-5 p-5 border border-blue-100 dark:border-blue-900/50 bg-blue-50/30 dark:bg-gray-800/40 rounded-2xl shadow-sm landing-section-fade">
                    <div class="flex items-center mb-4">
                        <div class="w-1 h-6 bg-blue-600 rounded-full mr-3"></div>
                        <h3 class="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">Detalles del Producto</h3>
                    </div>
                    
                    <div class="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        ${post.landingContent.extendedDescription}
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3">
                        ${post.landingContent.features.map(f => `
                            <div class="flex flex-col p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                <span class="text-[9px] uppercase text-gray-400 font-extrabold mb-1">${f.label}</span>
                                <span class="text-xs font-semibold text-gray-800 dark:text-gray-100">${f.value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            <!-- FIN DEL COMPLEMENTO -->

            <a href="${post.fileUrl}" target="_blank" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-center text-lg font-bold hover:bg-blue-700 transition-colors block mx-auto my-4">
                <i class="fas fa-shopping-bag mr-2"></i> Buy Now!
            </a>

            <div id="payment-buttons-container-${post.id}" class="payment-buttons-container flex justify-center space-x-2 my-4 flex-wrap gap-2">
                ${paymentButtonsHTML}
            </div>
            
            <div class="ad-banner text-xs sm:text-sm mt-6 mb-4">Advertisement: Below Buttons (Ad 5)</div>
            
            <div class="mt-6">
                <h3 class="text-xl font-semibold mb-4">Comments (${post.comments ? post.comments.length : 0})</h3>
                <div id="comments-list-${post.id}" class="space-y-4">
                    ${commentsHtml}
                </div>
                <div class="mt-4 flex space-x-2">
                    <input type="text" id="comment-input-${post.id}" class="flex-grow p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm" placeholder="Add a comment...">
                    <button onclick="addComment(${post.id})" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">Post</button>
                </div>
            </div>
        `;

        productFeed.appendChild(card);
        initializePaymentButtons(post.id); 
    });
}

// =================================================================
// AUXILIARY AND INTERACTION FUNCTIONS
// =================================================================

function showMessage(text) {
    const modal = document.getElementById('message-modal-overlay');
    const modalText = document.getElementById('message-modal-text');
    if (modal && modalText) {
        modalText.textContent = text;
        modal.classList.remove('hidden');
    } else {
        alert(text);
    }
}

function filterPosts(query) {
    let term = query.toLowerCase().trim();
    if (term.startsWith('#')) {
        term = term.substring(1); 
    }
    
    if (term === '') {
        renderAllPosts(posts);
        return;
    }
    
    const filtered = posts.filter(post => {
        const titleMatch = post.title.toLowerCase().includes(term);
        const descriptionMatch = post.description.toLowerCase().includes(term);
        const tagsMatch = post.tags && post.tags.some(tag => tag.toLowerCase().includes(term));
        return titleMatch || descriptionMatch || tagsMatch;
    });

    renderAllPosts(filtered);
}

function toggleReplyBox(commentId) {
    const replyBox = document.getElementById(`reply-box-${commentId}`);
    if (replyBox) {
        replyBox.classList.toggle('hidden');
    }
}

function toggleLike(id, button) {
    const post = posts.find(p => p.id === id);
    if (post) {
        const isLiked = localStorage.getItem(`liked-${id}`) === 'true'; 
        if (isLiked) {
            post.likes--;
            localStorage.setItem(`liked-${id}`, 'false');
        } else {
            post.likes++;
            localStorage.setItem(`liked-${id}`, 'true');
        }
        savePostsToStorage();
        const likesCountElement = button.parentElement.querySelector('.likes-count');
        if (likesCountElement) {
            likesCountElement.textContent = post.likes;
        }
        button.classList.toggle('text-red-500');
    }
}

// =================================================================
// FUNCIONES DE COMENTARIOS 
// =================================================================

function addComment(postId) {
    const post = posts.find(p => p.id === postId);
    const inputElement = document.getElementById(`comment-input-${postId}`);
    const commentText = inputElement ? inputElement.value.trim() : '';

    if (!commentText || !post) {
        if (inputElement) inputElement.value = '';
        return;
    }

    const newComment = {
        id: Date.now(), // ID único basado en la hora
        user: 'You', // El usuario es 'You' (tú) ya que es local
        userImage: 'https://placehold.co/30x30/059669/d1fae5?text=Y', // Ícono de 'You'
        text: commentText,
        date: new Date().toISOString(), // Guarda la fecha en formato ISO
        replies: []
    };

    post.comments.push(newComment);
    savePostsToStorage();
    renderAllPosts(); // Vuelve a dibujar todos los posts para actualizar el feed y el contador
    showMessage('Comment added successfully!');
}

function addReply(postId, commentId) {
    const post = posts.find(p => p.id === postId);
    const comment = post ? post.comments.find(c => c.id === commentId) : null;
    const inputElement = document.getElementById(`reply-input-${commentId}`);
    const replyText = inputElement ? inputElement.value.trim() : '';

    if (!replyText || !comment) {
        if (inputElement) inputElement.value = '';
        return;
    }

    const newReply = {
        id: Date.now(), // ID único
        user: 'Smart', // El usuario es 'You' (tú) ya que es local
        userImage: 'https://i.postimg.cc/P5p883pm/Adm-digital-product-marketplace-social-networks-(modi).png', // Ícono de 'You'
        text: replyText,
        date: new Date().toISOString() // Guarda la fecha en formato ISO
    };

    if (!comment.replies) {
        comment.replies = [];
    }
    
    comment.replies.push(newReply);
    savePostsToStorage();
    renderAllPosts(); // Vuelve a dibujar todos los posts para actualizar el feed
    showMessage('Reply added successfully!');
}


// =================================================================
// DARK MODE AND INITIAL LOAD
// =================================================================

const themeToggle = document.getElementById('theme-toggle');

function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', 'light');
    }
}

function initializeTheme() {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    
    let isDark = false;

    if (storedTheme === 'dark') {
        isDark = true;
    } else if (storedTheme === 'light') {
        isDark = false;
    } else if (prefersDark) {
        isDark = true;
    }

    applyTheme(isDark);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentIsDark = body.classList.contains('dark');
            applyTheme(!currentIsDark); 
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    renderAllPosts(); 
});

// Este código detecta los clics de forma profesional y segura
document.addEventListener('click', function(e) {
    // Verificamos si lo que se clickeó es uno de nuestros botones de pago
    const btn = e.target.closest('.payment-btn');
    if (btn) {
        const method = btn.getAttribute('data-method');
        const price = btn.getAttribute('data-price');
        const title = btn.getAttribute('data-title');
        
        // Llamamos a la función de pago
        handlePaymentClick(method, price, title);
    }
});

function handlePaymentClick(method, price, title) {
    console.log("¡Clic exitoso en:", method);

    let url = "";
    // --- TUS DATOS REALES ---
    const miTelefono = "521234567890"; 
    const miTelegram = "TuUsuario";     
    const miPaypal = "TuUsuario";

    // --- ENLACES A TUS DOCUMENTOS PDF (Súbelos a Drive/Dropbox y pega el link aquí) ---
    const pdfBanco = "https://tu-sitio.com/instrucciones-banco.pdf";
    const pdfCrypto = "https://tu-sitio.com/instrucciones-crypto.pdf";

    if (method === 'whatsapp') {
        url = "https://wa.me/" + miTelefono + "?text=" + encodeURIComponent("Hola, quiero información de: " + title);
    
    } else if (method === 'telegram') {
        url = "https://t.me/" + miTelegram;
    
    } else if (method === 'paypal') {
        url = "https://www.paypal.com/paypalme/" + miPaypal + "/" + price;
    
    } else if (method === 'donate') {
        // Puedes usar un link de PayPal Donate o Ko-fi
        url = "https://www.paypal.com/donate?hosted_button_id=TU_ID_AQUI";

    } else if (method === 'bank') {
        // En lugar de alert, abrimos el PDF profesional
        url = pdfBanco;

    } else if (method === 'crypto') {
        // Abrimos el PDF con el QR de tu Wallet
        url = pdfCrypto;
    }

    // Ejecución de la apertura
    if (url) {
        window.open(url, '_blank');
    }
}
