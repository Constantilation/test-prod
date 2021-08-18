import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Posts");
    }

    async getHtml() {
        console.log(this.postId);
        return `
            <h1>Все верно, переход по ссылке зафиксирован</h1>
            <p>Спасибо за тест</p>
        `;
    }
}