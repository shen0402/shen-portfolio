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
                        document.querySelector('data-barba="wrapper"').classList.add('loading');
                    },

                    enter(data) {
                        document.querySelector('data-barba="wrapper"').classList.remove('loading');
                    },
            
                    afterLeave(data) {
                    },
            
                    once(data) {
                        setTimeout(() => {
                            initPage();
                        }, 100);
                    },
            
                    beforeEnter(data) {},
                    afterEnter(data) {
                        setTimeout(() => {
                            initPage();
                        }, 100);
                    }
                }
            ]
        });
    }, 500);
} else {
    initPage();
}