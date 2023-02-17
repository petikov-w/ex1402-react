import React from 'react';

class SubscriptionForm extends React.Component {
    state = {
        email: '',
        name: '',
        isAgreeWithTerms: false,
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    render() {
        const { email, name, isAgreeWithTerms } = this.state;

        return (
            <div>
                <label name={name}>Имя: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="введите имя"
                    value={name}
                    onChange={this.handleChange}
                />
                <br />
                <label name={name}>Email: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="введите email"
                    value={email}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleCheckboxChange}
                    />
                    Я согласен с условиями
                </label>
                <br />
                <button>Отправить</button>
            </div>
        );
    }
}

export { SubscriptionForm };
