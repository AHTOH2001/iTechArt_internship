# Eighth week report

### Tuesday 31.08

- Suddenly vacation has been ended up and token authentication is not waiting, so I spent most of the time on
  implementing JWT in frontend, in particular send requests with csrf and access token and also refresh access token
  when it is needed. But before this I spent about an hour on fixing problem with the git branch that I had made before
  vacation (9 hours)

### Wednesday 01.09

- As well as vacation suddenly ended up, so the studying started. That day I had met my mentor, wrote many reports,
  merged approved pull requests and started working on the authentication functionality card. Hope I will be able to
  spend about 6 hours while studying (4 hours)

### Thursday 02.09

- Almost done authentication functionality card. After logging in I put user non-confidential data into local storage,
  and then from the local storage to the redux store. That day I worked most of the time during studying in university,
  so I guess that is why I done not that much, in that time (8 hours)

### Friday 03.09

- That day I finished what started yesterday, but it turned out that I should not use local storage for storing user
  data, because it would lead to the difference between user state in the local storage and in the backend database.
  Moreover, started to adding redux saga to the project. (4 hours)

### Saturday 04.09

- Added redux saga to the frontend as well as changed class based redux to the functional based, using hooks. And also
  started to modify SmartRequest class in utils.py, to be able to make get requests. (2.5 hours)

### Sunday 05.09

- Rewrote SmartRequest class to be able to make get requests and optimezed refresh requests.
- Also added more logic to redux saga, in particular if been set null user will be called the log out endpoint to remove
  refresh token and also will be compared user in store with the new one, so that if they are match new user will not be
  set into store, to not cause redundant rerendering of components. (3 hours)
