import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import React, { FormEvent, FormEventHandler, useState } from 'react';

type FormLogin = {
  readonly username: string;
  readonly password: string;
}

const Index = () => {
  const [form, setForm] = useState<FormLogin>();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  <div>
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <form onSubmit={login}>
      <label htmlFor="username" >Username</label>
      <input type="text" value={form?.username} />
      <label htmlFor="password" >Password</label>
      <input type="text" value={form?.password} />
      <button type="submit">Login</button>

    </form>
  </div>
};

export default Index;
