class FakeDatabase {
    constructor() {
        this.authors = [
            { id: '88d5bec2', name: 'Kate Plashing', email: 'kate@someblog.com'},
            { id: '79d4cab1', name: 'John Baker', email: 'john@someblog.com'},
            { id: 'c2d5be3c', name: 'Adam Richards', email: 'adam@someblog.com'},
        ];
        this.blogPosts = [
            {
                id: 1,
                title: 'First blog post',
                content: 'This is first blog post content',
                author: '88d5bec2',
            },
            {
                id: 2,
                title: 'Second blog post',
                content: 'This is second blog post content',
                author: 'c2d5be3c',
            },
            {
                id: 3,
                title: 'Third blog post',
                content: 'This is third blog post content',
                author: '79d4cab1',
            },
        ];
        this.comments = [
            { id: 1, postId: 1, name: 'Anonymous', content: 'Good luck with your blog.'},
            { id: 2, postId: 1, name: 'Nick', content: 'Great article.'},
            { id: 3, postId: 3, name: 'Peter', content: 'Good luck with graphQl ;)'},

        ];
    };

    getBlogPosts() {
        return this.blogPosts;
    };

    getBlogPost(id) {
        return this.blogPosts.find((post) => post.id === id);
    };

    getCommentsForPost(postId) {
        return this.comments.filter((comment) => comment.postId === postId);
    };

    getAuthor(authorId) {
        return this.authors.find((author) => author.id === authorId);
    };

    getPostsOfAuthor(authorId) {
        return this.blogPosts.filter((posts) => posts.author === authorId);
    };

    addNewBlogPost(post) {
        post.id = this.blogPosts.length + 1;
        this.blogPosts.push(post);
        return post;
    };

    addNewComment(comment) {
        comment.id = this.comments.length + 1;
        this.comments.push(comment);
        return comment;
    }

};

export const fakeDatabase = new FakeDatabase();