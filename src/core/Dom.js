class Dom {
    constructor(selector) {
        this.$element = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$element.innerHTML = html
            return this
        }
        return this.$element.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$element
        }

        if (Element.prototype.append) {
            this.$element.append(node)
        } else {
            this.$element.appendChild(node)
        }
    }

    get data() {
        return this.$element.dataset
    }

    on(eventType, callback) {
        this.$element.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$element.removeEventListener(eventType, callback)
    }

    closest(selector) {
        return $(this.$element.closest(selector))
    }

    getCoords() {
        return this.$element.getBoundingClientRect()
    }

    findAll(selector) {
        return this.$element.querySelectorAll(selector)
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}
