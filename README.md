# swagger-lint

[![Join the chat at https://gitter.im/shellhead/swagger-lint](https://badges.gitter.im/shellhead/swagger-lint.svg)](https://gitter.im/shellhead/swagger-lint?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/shellhead/swagger-lint.svg?branch=master)](https://travis-ci.org/shellhead/swagger-lint)

A fully pluggable tool for identifying and reporting on patterns in your
[Swagger][swagger] documents.

# Installation
``` sh
npm install swagger-lint -g
```

# Usage
Run `slint` against a swagger file, does YAML too!
``` sh
slint path/to/swagger.json
Found 0 error(s)
Found 0 warning(s)
```

Will validate remote swagger files as well!
``` sh
slint http://petstore.swagger.io/v2/swagger.json
Found 0 error(s)
Found 0 warning(s)
```

Familiar command-line interface formatting and options, thanks to
[commander][commander]!
``` sh
slint -h

  Usage: slint [options] <file>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

[swagger]: http://swagger.io/
[commander]: https://github.com/tj/commander.js
