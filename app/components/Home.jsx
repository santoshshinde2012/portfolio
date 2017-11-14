import React, { createClass } from 'react';
import Users from 'app/components/users';

const Home = createClass({
    displayName: 'Home',

    render() {
        const { onClickUser, selectedUser, usersList } = this.props;

        return (
            <div>
              <section className="center-align container" id="home">
                <h2>Santosh Shinde</h2>
                <h3>Full Stack Developer</h3>
                <aside className="center-align">
                  <img id="profile-img" className="responsive-img circle" src="https://avatars.githubusercontent.com/u/6427881?v=3"/>
                  <p className="flow-text">
                    I am Full-Stack Software Developer with over 3+ Year's Experience and I want to make things that make a simple. I’ve always sought out opportunities and challenges that are meaningful to me.
                    And I am always interested to work on back end as well as front end.
                    I currently work at Neosoft technologies where I develop dynamic application for the web using Node, Angular, Express, MongoDB, React, VueJs.
                  </p>
                </aside>
              </section>
            </div>
        );
    }
});

export default Home;
