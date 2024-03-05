## Docsearch

This is a very simple implementation of a search bot that uses slack and github api to search for appearances of a given keyword in a given repository.

The functionality is tested with keyword "docsearch" and this current repository.

Upon due testing and approval, the code will be made more generic and will be made to work with any repository.

### How to use

- Go to the slack channel where the bot is installed
- Type `@docsearch <keyword>` to search for the keyword in the current repository
- The bot will respond with the number of appearances of the keyword in the repository and the links to the files where the keyword appears.
