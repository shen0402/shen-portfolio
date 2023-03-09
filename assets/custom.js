function initPage() {
    console.log('init page');
}
if (document.querySelector('[data-barba="wrapper"]')) {
    setTimeout(() => {
        barba.init({
            transitions: [
                {
                    name: 'opacity-transition',
                    leave(data) {
                        return gsap.to(data.current.container, {
                            opacity: 0
                        });
                    },

                    enter(data) {
                        return gsap.from(data.next.container, {
                          opacity: 0
                        });
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