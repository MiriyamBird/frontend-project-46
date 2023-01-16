### Hexlet tests and linter status:
[![Actions Status](https://github.com/MiriyamBird/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/MiriyamBird/frontend-project-46/actions)
![CI](https://github.com/MiriyamBird/frontend-project-46/workflows/tests/badge.svg)
![Lint](https://github.com/MiriyamBird/frontend-project-46/workflows/lint/badge.svg)
<a href="https://codeclimate.com/github/MiriyamBird/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/98954d421bb40d00bf42/maintainability" /></a>
<a href="https://codeclimate.com/github/MiriyamBird/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/98954d421bb40d00bf42/test_coverage" /></a>

## Description
Gendiff is a CLI application that generates the difference between two files (json or yaml) and output the result in selected format (stylish, plain or json).

## Install
    $ git clone git@github.com:MiriyamBird/frontend-project-46.git
    $ cd frontend-project-46
    $ make install
    
## Use
### Stylish
    $ gendiff <filepath1> <filepath2>
<a href="https://asciinema.org/a/wN6MZeVp56y8WoJ26jGgyhMiO" target="_blank"><img src="https://asciinema.org/a/wN6MZeVp56y8WoJ26jGgyhMiO.svg" /></a>

### Plain
    $ gendiff -f plain <filepath1> <filepath2>
<a href="https://asciinema.org/a/sAklpb2xqOP7iYWzHDshY5B9j" target="_blank"><img src="https://asciinema.org/a/sAklpb2xqOP7iYWzHDshY5B9j.svg" /></a>

### JSON
    $ gendiff -f json <filepath1> <filepath2>
<a href="https://asciinema.org/a/DLAxoODxQaDDpHoVIjO4t6Hsx" target="_blank"><img src="https://asciinema.org/a/DLAxoODxQaDDpHoVIjO4t6Hsx.svg" /></a>
