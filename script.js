// const content = document.querySelector('.content');
// const header = document.querySelector('.header');
// const sidebar = document.querySelector('.sidebar');
// const sidebarTrigger = document.querySelector('.sidebar-trigger');

// window.onscroll = () => {
//     const pagePosition = content.getBoundingClientRect().top;
//     const showTrigger = pagePosition < -700;
//     sidebarTrigger.style.opacity = showTrigger ? 1 : 0;
//     sidebarTrigger.style.pointerEvents = showTrigger ? 'all' : 'none';
//     sidebarTrigger.style.touchAction = showTrigger ? 'auto' : 'none';
// }

// sidebarTrigger.addEventListener('click', () => {
//     sidebar.classList.remove('sidebar-hidden');
//     sidebar.classList.add('sidebar-shown');
// })

// sidebar.querySelectorAll('a, BUTTON').forEach((item) => {
//     item.addEventListener('click', () => {
//         sidebar.classList.remove('sidebar-shown');
//         sidebar.classList.add('sidebar-hidden');
//     })
// });


window.onscroll = () => {
    introduceLineHighlight();
}

function introduceLineHighlight() {
    document.querySelectorAll('.line-highlight').forEach(line => {
        const rect = line.getBoundingClientRect();
        const isVisible = window.innerHeight - rect.bottom > 100;
        if (isVisible) {
            line.classList.add('line-highlight-visible');
        } else {
            line.classList.remove('line-highlight-visible');
        }
    })
}