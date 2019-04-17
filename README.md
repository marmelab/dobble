<table>
        <tr>
            <td><img width="120" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/rocket.svg" alt="onboarding" /></td>
            <td><strong>Archived Repository</strong><br />
            The code of this repository was written during a <a href="https://marmelab.com/blog/2018/09/05/agile-integration.html">Marmelab agile integration</a>. It illustrates the efforts of a new hiree, who had to implement a board game in several languages and platforms as part of his initial learning. Some of these efforts end up in failure, but failure is part of our learning process, so the code remains publicly visible.<br />
        <strong>This code is not intended to be used in production, and is not maintained.</strong>
        </td>
        </tr>
</table>

# Dobble

Dobble is an experiment to implementing mathematics behind the
[board game](http://www.asmodee.com/ressources/jeux_versions/dobble.php) of the same name.

## Installation

```make install```

## Tests

```make test```

*You'll notice that tests for 5, 7 and 9 symbols per card do not pass.
Feel free to contribute.*

In order to see the generated cards in the console, run:
```
DEBUG=deckGeneratorTest make test
```

## Resources (french)
- [Les mathématiques du Dobble](http://www.bibmath.net/forums/viewtopic.php?id=5134)
- [Générer un jeu de dobble](http://www.quirysse.com/informatique/generer-un-jeu-de-dobble/)
- [Dobble et la géométrie finie](http://images.math.cnrs.fr/spip.php?page=forum&id_article=927&id_forum=4233)
- [Dobble et modéle mathématique](http://www.trictrac.net/forum/viewtopic.php?p=1197354)
- [Dobble et théorie mathématique](https://www.scribd.com/fullscreen/32602239?access_key=key-290ldts3eb15fhdyt1mf)


## License

Dobble is open-source, sponsored by [marmelab](marmelab.com). You can use it freely under the terms of the [MIT License](LICENSE).
