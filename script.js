// =================================================================
// CONFIGURACIÓN Y DATA ESTATICA
// =================================================================

const paymentButtonsConfig = [
    { id: 'whatsapp', show: true, delay: 5000, icon: 'fab fa-whatsapp', label: 'WhatsApp', color: 'hover:bg-green-500' },
    { id: 'telegram', show: true, delay: 10000, icon: 'fab fa-telegram-plane', label: 'Telegram', color: 'hover:bg-blue-500' },
    { id: 'paypal', show: true, delay: 15000, icon: 'fab fa-paypal', label: 'Paypal', color: 'hover:bg-blue-600' },
    { id: 'bank', show: false, delay: 20000, icon: 'fas fa-university', label: 'Bank', color: 'hover:bg-gray-600' },
    { id: 'donate', show: true, delay: 25000, icon: 'fas fa-gift', label: 'Gracias', color: 'hover:bg-orange-500' },
    { id: 'crypto', show: false, delay: 30000, icon: 'fas fa-bitcoin', label: 'Crypto', color: 'hover:bg-yellow-500' }
];

// Se usa la nueva clave 'storelPosts'
let posts = JSON.parse(localStorage.getItem('storelPosts')) || [
    {
        id: 1,
        user: 'Pro User',
        userImage: 'https://placehold.co/40x40/94a3b8/e2e8f0?text=U',
        title: 'Creative Photography "Inner Cosmos"',
        description: 'Un viaje visual a través de la galaxia. Perfecto para fondos de pantalla o impresiones de alta calidad. Archivo PNG.',
        mediaUrl: 'https://placehold.co/800x600/1e293b/d4d4d8?text=Inner+Cosmos', 
        tags: ['foto', 'cosmos', 'galaxia', 'png', 'wallpaper', 'arte'], 
        fileUrl: 'https://enlace.seguro.de/tuproducto', 
        fileType: 'image',
        fileSize: '2.4 MB',
        price: '20',
        isFree: false,
        showFileInfo: true,
        likes: 124,
        comments: [
            { id: 101, user: 'Ana G.', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=A', text: '¡Increíble! Amo la profundidad de los colores.', date: '2024-09-05', replies: [] }
        ]
    }
];

const productFeed = document.getElementById('product-feed');
const noResultsMessage = document.getElementById('no-results');

function savePostsToStorage() {
    localStorage.setItem('storelPosts', JSON.stringify(posts)); 
}

// =================================================================
// LÓGICA DE RENDERIZADO (CORREGIDA Y COMPLETA)
// =================================================================

function renderAllPosts(filteredPosts = posts) {
    if (!productFeed) {
        console.error("El elemento 'product-feed' no se encontró en el DOM.");
        return;
    }
    
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
        
        // --- Generar HTML de Botones de Pago ---
        const paymentButtonsHTML = paymentButtonsConfig.filter(btn => btn.show).map(btn => `
            <button onclick="window.open('${post.fileUrl}', '_blank')" 
                    class="buy-button hidden bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white ${btn.color} hover:text-white"
                    id="${btn.id}-button-${post.id}">
                <i class="${btn.icon} text-lg"></i>
                <span>${btn.label}</span>
                <span class="text-xs">${btn.label === 'Gracias' ? 'Donativo' : 'Comprar Ahora'}</span>
            </button>
        `).join('');

        // --- Generar HTML de Comentarios ---
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


        // --- HTML COMPLETO DEL POST ---
        card.innerHTML = `
            <div class="ad-banner text-xs sm:text-sm mb-4">Publicidad: Banner dentro de post (Ad 2)</div>

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
            
            <div class="ad-banner text-xs sm:text-sm mt-6 mb-4">Publicidad: Banner bajo descripción (Ad 3)</div>

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
            
            <div class="ad-banner text-xs sm:text-sm mt-6">Publicidad: Banner sobre botones (Ad 4)</div>

            <div id="payment-buttons-container-${post.id}" class="payment-buttons-container flex justify-center space-x-2 my-4 flex-wrap gap-2">
                ${paymentButtonsHTML}
            </div>
            
            <div class="ad-banner text-xs sm:text-sm mt-6 mb-4">Publicidad: Banner bajo botones (Ad 5)</div>

            <div class="ad-banner text-xs sm:text-sm mt-6">Publicidad: Banner antes de comentarios!</div>
            
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

        productFeed.appendChild(card);
        initializePaymentButtons(post.id); 
    });
}

// =================================================================
// FUNCIONES AUXILIARES (Modo Nocturno, Likes, Comentarios)
// =================================================================

function filterPosts(query) {
    let term = query.toLowerCase().trim();
    if (term.startsWith('#')) {
        term = term.substring(1); 
    }
    
    if (term.length < 3 && term.length > 0 && !query.startsWith('#')) {
        renderAllPosts(posts);
        return;
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

// Gets HTML for the file preview
function getPostMedia(url, fileType, altText) {
    if (!url) {
        return `<div class="media-placeholder w-full h-full"><i class="fas fa-cloud-upload-alt text-4xl mb-4"></i><span>No hay archivo de previsualización</span></div>`;
    }

    // Lógica para renderizar imagen/video/etc.
    if (fileType) {
        switch(fileType) {
            case 'image':
                return `<img src="${url}" onerror="this.onerror=null;this.src='https://placehold.co/600x800/e2e8f0/64748b?text=Image+not+available';" alt="${altText}" class="w-full h-auto max-h-96 object-contain rounded-lg">`;
            case 'video':
                return `<video controls class="w-full h-auto max-h-96 rounded-lg" style="background: #000;"><source src="${url}" type="video/mp4">Tu navegador no soporta el video.</video>`;
            case 'audio':
                return `<div class="w-full p-6 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center"><i class="fas fa-music text-4xl mb-4 text-blue-500"></i><audio controls class="w-full mt-4"><source src="${url}" type="audio/mpeg">Tu navegador no soporta el audio.</audio></div>`;
            default:
                return `<div class="media-placeholder w-full h-full"><i class="fas fa-file text-4xl mb-4"></i><span>Archivo Digital</span></div>`;
        }
    }
}

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

function initializePaymentButtons(postId) {
    const container = document.getElementById(`payment-buttons-container-${postId}`);
    if (container) {
        // Hacemos el contenedor visible de inmediato
        container.classList.add('visible');
    }

    // Mostramos los botones con retraso
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
        renderAllPosts(); 
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
        renderAllPosts(); 
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
        renderAllPosts(); 
        toggleReplyBox(commentId);
    }
}

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

// Modo Nocturno Corregido
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        
        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Carga Inicial
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa el modo oscuro al cargar
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    renderAllPosts(); 
});
