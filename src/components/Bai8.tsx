import React, { Component } from "react";

interface User {
  userName: string;
  email: string;
  pass: string;
  phone: string;
}

interface StateType {
  email: string;
  pass: string;
  message: string;
}

export default class Bai08 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      message: "",
    };
  }

  hadleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, pass } = this.state;

    if (!email || !pass) {
      this.setState({
        message: "Email và Mật khẩu không được để trống!",
      });
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const check = users.some((e) => e.email === email && e.pass === pass);

    if (check) {
      this.setState({ email: "", pass: "", message: "Đăng nhập thành công" });
    } else {
      this.setState({ email: "", pass: "", message: "Không đăng nhập được" });
    }
  };
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <h1>Đăng nhập</h1>

        <div className="item">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            onChange={this.hadleInput}
            name="email"
            value={this.state.email}
          />
        </div>
        <div className="item">
          <label htmlFor="pass">Mật khẩu</label>
          <br />
          <input
            type="password"
            id="pass"
            onChange={this.hadleInput}
            name="pass"
            value={this.state.pass}
          />
        </div>

        {this.state.message && <p>{this.state.message}</p>}
        <button type="submit">Đăng nhập</button>
      </form>
    );
  }
}