function initPage() {
    document.body.classList.remove('overflow-hidden-tablet');
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
                        }, 500);
                    }
                }
            ]
        });
    }, 500);
} else {
    initPage();
}