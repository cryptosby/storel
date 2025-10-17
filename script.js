// =================================================================
// CONFIGURACIÓN Y DATA ESTATICA (SOLO UN POST)
// =================================================================

const paymentButtonsConfig = [
    { id: 'whatsapp', show: true, delay: 5000, icon: 'fab fa-whatsapp', label: 'WhatsApp', color: 'hover:bg-green-500' },
    { id: 'telegram', show: true, delay: 10000, icon: 'fab fa-telegram-plane', label: 'Telegram', color: 'hover:bg-blue-500' },
    { id: 'paypal', show: true, delay: 15000, icon: 'fab fa-paypal', label: 'Paypal', color: 'hover:bg-blue-600' },
    { id: 'bank', show: false, delay: 20000, icon: 'fas fa-university', label: 'Bank', color: 'hover:bg-gray-600' },
    { id: 'donate', show: true, delay: 25000, icon: 'fas fa-gift', label: 'Gracias', color: 'hover:bg-orange-500' },
    { id: 'crypto', show: false, delay: 30000, icon: 'fas fa-bitcoin', label: 'Crypto', color: 'hover:bg-yellow-500' }
];

// Se cambia la clave de localStorage a 'storelPosts'
let posts = JSON.parse(localStorage.getItem('storelPosts')) || [
    {
        id: 1,
        user: 'Pro User',
        userImage: 'https://placehold.co/40x40/94a3b8/e2e8f0?text=U',
        title: 'Creative Photography "Inner Cosmos"',
        description: 'Un viaje visual a través de la galaxia. Perfecto para fondos de pantalla o impresiones de alta calidad. Archivo PNG.',
        mediaUrl: 'https://placehold.co/800x600/1e293b/d4d4d8?text=Inner+Cosmos', // URL de IMAGEN/VIDEO
        tags: ['foto', 'cosmos', 'galaxia', 'png', 'wallpaper', 'arte'], 
        fileUrl: 'https://enlace.seguro.de/tuproducto', // ENLACE DE PAGO/DESCARGA FINAL
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
    // Se guarda con la nueva clave 'storelPosts'
    localStorage.setItem('storelPosts', JSON.stringify(posts)); 
}

// =================================================================
// LÓGICA DE RENDERIZADO (CORREGIDA)
// =================================================================

function renderAllPosts(filteredPosts = posts) {
    if (!productFeed) return;
    
    productFeed.innerHTML = '';
    
    if (filteredPosts.length === 0) {
        noResultsMessage.classList.remove('hidden');
        return;
    } else {
        noResultsMessage.classList.add('hidden');
    }

    filteredPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // --- Generar botones de pago (Se mantiene) ---
        const paymentButtonsHTML = paymentButtonsConfig.filter(btn => btn.show).map(btn => `
            <button onclick="window.open('${post.fileUrl}', '_blank')" 
                    class="buy-button hidden bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white ${btn.color} hover:text-white"
                    id="${btn.id}-button-${post.id}">
                <i class="${btn.icon} text-lg"></i>
                <span>${btn.label}</span>
                <span class="text-xs">${btn.label === 'Gracias' ? 'Donativo' : 'Comprar Ahora'}</span>
            </button>
        `).join('');

        // --- Generar Comentarios (Se mantiene) ---
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


        // --- HTML COMPLETO DEL POST (CORRECCIÓN CLAVE) ---
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

// ... (El resto de funciones auxiliares y el filtro se mantienen igual)

// =================================================================
// CORRECCIÓN MODO NOCTURNO Y CARGA INICIAL (Se mantiene)
// =================================================================

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
