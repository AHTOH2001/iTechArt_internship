# Ninth week report

### Monday 06.09

- Added profile and logout endpoints to the backend
- And added getting user info and logout functionality to the frontend accordingly to the backend endpoints
- Got rid of local storage for storing user info
- Started working on sign up functionality
- (In total 8 hours)

### Tuesday 07.09

- I have done with implementing sign up functionality in the backend, and finally merged authentication functionality
  pull request. Almost ended up with sign up card in the front end, but I should send requests to the backend through
  redux saga. (5 hours)

### Wednesday 08.09

- Still didn't know what to do with sending requests throught redux saga. But instead of this I almost fully implemented
  person profile modifying functionality. The hardest part was to solve a problem with wrong validation of nested field
  of serializer while updating, but I think I have coped with this problem, the rest is the matter of time. (9 hours)

### Thursday 09.09

- Fortunately problem with saga solved without any effort, because it revealed that redux saga didn't need for the
  requests because of my SmartRequest class that already incapsulates sending requests logic.
- I have finished implementing user profile manipulation, by adding password changing functionality.
- Started working on password recovery functionality.
- (In total 5 hours)

### Friday 10.09

- Done implementing password recovery functionality, but actually only done what were written on the cards, because
  these functionalities does not enough to recover forgotten password. (3 hours)  
  
### Saturday 11.09

- Created two cards for implementing product adding functionality and spent some time on them. I wanted to also allow shop administrator to upload images for products, but this functionality turned out to be too hard to implement.
