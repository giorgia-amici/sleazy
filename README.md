# Sleazy Sounds

Sleazy Sounds is a music website that lets users search for, and play tracks from Soundcloud. It allows subscribers to save their favourite tunes to playlists, which are limitted to their top 10 tracks of the moment. The playlists are then saved to the subscribers' private dashboard and displayed on the home page.

The project was set as a challenge for the 4-day 'Makerthon' at Makers Academy, and our team consisted of four music-loving ladies:
[Giorgia](https://github.com/giorgia-amici), [Mishal](https://github.com/mishal1), [Clare](https://github.com/ctrembath), and myself.

The site makes use of Soundcloud's API, which it uses to access one of the most broad and current music libraries in the world.

Technologies used:
- Rails,
- Ruby,
- Angular,
- Javascript,
- HTML,
- CSS,
- Postgres 

Testing frameworks:
- Rspec
- Capybara
- Karma
- Capybara-Webkit

Future features we'd like to include:
- Ordering playlist featured on the home page according to most listened to and most recently added.
- Subscribers upload an image of their choice to represent their playlist.

To play around on our Sleazy Sounds website, clone the repository amd run;

```sh
$ bundle install
```

To view tests in RSpec and Karma, run :

```sh
$ rspec
```

```sh
$ karma start test/karma.conf
```

To open in localhost/3000, run:

```sh
$ bin/rails s
```

To view the deployed app on Heroku, visit the following link [Sleazy Sounds](https://sleazysounds.herokuapp.com)
