const fetchedUserData = {
  id: '85548',
  name: 'Fernando',
  job: {
    title: 'Frontend Developer',
    description: 'I do stuff with CSS',
  },
}

// The old way:
//console.log(fetchedUserData.job && fetchedUserData.job.title)

// The new way
console.log(fetchedUserData?.job?.title)
