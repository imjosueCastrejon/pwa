function actualizaCacheDinamico(dynamicCache, request, response) {
    if (response.ok) {
        caches.open(dynamicCache).then(cache => {
            cache.put(request, response.clone());

        });

        return dynamicCache;
    } else {
        return response;
    }
}