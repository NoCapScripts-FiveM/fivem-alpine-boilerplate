import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('helloComponent', () => ({
    message: 'Hello, Alpine.js!',
    show: false,
    init() {
        console.log(this.message)
    },
    toggle() {
        this.show = !this.show
    }
}))

