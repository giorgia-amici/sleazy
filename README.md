# Sleazy Sounds

Sleazy Sounds is a music website that lets users search for and play tracks, and subscribers save their favourite tunes to playlists. The playlists are then saved to the subscribers' private dashboard and displayed on the home page.

The project was set as a challenge for the 4-day 'Makerthon' at Makers Academy, and our team consisted of four music-loving ladies.

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
- Playlist length is restricted to include the subscribers' top 10 tracks.
- Subscribers upload an image of their choice to represent their playlist.

To view tests, run:

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

To view the app deployed on Heroku, visit https://sleazysounds.herokuapp.com
