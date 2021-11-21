<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is the backend repo powering [the Pick 'Em! web app UI](https://github.com/mhosanna/nfl-pickem-ui). More information can be found in that repo's README.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Keystone.js](https://keystonejs.com/)
* [Prisma Client](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Postmark](https://postmarkapp.com/)
* [Ethereal](https://ethereal.email/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these steps to run this project locally.

### Prerequisites

To run locally, you will first need to create a new Postgres database. This can be a db running locally on your machine, or one hosted by a third party. 

This project also requires an [Ethereal](https://ethereal.email/) account for sending fake emails during local development, and a [Postmark](https://postmarkapp.com/) account for sending real emails in production.

To get started locally, you will need a `.env` file with the variables needed to run the app. 
```
COOKIE_SECRET={Secret used for encrypting cookie data in prod. This can be any random string of characters, just make it unique!}
DATABASE_URL={connection url for prod db, or dev db if hosted}
FRONTEND_URL={url to the app's frontend. Used for CORS stuff and creating links in emails}
MAIL_HOST={SMTP configuration for Ethereal emails. See Ethereal docs}
MAIL_PORT={SMTP configuration for Ethereal emails. See Ethereal docs}
MAIL_USER={SMTP configuration for Ethereal emails. See Ethereal docs}
MAIL_PASS={SMTP configuration for Ethereal emails. See Ethereal docs}
POSTMARK_API={See Postmark docs for more info}
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mhosanna/nfl-pickem-edge.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add .env file to local files
4. Spin it up
    ```sh
    npm run dev
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### 🌱 Seeding NFL Teams
NFL team data can be automatically seeded so that you do not need to create each team manually in your database.

1. Run `npm run seed-data`.
2. The terminal should print out each team added from the seed data.
3. Run `npm run dev` to start the dev server. 

### 👯‍♀️ Adding Players
During local development, players can be added directly in the Keystone.js admin interface.

To invite players to the app in production:
1. Create each player in the Keystone.js admin interface by entering their name and email. Do not enter a password.
1) Instruct players to click the Sign In link in the left menu in the App's frontend interface.
2) In the Request a Password Reset box, have them enter their email. 
3) They should get an email right away with a link to reset their password (or in this case, create a password).
4) Have them follow the link and enter their email again and along with a new password and click Request Reset. Password must be at least 8 characters.
5) They should see a "success" message telling them to sign in now.
6) Go back to the sign in page and sign in with their email address and password. Once they sign in, they should see new menu options available. 

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## 🚦 Roadmap 🚦

- [ ] Add testing
- [ ] Update Keystone to latest


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Madeline Dale - [@madhosanna](https://twitter.com/@madhosanna) - mhosanna@gmail.com

Project Link: [https://github.com/mhosanna/nfl-pickem-edge](https://github.com/mhosanna/nfl-pickem-edge)

<p align="right">(<a href="#top">back to top</a>)</p>
