import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Да, это вторая проверочная ссылка</h1>
            <p>Теперь попробуй перейти по <a href="https://forsometests.netlify.app/posts/1">этой</a> ссылке</p>
        `
    }
}