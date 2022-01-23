Very simple Node.js based GitHub profile scraper

To get started, ```install Node 14+ and NPM```, and execute ```node index.js```

This scraper's goal is to locate an organization's name, website url, office location, and the list of all its' repositories.

Currently, the scraper only works on orgs, and to change the org you must change the addiction to the getBody method in the requests handler.
As it stands, it's currently scraping for Meta's profile ```(url: baseUrl + 'facebook')```


I plan on integrating this with some webpage and allowing for user-inputed organization name, in a future update.
