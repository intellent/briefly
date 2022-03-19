# briefly

> “Who would want to print e-mails?”

Well, if you want. And if you want them to look decent. Use this.

https://intellent.github.io/briefly/

You may need to manually adjust the scale in your printer dialog for the whole mail
to fit on a paper format and orientation of your liking.


## Development

This project uses Docker to provide a node container to work with.

To setup:

```bash
docker-compose run --rm yarn install
```

To run:

```bash
docker-compose run --rm -p 80:80 yarn dev
```

To build:

```bash
docker-compose run --rm yarn build
```


## Credits

Default photo by [Max Harlynking](https://unsplash.com/@harlynkingm) on [Unsplash](https://unsplash.com)
