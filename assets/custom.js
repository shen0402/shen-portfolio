function initPage() {
    document.body.className = 'gradient';
}
if (document.querySelector('[data-barba="wrapper"]')) {
    setTimeout(() => {
        barba.init({
            transitions: [
                {
                    name: 'opacity-transition',
                    leave(data) {
                        document.body.classList.add('loading');
                    },
            
                    afterLeave(data) {
                    },
            
                    once(data) {
                        setTimeout(() => {
                            initPage();
                        }, 500);
                    },
            
                    beforeEnter(data) {},
                    afterEnter(data) {
                        setTimeout(() => {
                            initPage();
                            document.body.classList.remove('loading');
                        }, 500);
                    }
                }
            ]
        });
    }, 500);
} else {
    initPage();
}