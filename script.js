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
        user: 'Smart50',
        userImage: 'https://i.postimg.cc/P5p883pm/Adm-digital-product-marketplace-social-networks-(modi).png',
        title: 'YouTube Shorts Guia "Cero Excusas"',
        description: 'Producto digital: "videos Shorts en YouTube". Plan integral: Cero conocimientos, las mejores prácticas para maximizar creación de contenido de forma estratégica,ideas de contenido, formato, duración, optimización, análisis, resolución de problemas y estrategias de expansión comercial. Construye un ecosistema sostenible y escalable en una plataforma con un alto volumen de tráfico. Segmento vertical para la monetización de ingresos. Herramientas de contenido con inteligencia artificial. Domina rápidamente visibilidad y participación en crecimiento de audiencia, impulsar marcas, promoción de negocios de comercio electrónico, etc.',
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
            { id: 67, user: '', userImage: '', text: '', date: '2026-06-12T00:39:00Z', replies: [] }, // Comentario de hace ~24 horas
            { id: 66, user: '', userImage: '', text: '', date: '2026-06-09T11:21:00Z', replies: [] }, // Comentario de hace ~72 horas
            { id: 65, user: '', userImage: '', text: '', date: '2026-06-08T09:00:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 64, user: '', userImage: '', text: '', date: '2026-06-07T17:11:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 63, user: '', userImage: '', text: '', date: '2026-06-06T11:21:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 62, user: '', userImage: '', text: '', date: '2026-06-05T09:00:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 61, user: '', userImage: '', text: '', date: '2026-06-04T17:11:00Z', replies: [] }, // Comentario de hace ~1 semana
            { id: 60, user: '', userImage: '', text: '', date: '2026-06-03T06:30:00Z', replies: [] }, // Comentario de hace ~2 semanas
            { id: 59, user: '', userImage: '', text: '', date: '2026-06-02T10:45:00Z', replies: [] }, // Comentario de hace ~2 semanas
            { id: 58, user: '', userImage: '', text: '', date: '2026-06-01T12:14:00Z', replies: [] }, // Comentario de hace ~2 semanas
            { id: 57, user: '', userImage: '', text: '', date: '2026-05-30T10:51:00Z', replies: [] } // Comentario de hace ~1 mes
            { id: 56, user: '', userImage: '', text: '', date: '2026-05-29T13:41:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 55, user: '', userImage: '', text: '', date: '2026-05-28T00:33:00Z', replies: [] } // Comentario de hace ~1 mes
            { id: 54, user: '', userImage: '', text: '', date: '2026-05-26T11:48:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 53, user: '', userImage: '', text: '', date: '2026-05-25T16:02:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 52, user: '', userImage: '', text: '', date: '2026-05-24T09:13:00Z', replies: [] } // Comentario de hace ~1 mes
            { id: 51, user: '', userImage: '', text: '', date: '2026-05-21T13:46:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 50, user: '', userImage: '', text: '', date: '2026-05-18T17:04:00Z', replies: [] } // Comentario de hace ~1 mes
            { id: 49, user: '', userImage: '', text: '', date: '2026-05-15T01:05:00Z', replies: [] }, // Comentario de hace ~1 mes
            { id: 48, user: '', userImage: '', text: '', date: '2026-05-09T13:37:00Z', replies: [] } // Comentario de hace ~2 meses
            { id: 47, user: '', userImage: '', text: '', date: '2026-05-08T08:27:00Z', replies: [] }, // Comentario de hace ~2 meses
            { id: 46, user: '', userImage: '', text: '', date: '2026-05-05T07:20:00Z', replies: [] } // Comentario de hace ~2 meses
            { id: 45, user: '', userImage: '', text: '', date: '2026-05-04T21:29:00Z', replies: [] }, // Comentario de hace ~2 meses
            { id: 44, user: '', userImage: '', text: '', date: '2026-05-03T00:17:00Z', replies: [] } // Comentario de hace ~2 meses
            { id: 43, user: '', userImage: '', text: '', date: '2026-04-30T11:12:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 42, user: '', userImage: '', text: '', date: '2026-04-29T06:17:00Z', replies: [] } // Comentario de hace ~3 meses
            { id: 41, user: '', userImage: '', text: '', date: '2026-04-27T11:29:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 40, user: '', userImage: '', text: '', date: '2026-04-26T06:02:00Z', replies: [] } // Comentario de hace ~3 meses
            { id: 39, user: '', userImage: '', text: '', date: '2026-04-23T11:08:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 38, user: '', userImage: '', text: '', date: '2026-04-15T05:07:00Z', replies: [] } // Comentario de hace ~3 meses
            { id: 37, user: '', userImage: '', text: '', date: '2026-04-14T11:25:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 36, user: '', userImage: '', text: '', date: '2026-04-09T6:07:00Z', replies: [] } // Comentario de hace ~3 meses
            { id: 35, user: '', userImage: '', text: '', date: '2026-04-07T11:25:00Z', replies: [] }, // Comentario de hace ~3 meses
            { id: 34, user: '', userImage: '', text: '', date: '2026-04-02T06:07:00Z', replies: [] } // Comentario de hace ~3 meses
            { id: 33, user: '', userImage: '', text: '', date: '2026-03-28T23:01:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 32, user: '', userImage: '', text: '', date: '2026-03-27T13:28:00Z', replies: [] } // Comentario de hace ~4 meses
            { id: 31, user: '', userImage: '', text: '', date: '2026-03-25T02:08:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 30, user: '', userImage: '', text: '', date: '2026-03-20T12:15:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 29, user: '', userImage: '', text: '', date: '2026-03-17T01:55:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 28, user: '', userImage: '', text: '', date: '2026-03-14T06:07:00Z', replies: [] } // Comentario de hace ~4 meses
            { id: 27, user: '', userImage: '', text: '', date: '2026-03-08T23:01:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 26, user: '', userImage: '', text: '', date: '2026-03-07T13:28:00Z', replies: [] } // Comentario de hace ~4 meses
            { id: 25, user: '', userImage: '', text: '', date: '2026-03-05T02:08:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 24, user: '', userImage: '', text: '', date: '2026-03-04T12:15:00Z', replies: [] }, // Comentario de hace ~4 meses
            { id: 23, user: '', userImage: '', text: '', date: '2026-02-28T06:10:00Z', replies: [] } // Comentario de hace ~5 meses
            { id: 22, user: '', userImage: '', text: '', date: '2026-02-26T21:03:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 21, user: '', userImage: '', text: '', date: '2026-02-25T17:44:00Z', replies: [] } // Comentario de hace ~5 meses
            { id: 20, user: '', userImage: '', text: '', date: '2026-02-22T01:11:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 19, user: '', userImage: '', text: '', date: '2026-02-18T01:55:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 18, user: '', userImage: '', text: '', date: '2026-02-16T06:07:00Z', replies: [] } // Comentario de hace ~5 meses
            { id: 17, user: '', userImage: '', text: '', date: '2026-02-15T23:01:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 16, user: '', userImage: '', text: '', date: '2026-02-12T13:28:00Z', replies: [] } // Comentario de hace ~5 meses
            { id: 15, user: '', userImage: '', text: '', date: '2026-02-11T00:03:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 14, user: '', userImage: '', text: '', date: '2026-02-08T12:15:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 13, user: '', userImage: '', text: '', date: '2026-02-06T07:10:00Z', replies: [] } // Comentario de hace ~5 meses
            { id: 12, user: '', userImage: '', text: '', date: '2026-02-05T21:03:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 11, user: '', userImage: '', text: '', date: '2026-02-02T17:44:00Z', replies: [] } // Comentario de hace ~5 meses
            { id: 10, user: '', userImage: '', text: '', date: '2026-02-01T00:18:00Z', replies: [] }, // Comentario de hace ~5 meses
            { id: 09, user: '', userImage: '', text: '', date: '2026-01-26T07:26:00Z', replies: [] } // Comentario de hace ~6 meses
            { id: 08, user: '', userImage: '', text: '', date: '2026-01-25T09:06:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 07, user: '', userImage: '', text: '', date: '2026-01-24T17:27:00Z', replies: [] } // Comentario de hace ~6 meses
            { id: 06, user: '', userImage: '', text: '', date: '2026-01-23T20:13:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 05, user: '', userImage: '', text: '', date: '2026-01-22T10:05:00Z', replies: [] } // Comentario de hace ~6 meses
            { id: 04, user: '', userImage: '', text: '', date: '2026-01-21T02:11:00Z', replies: [] }, // Comentario de hace ~6 meses
            { id: 03, user: '', userImage: '', text: '', date: '2026-01-20T08:35:00Z', replies: [] } // Comentario de hace ~6 meses
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
        user: 'You', // El usuario es 'You' (tú) ya que es local
        userImage: 'https://placehold.co/30x30/059669/d1fae5?text=Y', // Ícono de 'You'
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
