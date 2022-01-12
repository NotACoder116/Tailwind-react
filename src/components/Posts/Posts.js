import React, { Component } from "react";
import AddPost from "../AddPost/AddPost";
import Dialog from "../Dialog/Dialog";
import SinglePosts from "../SinglePost/SinglePost";

class Posts extends Component {
  state = {
    posts: [
      { id: 1, title: "Post 1", description: "Post 1 description" },
      { id: 2, title: "Post 2", description: "Post 2 description" },
    ],
    postTitle: "Posts Details",
  };

  updateTitleHandler(param, e) {
    console.log("clicked ");
    console.log(param);
  }

  titleHandler = () => {
    console.log("title handler clicked");
  };
  changeTitleHandler = (id, e) => {
    const postIndex = this.state.posts.findIndex((post) => post.id === id);
    const posts = [...this.state.posts];
    posts[postIndex].title = e.target.value;
    this.setState({ ...posts });
  };
  render() {
    return (
      <div>
        <h1 className="text-2xl my-3">{this.state.postTitle}</h1>
        <div>
          <button
            onClick={this.titleHandler}
            className="px-5 py-2 bg-red-500 rounded-full text-white"
          >
            Update Post Title
          </button>
          <button
            onClick={this.updateTitleHandler.bind(this, "hellooo")}
            className="px-5 py-2 bg-red-500 rounded-full text-white"
          >
            Normal function Post Title
          </button>
        </div>
        <hr />
        <div className="flex my-3">
          {this.state.posts.map((data, index) => {
            return (
              <SinglePosts
                key={index}
                title={data.title}
                addPost={<AddPost/>}
                description={data.description}
              >
                <div className="my-2">
                  <input
                    type="text"
                    value={data.title}
                    onChange={this.changeTitleHandler.bind(this, data.id)}
                    className="px-5 py-1 rounded-xl border border-gray-500"
                  ></input>
                </div>
              </SinglePosts>
            );
          })}
          ;
        </div>
        <div className="my-5">
          <AddPost />
        </div>
        <div className="flex-1">
          <Dialog>
            <div>Showing the dialog data</div>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default Posts;
