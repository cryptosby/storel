body {
    font-family: 'Inter', sans-serif;
    background-color: #f3f4f6;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
.dark body {
    background-color: #1a1a2e;
}
.container {
    max-width: 768px; /* Mantiene el ancho de red social para PC */
    margin: auto;
    padding: 1.5rem;
}
.card {
    background-color: white;
    border-radius: 1rem;
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    border: 1px solid #e5e7eb;
}
.dark .card {
    background-color: #2c2c44;
    border-color: #3b3c5a;
}
.ad-banner {
    background-color: #e5e7eb;
    color: #6b7280;
    text-align: center;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    font-style: italic;
    transition: background-color 0.3s ease;
}
.dark .ad-banner {
    background-color: #4b5563;
    color: #d1d5db;
}
.buy-button {
    /* Clases de Tailwind */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    font-weight: 600;
    transition: transform 0.2s ease-in-out;
    transform: none;
}
.buy-button:hover {
    transform: scale(1.05);
}
.buy-button span:first-child {
    line-height: 1;
}
.buy-button span:last-child {
    line-height: 1;
    font-size: 0.75rem;
}
.media-placeholder {
    /* Clases de Tailwind */
    background-color: #e5e7eb;
    color: #6b7280;
    width: 100%;
    height: 16rem; /* Altura de 256px */
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.dark .media-placeholder {
    background-color: #374151;
    color: #9ca3af;
}
.media-placeholder input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}
.comment-replies {
    display: none;
}
.edit-delete-btn {
    /* Clases de Tailwind */
    color: #9ca3af;
    transition: color 0.15s ease-in-out;
    cursor: pointer;
    font-size: 0.875rem;
}
.edit-delete-btn:hover {
    color: #ef4444; /* red-500 */
}
.file-info-card {
    /* Clases de Tailwind */
    background-color: #eff6ff; /* blue-50 */
    border: 1px solid #bfdbfe; /* blue-200 */
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 1rem;
}
.dark .file-info-card {
    background-color: rgba(147, 197, 253, 0.2); /* blue-900/20 */
    border-color: #1e40af; /* blue-800 */
}
.upload-progress {
    /* Clases de Tailwind */
    width: 100%;
    background-color: #e5eeeb; /* gray-200 */
    border-radius: 9999px;
    height: 0.625rem; /* h-2.5 */
    margin-top: 0.5rem;
}
.dark .upload-progress {
    background-color: #374151; /* gray-700 */
}
.upload-progress-bar {
    /* Clases de Tailwind */
    background-color: #2563eb; /* blue-600 */
    height: 0.625rem; /* h-2.5 */
    border-radius: 9999px;
    transition: width 0.3s ease-in-out;
}
.payment-buttons-container {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}
.payment-buttons-container.visible {
    opacity: 1;
}
.video-16-9 {
    aspect-ratio: 16/9;
}
.video-9-16 {
    aspect-ratio: 9/16;
}
.video-1-1 {
    aspect-ratio: 1/1;
}
/* Estilos para el video/audio */
.media-container {
    position: relative;
    width: 100%;
}
.media-content {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
}
.media-content video,
.media-content audio {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
}
