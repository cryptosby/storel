// =================================================================
// CONFIGURACIÓN Y DATA ESTATICA
// =================================================================

// Configuración de botones de pago con retrasos (permanece)
const paymentButtonsConfig = [
    { id: 'whatsapp', show: true, delay: 5000, icon: 'fab fa-whatsapp', label: 'WhatsApp', color: 'hover:bg-green-500' },
    { id: 'telegram', show: true, delay: 10000, icon: 'fab fa-telegram-plane', label: 'Telegram', color: 'hover:bg-blue-500' },
    { id: 'paypal', show: true, delay: 15000, icon: 'fab fa-paypal', label: 'Paypal', color: 'hover:bg-blue-600' },
    { id: 'bank', show: false, delay: 20000, icon: 'fas fa-university', label: 'Bank', color: 'hover:bg-gray-600' },
    { id: 'donate', show: true, delay: 25000, icon: 'fas fa-gift', label: 'Gracias', color: 'hover:bg-orange-500' },
    { id: 'crypto', show: false, delay: 30000, icon: 'fas fa-bitcoin', label: 'Crypto', color: 'hover:bg-yellow-500' }
];

// Carga los posts desde localStorage o usa los valores por defecto
let posts = JSON.parse(localStorage.getItem('infinityScrollPosts')) || [
    {
        id: 1,
        user: 'Pro User',
        userImage: 'https://placehold.co/40x40/94a3b8/e2e8f0?text=U',
        title: 'Creative Photography "Inner Cosmos"',
        description: 'Un viaje visual a través de la galaxia. Perfecto para fondos de pantalla o impresiones de alta calidad. Archivo PNG.',
        mediaUrl: 'https://placehold.co/800x600/1e293b/d4d4d8?text=Inner+Cosmos', // <-- URL de IMAGEN/VIDEO
        tags: ['foto', 'cosmos', 'galaxia', 'png', 'wallpaper', 'arte'], 
        fileUrl: 'https://placehold.co/600x800/1e293b/d4d4d8?text=Inner+Cosmos', // Enlace de pago/descarga
        fileType: 'image',
        fileSize: '2.4 MB',
        price: '20',
        isFree: false,
        showFileInfo: true,
        likes: 124,
        comments: [
            { id: 101, user: 'Ana G.', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=A', text: '¡Increíble! Amo la profundidad de los colores.', date: '2024-09-05', replies: [] },
            { id: 102, user: 'Luis V.', userImage: 'https://placehold.co/30x30/bfdbfe/1d4ed8?text=L', text: 'Compré la foto, vale cada centavo. Excelente trabajo!', date: '2024-09-05', replies: [] }
        ]
    },
    {
        id: 2,
        user: 'Ebook Creator',
        userImage: 'https://placehold.co/40x40/94a3b8/e2e8f0?text=E',
        title: 'Guía de Marketing Digital para Principiantes',
        description: 'Ebook en PDF de 50 páginas con estrategias y herramientas clave. Aprende a promocionar tu negocio online.',
        mediaUrl: 'https://placehold.co/800x600/10b981/e5e7eb?text=Ebook+Marketing', // URL de la cubierta
        tags: ['ebook', 'marketing', 'pdf', 'negocio', 'guia', 'online', 'video'], 
        fileUrl: 'https://ejemplo.payhip.com/p/marketing-guide', // Enlace de pago/descarga
        fileType: 'ebook',
        fileSize: '15.2 MB',
        price: '15.99',
        isFree: false,
        showFileInfo: true,
        likes: 45,
        comments: []
    }
    // AÑADE TUS NUEVOS POSTS AQUÍ
];

const productFeed = document.getElementById('product-feed');
const noResultsMessage = document.getElementById('no-results');

function savePostsToStorage() {
    localStorage.setItem('infinityScrollPosts', JSON.stringify(posts));
}

// =================================================================
// LÓGICA DE RENDERIZADO Y FILTRADO (CLAVE DEL CAMBIO)
// =================================================================

// NUEVA FUNCIÓN: RENDERIZA TODOS LOS POSTS (reemplaza renderSinglePost)
function renderAllPosts(filteredPosts = posts) {
    if (!productFeed) return;
    
    productFeed.innerHTML = '';
    
    if (filteredPosts.length === 0) {
        noResultsMessage.classList.remove('hidden');
        return;
    } else {
        noResultsMessage.classList.add('hidden');
    }

    // Contadores para los anuncios 
    let adCount = 2; // Empieza desde Ad 2, ya que Ad 1 y Ad 7 están en HTML

    filteredPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // --- Anuncios Intermedios ---
        const adBanners = {
            3: `<div class="ad-banner text-xs sm:text-sm mt-6 mb-4">Publicidad: Banner bajo descripción (Ad 3)</div>`,
            4: `<div class="ad-banner text-xs sm:text-sm mt-6">Publicidad: Banner sobre botones (Ad 4)</div>`,
            5: `<div class="ad-banner text-xs sm:text-sm mt-6 mb-4">Publicidad: Banner bajo botones (Ad 5)</div>`,
            2: `<div class="ad-banner text-xs sm:text-sm mb-4">Publicidad: Banner dentro de post (Ad 2)</div>`
        };

        let postContent = '';

        // Ad 2
        postContent += adBanners[2];

        // Generar botones de pago basados en la configuración
        const paymentButtons = paymentButtonsConfig.filter(btn => btn.show).map(btn => `
            <button onclick="window.open('${post.fileUrl}', '_blank')" class="buy-button hidden bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white ${btn.color} hover:text-white">
                <i class="${btn.icon} text-lg"></i>
                <span>${btn.label}</span>
                <span class="text-xs">${btn.label === 'Gracias' ? 'Donativo' : 'Comprar Ahora'}</span>
            </button>
        `).join('');

        postContent += `
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
            
            ${adBanners[3]}

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
                        <h4 class="font-semibold text-blue-700 dark:text-blue-300">Información del Archivo</h4>
                        <p class="text-sm text-blue-600 dark:text-blue-400">Tipo: ${getFileTypeText(post.fileType)} | Tamaño: ${post.fileSize || 'Desconocido'}</p>
                    </div>
                    ${(post.isFree && post.fileUrl) ? `<a href="${post.fileUrl}" download class="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition-colors">Descarga GRATIS</a>` : ''}
                </div>
            </div>

            <div class="flex items-center justify-between mb-4">
                <span class="text-2xl font-bold ${post.isFree ? 'text-green-600' : 'text-blue-600'}">${post.isFree ? 'GRATIS' : '$' + post.price}</span>
           
                <div class="flex items-center space-x-4">
                    <button onclick="toggleLike(${post.id}, this)" class="like-button text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors ${localStorage.getItem(`liked-${post.id}`) === 'true' ? 'text-red-500' : ''}">
                        <i class="fas fa-heart text-2xl"></i>
                    </button>
                    <span class="likes-count text-lg font-medium">${post.likes}</span>
                    <button onclick="sharePost(${post.id})" class="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors">
                        <i class="fas fa-share-alt text-2xl"></i>
                    </button>
                </div>
            </div>
        `; 

        // Ad 4: Banner sobre botones
        postContent += adBanners[4];

        // Contenedor de Botones de Pago
        postContent += `
            <div id="payment-buttons-container-${post.id}" class="payment-buttons-container flex justify-center space-x-2 my-4 flex-wrap gap-2">
                ${paymentButtons}
            </div>
        `;
        
        // Ad 5: Banner bajo botones
        postContent += adBanners[5];

        // --- Ad Adicional: Antes de comentarios (Contaría como parte del post) ---
        postContent += `<div class="ad-banner text-xs sm:text-sm mt-6">Publicidad: Banner antes de comentarios!</div>`;
        
        // --- Sección de Comentarios ---
        const commentsHtml = post.comments && post.comments.length > 0 ?
            post.comments.map(c => `
                <div id="comment-${c.id}" class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-2">
                    <div class="flex items-center justify-between space-x-3 mb-1">
                        <div class="flex items-center space-x-3">
                            <img class="w-8 h-8 rounded-full object-cover" src="${c.userImage}" alt="Comment Profile">
                            <span class="font-bold text-sm">${c.user}</span>
                            <p class="text-xs text-gray-500">${new Date(c.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                        </div>
                    </div>
                    <p id="comment-text-${c.id}" class="text-gray-700 dark:text-gray-300 text-sm">${c.text}</p>
                    <button onclick="toggleReplyBox(${c.id})" class="text-blue-500 text-xs mt-2 hover:underline">Responder</button>
                    <div id="reply-box-${c.id}" class="hidden mt-2 flex space-x-2">
                        <input type="text" id="reply-input-${c.id}" class="flex-grow p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm" placeholder="Añadir respuesta...">
                        <button onclick="addReply(${post.id}, ${c.id})" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">Post</button>
                    </div>
                    <div id="replies-list-${c.id}" class="pl-4 mt-2 border-l border-gray-300 dark:border-gray-600 space-y-2">
                        ${renderReplies(c.replies)}
                    </div>
                </div>
            `).join('') : '<p class="text-sm text-gray-500 dark:text-gray-400">Sé el primero en comentar.</p>';

        postContent += `
            <div class="mt-6">
                <h3 class="text-xl font-semibold mb-4">Comentarios (${post.comments ? post.comments.length : 0})</h3>
                <div id="comments-list-${post.id}" class="space-y-4">
                    ${commentsHtml}
                </div>
                <div class="mt-4 flex space-x-2">
                    <input type="text" id="comment-input-${post.id}" class="flex-grow p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm" placeholder="Añadir un comentario...">
                    <button onclick="addComment(${post.id})" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">Post</button>
                </div>
            </div>
        `;

        card.innerHTML = postContent;
        productFeed.appendChild(card);
        // Inicializar botones de pago para el post actual
        initializePaymentButtons(post.id);
        
        // Lógica de ads: Insertar Ad adicional cada 2 o 3 posts (depende del diseño)
        adCount++;
        if (adCount % 2 === 0) {
             const adElement = document.createElement('div');
             adElement.className = 'ad-banner text-xs sm:text-sm mt-10 mb-10';
             adElement.innerHTML = `Publicidad: Banner entre posts (Ad ${adCount})`;
             productFeed.appendChild(adElement);
        }
    });
}

// =================================================================
// NUEVA FUNCIONALIDAD: BÚSQUEDA Y FILTRADO
// =================================================================

function filterPosts(query) {
    let term = query.toLowerCase().trim();
    
    // Si la búsqueda viene de un hashtag clicado, extraemos la palabra
    if (term.startsWith('#')) {
        term = term.substring(1); 
    }
    
    // Si el término es muy corto y no es un hashtag, no filtramos (solo si es > 0 para evitar cargar todo de golpe)
    if (term.length < 3 && term.length > 0 && !query.startsWith('#')) {
        // Muestra los posts si el término es muy corto, pero evita buscar en cada tecla
        renderAllPosts(posts);
        return;
    }
    
    // Si el término está vacío, muestra todos los posts
    if (term === '') {
        renderAllPosts(posts);
        return;
    }

    // Filtrar posts
    const filtered = posts.filter(post => {
        const titleMatch = post.title.toLowerCase().includes(term);
        const descriptionMatch = post.description.toLowerCase().includes(term);
        
        // Buscar coincidencia en las etiquetas/tags
        const tagsMatch = post.tags && post.tags.some(tag => tag.toLowerCase().includes(term));
        
        return titleMatch || descriptionMatch || tagsMatch;
    });

    renderAllPosts(filtered);
}

// =================================================================
// FUNCIONES AUXILIARES (SIMPLIFICADAS SIN ADMIN)
// =================================================================

// Gets HTML for the file preview (Adaptado del código fuente para usar mediaUrl)
function getPostMedia(url, fileType, altText) {
    if (!url) {
        return `<div class="media-placeholder w-full h-full"><i class="fas fa-cloud-upload-alt text-4xl mb-4"></i><span>No hay archivo de previsualización</span></div>`;
    }

    if (fileType) {
        switch(fileType) {
            case 'image':
                return `<img src="${url}" onerror="this.onerror=null;this.src='https://placehold.co/600x800/e2e8f0/64748b?text=Image+not+available';" alt="${altText}" class="w-full h-auto max-h-96 object-contain rounded-lg">`;
            case 'video':
                // Usa <video> con URL directa (MP4, WEBM)
                return `<video controls class="w-full h-auto max-h-96 rounded-lg" style="background: #000;"><source src="${url}" type="video/mp4">Tu navegador no soporta el video.</video>`;
            case 'audio':
                return `<div class="w-full p-6 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center"><i class="fas fa-music text-4xl mb-4 text-blue-500"></i><audio controls class="w-full mt-4"><source src="${url}" type="audio/mpeg">Tu navegador no soporta el audio.</audio></div>`;
            case 'pdf':
                return `<div class="media-placeholder w-full h-full bg-red-50 dark:bg-red-900/20"><i class="fas fa-file-pdf text-4xl mb-4 text-red-500"></i><span>Documento PDF</span><p class="text-sm mt-2 text-center">Previsualización no disponible.</p></div>`;
            case 'ebook':
                return `<div class="media-placeholder w-full h-full bg-green-50 dark:bg-green-900/20"><i class="fas fa-book text-4xl mb-4 text-green-500"></i><span>E-Book</span></div>`;
            case 'archive':
                return `<div class="media-placeholder w-full h-full bg-yellow-50 dark:bg-yellow-900/20"><i class="fas fa-file-archive text-4xl mb-4 text-yellow-500"></i><span>Archivo Comprimido</span></div>`;
            default:
                // Fallback a detección por extensión para URLs sin fileType definido
                const extension = url.split('.').pop().toLowerCase().split('?')[0];
                return `<div class="media-placeholder w-full h-full"><i class="fas fa-file text-4xl mb-4"></i><span>Archivo Digital: ${extension.toUpperCase()}</span></div>`;
        }
    }
}

// Renders replies for a comment (sin controles de admin)
function renderReplies(replies) {
    if (!replies || replies.length === 0) return '';
    return replies.map(r => `
        <div class="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg" data-reply-id="${r.id}">
             <div class="flex items-center justify-between space-x-3 mb-1">
                <div class="flex items-center space-x-3">
                    <img class="w-6 h-6 rounded-full object-cover" src="${r.userImage}" alt="Reply Profile">
                    <span class="font-bold text-xs">${r.user}</span>
                    <p class="text-xs text-gray-500">${new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                </div>
            </div>
            <p id="reply-text-${r.id}" class="text-gray-700 dark:text-gray-300 text-xs">${r.text}</p>
        </div>
    `).join('');
}


// Initialize payment buttons for each post card
function initializePaymentButtons(postId) {
    paymentButtonsConfig.forEach(buttonConfig => {
        if (buttonConfig.show) {
            setTimeout(() => {
                const button = document.getElementById(`${buttonConfig.id}-button-${postId}`);
                if (button) {
                    button.classList.remove('hidden');
                }
            }, buttonConfig.delay);
        }
    });

    // Make container visible after first button appears
    setTimeout(() => {
        const container = document.getElementById(`payment-buttons-container-${postId}`);
        if (container) {
            container.classList.add('visible');
        }
    }, Math.min(...paymentButtonsConfig.filter(b => b.show).map(b => b.delay)));
}

// [Mantenidas] Funciones de Interacción (Like, Share, Comment, Reply)

function toggleReplyBox(commentId) {
    const replyBox = document.getElementById(`reply-box-${commentId}`);
    if (replyBox) {
        replyBox.classList.toggle('hidden');
    }
}

function toggleLike(id, button) {
    const post = posts.find(p => p.id === id);
    if (post) {
        // Usa localStorage para recordar si fue likeado
        const isLiked = localStorage.getItem(`liked-${id}`) === 'true'; 
        if (isLiked) {
            post.likes--;
            localStorage.setItem(`liked-${id}`, 'false');
        } else {
            post.likes++;
            localStorage.setItem(`liked-${id}`, 'true');
        }
        savePostsToStorage();
        renderAllPosts(); // Volver a renderizar para que el contador y el botón se actualicen correctamente
    }
}

function sharePost(id) {
    const currentUrl = window.location.href;
    const tempInput = document.createElement('textarea');
    tempInput.value = currentUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');
        showMessage('URL de la publicación copiada al portapapeles!');
    } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
        showMessage('Error al copiar la URL. Por favor, cópiala manualmente.');
    } finally {
        document.body.removeChild(tempInput);
    }
}

function addComment(id) {
    const commentInput = document.getElementById(`comment-input-${id}`);
    const commentText = commentInput.value.trim();
    if (commentText) {
        const post = posts.find(p => p.id === id);
        const newCommentId = Date.now();
        const newComment = { 
            id: newCommentId, 
            user: 'Visitante', 
            userImage: 'https://placehold.co/30x30/bfdbfe/1d4ed8?text=V', 
            text: commentText, 
            date: new Date().toISOString().split('T')[0], 
            replies: [] 
        };
        post.comments.push(newComment);
        savePostsToStorage();
        renderAllPosts(); // Vuelve a renderizar para ver el nuevo comentario
        commentInput.value = '';
    }
}

function addReply(postId, commentId) {
    const replyInput = document.getElementById(`reply-input-${commentId}`);
    const replyText = replyInput.value.trim();
    if (!replyText) return;

    const post = posts.find(p => p.id === postId);
    const parentComment = post.comments.find(c => c.id === commentId);

    if (parentComment) {
        const newReplyId = Date.now();
        const newReply = { 
            id: newReplyId, 
            user: 'Visitante', 
            userImage: 'https://placehold.co/24x24/fecaca/991b1b?text=R', 
            text: replyText, 
            date: new Date().toISOString().split('T')[0] 
        };
        parentComment.replies.push(newReply);
        savePostsToStorage();
        renderAllPosts(); // Vuelve a renderizar para ver la respuesta
        toggleReplyBox(commentId);
    }
}


// [Mantenidas] Funciones Auxiliares

function getFileTypeText(fileType) {
    const typeMap = {
        'image': 'Imagen',
        'video': 'Video',
        'audio': 'Audio',
        'pdf': 'Documento PDF',
        'ebook': 'E-Book',
        'archive': 'Archivo Comprimido'
    };
    return typeMap[fileType] || 'Archivo Digital';
}

function showMessage(message) {
    const modal = document.getElementById('message-modal-overlay');
    const text = document.getElementById('message-modal-text');
    if (modal && text) {
        text.innerText = message;
        modal.classList.remove('hidden');
    }
}

// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Initial render on page load
document.addEventListener('DOMContentLoaded', function() {
    renderAllPosts(); // <-- Llama a la nueva función para mostrar TODO
});
