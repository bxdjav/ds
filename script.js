document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('results');
    const buyButtons = document.querySelectorAll('.buy-button');
    const applePayButtons = document.querySelectorAll('.apple-pay-button');

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h2').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Show purchase confirmation
            const confirmation = confirm(`هل تريد شراء ${productName} بسعر ${productPrice}؟`);
            
            if (confirmation) {
                alert('تم استلام طلبك! سيتم التواصل معك قريباً على ديسكورد.');
                // Here you can add code to handle the purchase
                // For example, send data to a server or open a payment gateway
            }
        });
    });

    applePayButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h2').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            alert(`تم الدفع بنجاح عبر Apple Pay لمنتج: ${productName} بسعر ${productPrice}`);
        });
    });

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Redirect to Google search with the query
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }

    function copySTCPayNumber() {
        const number = document.getElementById('stcpay-number').textContent;
        navigator.clipboard.writeText(number).then(() => {
            alert('تم نسخ رقم STC Pay بنجاح!');
        });
    }

    // Optional: You can implement a custom search API here
    // This would require setting up a Google Custom Search API key
    // and implementing the API calls to fetch search results
}); 