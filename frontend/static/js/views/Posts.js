import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Хочешь есть?</h1>
            
            <button id="false_button">Да</button>
            
            <button onclick="location.href='/posts/1'" id="true_button" data-link>Нет</button>
        `
    }
}