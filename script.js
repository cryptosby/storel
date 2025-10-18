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
        user: 'Pro User',
        userImage: 'https://placehold.co/40x40/94a3b8/e2e8f0?text=U',
        title: 'Creative Photography "Inner Cosmos"',
        description: 'A visual journey through the galaxy. Perfect for high-quality wallpapers or prints. PNG file.',
        mediaUrl: 'https://placehold.co/800x600/1e293b/d4d4d8?text=Inner+Cosmos', 
        tags: ['photo', 'cosmos', 'galaxy', 'png', 'wallpaper', 'art'], 
        fileUrl: 'https://enlace.seguro.de/tuproducto', 
        fileType: 'image',
        fileSize: '2.4 MB',
        price: '20',
        isFree: false,
        showFileInfo: true,
        likes: 124,
        paymentOptions: {
            whatsapp: true,
            telegram: true, 
            paypal: true,
            bank: false,
            donate: true,
            crypto: false
        },
        comments: [
            { id: 101, user: 'Ana G.', userImage: 'https://placehold.co/30x30/fecaca/991b1b?text=A', text: 'Amazing! I love the depth of the colors.', date: '2024-09-05', replies: [] },
            { id: 102, user: 'Carlos M.', userImage: 'https://placehold.co/30x30/bdbdff/0000ff?text=C', text: 'Excellent price for this quality. Highly recommended.', date: '2024-09-06', replies: [] }
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
// LÓGICA DE RENDERIZADO PRINCIPAL
// =================================================================

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
        
        // GENERACIÓN DE BOTONES DE PAGO INDIVIDUALES
        const paymentButtonsHTML = paymentButtonsConfig
            // FILTRA solo los botones habilitados en el objeto paymentOptions del post
            .filter(btn => post.paymentOptions && post.paymentOptions[btn.id] === true)
            .map(btn => `
                <button onclick="window.open('${post.fileUrl}', '_blank')" 
                        class="buy-button hidden bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white ${btn.color} hover:text-white"
                        id="${btn.id}-button-${post.id}">
                    <i class="${btn.icon} text-lg"></i>
                    <span>${btn.label}</span>
                    <span class="text-xs">${btn.label === 'Thanks' ? 'Donation' : 'View Option'}</span>
                </button>
            `).join('');

        // --- Generate Comments HTML (Banner Reubicado) ---
        let commentsHtml = '';
        if (post.comments && post.comments.length > 0) {
            
            const commentHTMLArray = post.comments.map(c => `
                <div id="comment-${c.id}" class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-2">
                    <div class="flex items-center justify-between space-x-3 mb-1">
                        <div class="flex items-center space-x-3">
                            <img class="w-8 h-8 rounded-full object-cover" src="${c.userImage}" alt="Comment Profile">
                            <span class="font-bold text-sm">${c.user}</span>
                            <p class="text-xs text-gray-500">${new Date(c.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
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
            `);

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
// FUNCIONES DE COMENTARIOS AÑADIDAS (SOLUCIÓN AL ERROR 'is not defined')
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString()
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
