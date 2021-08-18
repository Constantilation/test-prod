import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Прекрасно, сайт открывается, теперь попробуй перейти по второй ссылке.</h1>
        `
    }
}