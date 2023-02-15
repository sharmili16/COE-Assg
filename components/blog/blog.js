import React from 'react';
import PropTypes from 'prop-types';
import styles from './blog.module.css';
export default function SignUp() {
  const Blog = () => {
  class User {
    constructor(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }
    get fullname() {
      return `${this.name} ${this.lastname}`;
  }
  }
  class Feed {
    constructor(feedEl) {
      this.feedEl = feedEl;
      this.user = new User("Benny", "Pakman");
      this.postButton = feedEl.querySelector("button");
      this.textArea = feedEl.querySelector("textarea");
      this.postButton.addEventListener("click", () => this.createPost());
    }
  
    createPost() {
      let postBody = this.textArea.value;
      this.textArea.value = "";
      let post = new Post(postBody, this.user);
      this.feedEl.appendChild(post.el);
    }
  }
  
  class Post {
    constructor(postBody, author) {
      this.el = document.createElement("article");
      this.el.className = "post-content";
      this.el.innerHTML = `<div class="post-top">
            <div class="user-img"><img src="bg.png"></div>
                <div class="info">
                    <div class="postting-name">${author.fullname}</div>
                    <div class="text-small"></div>
                </div>
            </div>
            <div class="post-text">${postBody}</div>
            <div class="post-media"></div>
                <div class="post-react-buttons">
                    <div class="react-button like"><div class="icon"></div>Like</div>
                    <div class="react-button comment"><div class="icon"></div>Comment</div>
                    <div class="react-button share"><div class="icon"></div>Share</div>
                </div>
            </div>`;
    }
  }
  new Feed(document.querySelector(".main"));
  };
}

//Blog.propTypes = {};

//Blog.defaultProps = {};
 