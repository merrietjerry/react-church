import * as React from "react";

export const Login = (props: any) => {
  const { isFetching, data } = props.user;
  const { username, password, submitted } = props.state;
  return (
    <div className="login-box col-md-4 col-md-offset-3">
      <h2>Login</h2>
      <form name="form" onSubmit={props.handleSubmit}>
        <div
          className={
            "form-group" + (submitted && !username ? " has-error" : "")
          }
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={props.handleChange}
          />
          {submitted && !username && (
            <div className="help-block">Username is required</div>
          )}
        </div>
        <div
          className={
            "form-group" + (submitted && !password ? " has-error" : "")
          }
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={props.handleChange}
          />
          {submitted && !password && (
            <div className="help-block">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary" disabled={isFetching}>
            Login {isFetching && (<span className="spinner-grow spinner-grow-sm"></span>)}
          </button>
          
          {data && !isFetching && (
            <span className={"alert alert-danger"}>{data.message}</span>
          )}
        </div>
      </form>
    </div>
  );
};
