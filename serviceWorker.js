const staticMeetMatch = "MeetMatch-site-v11";
const assets = [
    "/",
    "/index.html",
    "/views/inicio.html",
    "/estilo.css",
    "/static/css/index.css",
    "/static/css/inicio.css",
    "/static/img/pexels-michelle-leman-6774871.jpg",
    "/static/img/pexels-cottonbro-studio-5018220.jpg",
    "/static/img/foto-1.jpg",
    "/static/img/foto-2.jpg",
    "/static/img/foto-3.jpg",
    "/static/img/foto-4.jpg",
    "/static/img/foto-5.jpg",
    "/static/img/foto-6.jpg",
    "/static/img/foto-7.jpg",
];


self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMeetMatch).then(cache => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});

self.addEventListener("notificationclick", event => {
    // cerrar notificaciones.
    event.notification.close();

    navigator.setAppBadge(42);

    // acccion.
    if (event.action === "view-content") {
        console.log("view-content action was clicked");
    } else if (event.action === "go-home") {
        console.log("go-home action was clicked");
    } else {
        console.log("main body of the notification was clicked");
    }
});