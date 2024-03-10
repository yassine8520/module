// Assume there's a function called navigateToCategoryPage(category) which navigates to the specified category page

// Function to handle click event on the "Specials" tile
function handleSpecialsClick() {
    // Make an AJAX request to fetch the list of categories
    // Assuming the server responds with an array of category objects
    fetch('/api/categories')
        .then(response => response.json())
        .then(categories => {
            // Filter out categories with no menu items
            const validCategories = categories.filter(category => category.menu_items.length > 0);
            
            // Select a random category from the valid categories
            const randomCategory = validCategories[Math.floor(Math.random() * validCategories.length)];
            
            // Navigate to the random category page
            navigateToCategoryPage(randomCategory.short_name);
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
}

// Attach click event listener to the "Specials" tile
document.getElementById('specials-tile').addEventListener('click', handleSpecialsClick);
