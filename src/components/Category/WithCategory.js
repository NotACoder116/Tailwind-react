import React, { Component } from "react";

export function WithCategory(limit) {
    return  function(WrappedComponent) {
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = { categories: ['Category 1', 'Category 1', 'Category 1', 'Category 1'] };
            }
            render() {
                const categories = this.state.categories.slice(0, limit);
                return (
                    <div>
                        <h2>Category title</h2>
                        <WrappedComponent {...this.props} categories={categories}/>
                    </div>
                );
            }
        }
    }
}