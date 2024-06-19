function loadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Bad network response');
            }
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const fetchedContent = doc.body.innerHTML;

            document.getElementById('right-panel').innerHTML = fetchedContent;
        })
        .catch(error => {
            console.error('Error loading content:', error);
            document.getElementById('right-panel').innerHTML = '<p>Error loading content.</p>';
        });
}