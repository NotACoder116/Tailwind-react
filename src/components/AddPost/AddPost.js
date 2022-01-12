import React, { Component } from "react";

class AddPost extends Component {
    state = {
        title: 'my title',
        description: '',
        active: 'active'
    }

    addPostHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    textChange = (title, e) => {
        // console.log(e.target.value)
        this.setState({
            [title]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addPostHandler}>
                    <div>
                        <label className='block'>Title</label>
                        <input value={this.state.title} onChange={this.textChange.bind(this, 'title')} type='text' className="px-3 py-1 block w-full border border-gray-600 focus:outline-none focus:border-red-600"></input>
                    </div>
                    <div>
                        <label className='block'>Description</label>
                        <textarea onChange={this.textChange.bind(this, 'description')} value={this.state.description} type='text' className="px-3 py-1 block w-full border border-gray-600 focus:outline-none focus:border-red-600"></textarea>
                    </div>
                    <div>
                        <label className='block'>Status</label>
                        <select onChange={this.textChange.bind(this, 'active')} value={this.state.active} className="px-3 py-1 block w-full border border-gray-600 focus:outline-none focus:border-red-600">
                            <option value='active'>Active</option>
                            <option value='inactive'>InActive</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="bg-indigo-900 text-white px-5 py-2">Add Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPost;