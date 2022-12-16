let filterValue = 'none';
sortBlogPosts()

const mathBlogPosts = document.querySelectorAll('.math');
const physicsBlogPosts = document.querySelectorAll('.physics');
const economicBlogPosts = document.querySelectorAll('.economics');
const compScienceBlogPosts = document.querySelectorAll('.comp-science');
const musicBlogPosts = document.querySelectorAll('.music');
const allElements = [
        mathBlogPosts, physicsBlogPosts, economicBlogPosts, compScienceBlogPosts, musicBlogPosts
];

function hideBlogPost(blogPost) {
    if (blogPost == 'math') {
        mathBlogPosts.forEach(function (post) {
            post.style.display = 'none';
        });
    } else if (blogPost == 'physics') {
        physicsBlogPosts.forEach(function (post) {
            post.style.display = 'none';
        });
    } else if (blogPost == 'economics') {
        economicBlogPosts.forEach(function (post) {
            post.style.display = 'none';
        });
    } else if (blogPost == 'comp-science') {
        compScienceBlogPosts.forEach(function (post) {
            post.style.display = 'none';
        });
    } else if (blogPost == 'all') {
        allElements.forEach(function (element) {
            element.forEach(function (post) {
                post.style.display = 'none';
            });
        });
    } else if (blogPost == 'music') {
        musicBlogPosts.forEach(function (post) {
            post.style.display = 'none';
        });
    }
}

function showBlogPost(blogPost) {
    if (blogPost == 'math') {
        mathBlogPosts.forEach(function (post) {
            post.style.display = 'block';
        });
    } else if (blogPost == 'physics') {
        physicsBlogPosts.forEach(function (post) {
            post.style.display = 'block';
        });
    } else if (blogPost == 'economics') {
        economicBlogPosts.forEach(function (post) {
            post.style.display = 'block';
        });
    } else if (blogPost == 'comp-science') {
        compScienceBlogPosts.forEach(function (post) {
            post.style.display = 'block';
        });
    } else if (blogPost == 'all') {
        allElements.forEach(function (element) {
            element.forEach(function (post) {
                post.style.display = 'block';
            });
        });
    }
}

function sortBlogPosts() {
    const filter = document.getElementById('filter');
    let filterValue = filter.value;

    if (filterValue == 'comp') {
        hideBlogPost('math');
        hideBlogPost('economics');
        hideBlogPost('physics');
        showBlogPost('comp-science');
    } else if (filterValue == 'physics') {
        hideBlogPost('math');
        hideBlogPost('economics');
        hideBlogPost('comp-science');
        showBlogPost('physics');
    } else if (filterValue == 'mathematics') {
        hideBlogPost('comp-science');
        hideBlogPost('economics');
        hideBlogPost('physics');
        showBlogPost('math');
    } else if (filterValue == 'economics') {
        hideBlogPost('math');
        hideBlogPost('comp-science');
        hideBlogPost('physics');
        showBlogPost('econonomics');
    } else {
        showBlogPost('all');
    }
}