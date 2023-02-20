import React from 'react';

class SubscriptionForm extends React.Component {
    state = {
        email: '',
        name: '',
        isAgreeWithTerms: false,
        isValidEmails: false
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    validateAgreeWithTerms = () => {
        if(this.state.isAgreeWithTerms===true) alert("Спасибо за подписку!!!")
        else alert('Вы не приняли условия подписки!')
    }
    validateEmail = () => {
        const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            this.state.email.toLocaleLowerCase()
        );
        if(!isValidEmail) {
            this.setState({isValidEmails: false})
            alert("Вы ввели неправильный адрес!")
        } else {
            this.setState({isValidEmails: true})
        }
    }

    validateSubmit = () => {
        if(this.state.isValidEmails && this.state.isAgreeWithTerms) alert("Спасибо за подписку!!!")
        else alert('Вы не приняли условия подписки!')
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
                    onBlur={this.validateEmail}
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
                <button
                onClick={this.validateSubmit}>Отправить</button>
            </div>
        );
    }
}

export { SubscriptionForm };
