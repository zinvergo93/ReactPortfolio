import React, { Component } from 'react';
import axios from 'axios';

class PortfolioForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            description: "",
            url: "",
            category: "eCommerce",
            position: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
         }

         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm() {
        let formData = new FormData();
        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);
        // formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
        // formData.append("portfolio_item[banner_image]", this.state.banner_image);
        // formData.append("portfolio_item[logo]", this.state.logo);

        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        axios.post(
            "https://zinvergocode.devcamp.space/portfolio/portfolio_items", 
            this.buildForm(), 
            { withCredentials: true}
        ).then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_item)
        }).catch(error => {
            console.log("portfolio form handleSubmit error", error)
        })

        event.preventDefault();
    }
    render() { 
        return ( 
            <div>
                <h1>PortfolioForm</h1>

                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder = "Portfolio Item Name"
                            value = {this.state.name}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="url"
                            placeholder = "URL"
                            value = {this.state.url}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="position"
                            placeholder = "Position"
                            value = {this.state.position}
                            onChange={this.handleChange}
                        />
                        <select
                            name="category"
                            value = {this.state.category}
                            onChange={this.handleChange}
                        >
                            
                            <option value = "eCommerce">eCommerce</option>
                            <option value = "Scheduling">Scheduling</option>
                            <option value = "Enterprise">Enterprise</option>
                        </select>
                        {/* <input
                            type="text"
                            name="thumb_image"
                            placeholder = "Thumbnail"
                            value = {this.state.thumb_image}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="banner_image"
                            placeholder = "Banner"
                            value = {this.state.banner_image}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="logo"
                            placeholder = "Logo"
                            value = {this.state.logo}
                            onChange={this.handleChange}
                        /> */}
                    </div>
                <div>
                    <textarea
                        type="text"
                        name="description"
                        placeholder = "Description"
                        value = {this.state.description}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button type = "submit">Save</button>
                </div>
                </form>
            </div>
         );
    }
}
 
export default PortfolioForm;