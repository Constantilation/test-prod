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
            <h1>Posts</h1>
            <p>You are viewing posts!</p>
        `;
    }
}