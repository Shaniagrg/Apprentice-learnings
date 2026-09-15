const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');
    if (listContainer.style.display === 'none'){
        //Text appear on the toggle button if the list shows 
        btnToggle.textContent = 'Hide List';
        /* 
        This is kind of unecessary but just for example you can use this way 
        //BLOCK: Everything on the div container SHOWS
        listContainer.style.display = 'block';
        */
        //simply remove
        listContainer.removeAttribute('style');
    }else{
        //Text appear on the toggle button if its hidden
        btnToggle.textContent = 'Show List';
        //None: hides the div 
        listContainer.style.display = 'none';

    }
    

})