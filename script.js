// script.js

// Nota: Las variables 'posts', 'paymentButtonsDelay', 'isAdmin' vienen de data.js

// Helper para guardar los posts (solo para simular persistencia en estático)
function savePostsToStorage() {
    localStorage.setItem('socialStorePosts', JSON.stringify(posts));
}

// Helper para cargar los posts desde el almacenamiento local
function loadPostsFromStorage() {
    const storedPosts = localStorage.getItem('socialStorePosts');
    if (storedPosts) {
        // Cargar likes/comentarios actualizados, pero mantener la estructura original hardcodeada
        // para asegurar que los nuevos campos (galleryUrls, tags) no se pierdan.
        const storedData = JSON.parse(storedPosts);
        storedData.forEach(storedPost => {
            const originalPost = posts.find(p => p.id === storedPost.id);
            if (originalPost) {
                originalPost.likes = storedPost.likes;
                originalPost.comments = storedPost.comments;
            }
        });
    }
}


// ============== CORE: RENDERIZADO DEL FEED COMPLETO Y REFACTORING (Punto 2a, 4b, 5b) =================

// Variable de estado para el filtrado
let currentFilterTag = null;

// Función que crea el elemento HTML de un solo post (antes era renderSinglePost)
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.id = `post-${post.id}`;
    postElement.className = 'bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden transition-all duration-300';
    postElement.setAttribute('aria-label', `Publicación: ${post.title}`); // Accesibilidad

    // Lógica para el estado persistente del Like (Punto 4c)
    const hasUserLiked = localStorage.getItem(`post-${post.id}-liked`) === 'true';
    const heartClass = hasUserLiked ? 'text-red-500' : 'text-gray-400 dark:text-gray-500';

    // Generación de la galería y placeholder (Punto 2b)
    const galleryHtml = post.galleryUrls.map((url, index) => `
        <img src="${url}" 
             alt="${post.title} - Vista ${index + 2}" 
             class="gallery-image w-10 h-10 object-cover rounded-md cursor-pointer ${index === 0 ? 'active' : ''}" 
             data-main-src="${post.mediaUrl}"
             data-gallery-src="${url}">
    `).join('');

    const tagsHtml = post.tags.map(tag => `
        <button class="tag-button text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100 transition hover:opacity-80" data-tag="${tag}">
            #${tag}
        </button>
    `).join('');


    postElement.innerHTML = `
        <div class="p-5">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2" id="post-title-${post.id}">${post.title}</h2>
            <div class="flex flex-wrap gap-2 mb-4">${tagsHtml}</div> 
            <p class="text-gray-600 dark:text-gray-300 mb-4" id="post-description-${post.id}">${post.description}</p>
        </div>

        <div class="relative w-full aspect-video bg-gray-200 dark:bg-gray-700">
            <img src="${post.mediaUrl}" alt="${post.title} - Imagen Principal" id="main-media-${post.id}" class="w-full h-full object-cover">
            <span class="absolute top-2 left-2 px-3 py-1 bg-black bg-opacity-60 text-white text-sm rounded-full">${post.isFree ? 'Gratis' : `$${post.price.toFixed(2)}`}</span>
        </div>

        <div class="p-4 flex gap-3 overflow-x-auto border-b border-gray-200 dark:border-gray-700">
            <img src="${post.mediaUrl}" alt="${post.title} - Vista 1" 
                 class="gallery-image w-10 h-10 object-cover rounded-md cursor-pointer active" 
                 data-main-src="${post.mediaUrl}">
            ${galleryHtml}
        </div>

        <div class="p-5 border-b border-gray-200 dark:border-gray-700">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                    <button class="like-button flex items-center space-x-1 transition hover:text-red-500" data-post-id="${post.id}">
                        <i class="fas fa-heart ${heartClass}"></i>
                        <span id="likes-count-${post.id}">${post.likes}</span>
                    </button>
                    <div class="flex items-center space-x-1">
                        <i class="fas fa-comment"></i>
                        <span>${post.comments}</span>
                    </div>
                </div>

                <div class="text-right">
                    ${isAdmin ? 
                        `
                        <span class="text-sm text-gray-500 dark:text-gray-400">Precio (Admin):</span>
                        <input type="number" step="0.01" value="${post.price.toFixed(2)}" class="price-input text-xl font-bold text-indigo-600 dark:text-indigo-400 w-24 p-1 rounded bg-gray-100 dark:bg-gray-700" data-post-id="${post.id}">
                        ` 
                        : 
                        `
                        <span class="text-sm text-gray-500 dark:text-gray-400">Precio:</span>
                        <span class="text-xl font-bold text-indigo-600 dark:text-indigo-400">$${post.price.toFixed(2)}</span>
                        `
                    }
                </div>
            </div>
            
            ${!post.isFree ? `
                <a href="${post.fileUrl}" target="_blank" 
                   class="main-purchase-button mt-4 w-full flex items-center justify-center py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition"
                   data-payment-type="main"
                   data-post-id="${post.id}">
                    <i class="fas fa-shopping-bag mr-2"></i> COMPRAR PRODUCTO DIGITAL
                </a>
                <p class="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">Serás redirigido para completar el pago y la descarga automática.</p>
            ` : ''}

            ${post.isFree && post.fileUrl ? `
                <a href="${post.fileUrl}" target="_blank" 
                   class="mt-4 w-full flex items-center justify-center py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 transition"
                   data-payment-type="free"
                   data-post-id="${post.id}">
                    <i class="fas fa-download mr-2"></i> DESCARGA GRATUITA
                </a>
            ` : ''}
            
            ${!post.isFree ? `
                <div id="payment-options-${post.id}" class="flex flex-col space-y-2 mt-4 hidden" data-delay="${paymentButtonsDelay}">
                    <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Otras Opciones de Pago:</h4>
                    ${post.paymentLinks.paypal ? `<a href="${post.paymentLinks.paypal}" target="_blank" class="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"><i class="fab fa-paypal mr-2"></i> PayPal</a>` : ''}
                    ${post.paymentLinks.whatsapp ? `<a href="${post.paymentLinks.whatsapp}" target="_blank" class="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center"><i class="fab fa-whatsapp mr-2"></i> WhatsApp</a>` : ''}
                    ${post.paymentLinks.telegram ? `<a href="${post.paymentLinks.telegram}" target="_blank" class="py-2 px-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 flex items-center justify-center"><i class="fab fa-telegram-plane mr-2"></i> Telegram</a>` : ''}
                    ${post.paymentLinks.donativo ? `<a href="${post.paymentLinks.donativo}" target="_blank" class="py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 flex items-center justify-center"><i class="fas fa-hand-holding-usd mr-2"></i> Donativo</a>` : ''}
                    ${post.paymentLinks.cryptos ? `<a href="${post.paymentLinks.cryptos}" target="_blank" class="py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center justify-center"><i class="fas fa-bitcoin mr-2"></i> Cryptos</a>` : ''}
                    ${post.paymentLinks.cuentaBancaria ? `<div class="py-2 px-4 bg-red-100 text-red-700 rounded-lg text-center font-medium"><i class="fas fa-university mr-2"></i> Cuenta Bancaria (Contacto manual)</div>` : ''}
                </div>
            ` : ''}

        </div>
    `;
    return postElement;
}


// Función principal para renderizar el feed (Punto 2a)
function renderFeed(filterQuery = '', filterTag = null) {
    const feedContainer = document.getElementById('feed-container');
    if (!feedContainer) return;
    feedContainer.innerHTML = ''; // Limpiar el contenedor

    // 1. Filtrar los posts según la búsqueda y la etiqueta (Punto 2c)
    let filteredPosts = posts.filter(post => {
        const query = filterQuery.toLowerCase();
        const matchesQuery = post.title.toLowerCase().includes(query) || 
                             post.description.toLowerCase().includes(query);
        const matchesTag = !filterTag || post.tags.includes(filterTag);
        return matchesQuery && matchesTag;
    });

    // Simulación de "Cargar más"
    const currentPostCount = feedContainer.children.length;
    const postsToRender = filteredPosts.slice(currentPostCount, currentPostCount + 5); // Cargar 5 posts a la vez

    postsToRender.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
        initializePostInteractions(post.id);
        updateSEO(post); // Actualizar SEO con el primer post del feed (Punto 5a)
    });
    
    // Si no hay más posts para cargar
    const loadMoreButton = document.getElementById('load-more-button');
    if (loadMoreButton) {
        if (filteredPosts.length <= feedContainer.children.length) {
            loadMoreButton.classList.add('hidden');
        } else {
            loadMoreButton.classList.remove('hidden');
        }
    }
}


// Función para inicializar interacciones (Punto 4b)
function initializePostInteractions(postId) {
    const postElement = document.getElementById(`post-${postId}`);
    if (!postElement) return;

    // 1. Control de Likes (Punto 4c)
    const likeButton = postElement.querySelector('.like-button');
    likeButton.addEventListener('click', () => {
        const icon = likeButton.querySelector('i');
        const countSpan = postElement.querySelector(`#likes-count-${postId}`);
        let currentLikes = parseInt(countSpan.innerText);

        if (icon.classList.contains('text-red-500')) {
            // Quitar like
            icon.classList.remove('text-red-500');
            icon.classList.add('text-gray-400', 'dark:text-gray-500');
            currentLikes--;
            localStorage.setItem(`post-${postId}-liked`, 'false');
        } else {
            // Dar like
            icon.classList.remove('text-gray-400', 'dark:text-gray-500');
            icon.classList.add('text-red-500');
            currentLikes++;
            localStorage.setItem(`post-${postId}-liked`, 'true');
        }
        
        // Actualizar datos en el array y localStorage
        const postData = posts.find(p => p.id === postId);
        if (postData) {
            postData.likes = currentLikes;
            countSpan.innerText = currentLikes;
            savePostsToStorage();
        }
    });

    // 2. Control del Precio (Admin)
    if (isAdmin) {
        const priceInput = postElement.querySelector('.price-input');
        priceInput.addEventListener('change', (e) => {
            const newPrice = parseFloat(e.target.value);
            const postData = posts.find(p => p.id === postId);
            if (postData && !isNaN(newPrice)) {
                postData.price = newPrice;
                savePostsToStorage();
                showMessage(`Precio del Post ${postId} actualizado a $${newPrice.toFixed(2)}`);
            } else {
                 showMessage(`Error: Precio inválido.`);
            }
        });
    }
    
    // 3. Galería de Previsualización (Punto 2b)
    const mainMedia = postElement.querySelector(`#main-media-${postId}`);
    const galleryImages = postElement.querySelectorAll('.gallery-image');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            // Cambiar la imagen principal
            const newSrc = img.getAttribute('data-gallery-src') || img.getAttribute('data-main-src');
            mainMedia.src = newSrc;

            // Actualizar clase 'active'
            galleryImages.forEach(i => i.classList.remove('active'));
            img.classList.add('active');
        });
    });

    // 4. Retraso de Botones de Pago Secundarios (Punto 3a)
    const paymentOptions = postElement.querySelector(`#payment-options-${postId}`);
    if (paymentOptions) {
        const delay = parseInt(paymentOptions.getAttribute('data-delay'));
        setTimeout(() => {
            paymentOptions.classList.remove('hidden');
        }, delay);
    }
}


// ============== FILTRADO Y SEO =================

// Genera y adjunta los botones de etiqueta al DOM (Punto 3c)
function setupTagFilters() {
    const allTags = posts.flatMap(post => post.tags);
    const uniqueTags = [...new Set(allTags)];
    const container = document.getElementById('filter-tags-container');

    uniqueTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-filter-button text-sm px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-500 hover:text-white transition';
        button.innerText = tag;
        button.setAttribute('data-tag', tag);
        container.appendChild(button);

        button.addEventListener('click', () => {
            // Lógica de toggle para el filtro
            if (currentFilterTag === tag) {
                currentFilterTag = null; // Desactivar filtro
                button.classList.remove('bg-indigo-500', 'text-white');
            } else {
                currentFilterTag = tag; // Activar filtro
                // Limpiar estilos de todos los botones
                container.querySelectorAll('.tag-filter-button').forEach(btn => btn.classList.remove('bg-indigo-500', 'text-white'));
                button.classList.add('bg-indigo-500', 'text-white');
            }
            document.getElementById('feed-container').innerHTML = ''; // Resetear el feed
            renderFeed('', currentFilterTag);
        });
    });
}


// Actualizar Metadatos de SEO Dinámico (Punto 5a)
function updateSEO(post) {
    // Si tienes múltiples posts, el SEO de la página principal debe reflejar el contenido más relevante o el título del sitio.
    // Aquí actualizamos con los datos del primer post solo como ejemplo.
    if (document.title === 'InfinityScroll - Social Digital Marketplace') {
        document.querySelector('meta[name="description"]').setAttribute('content', post.description);
        document.querySelector('meta[property="og:title"]').setAttribute('content', post.title);
        document.querySelector('meta[property="og:image"]').setAttribute('content', post.mediaUrl);
    }
}


// Función para mostrar un modal de mensaje
function showMessage(message) {
    const modal = document.getElementById('message-modal-overlay');
    const text = document.getElementById('message-modal-text');
    if (modal && text) {
        text.innerText = message;
        modal.classList.remove('hidden');
    }
}


// ============== INICIALIZACIÓN DE LA APLICACIÓN =================

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

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    loadPostsFromStorage();
    setupTagFilters();
    renderFeed(); // Carga inicial
    
    // Lógica de búsqueda (Punto 2c)
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        // Limpiar el filtro de etiquetas al usar la búsqueda
        currentFilterTag = null;
        document.querySelectorAll('.tag-filter-button').forEach(btn => btn.classList.remove('bg-indigo-500', 'text-white'));
        
        document.getElementById('feed-container').innerHTML = ''; // Resetear el feed
        renderFeed(e.target.value);
    });

    // Lógica de "Cargar más"
    const loadMoreButton = document.getElementById('load-more-button');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            renderFeed(searchInput.value, currentFilterTag);
        });
    }
});
