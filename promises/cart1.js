function firstTask(callback) {
    setTimeout(function () {
      console.log("First task done.")
      callback()
    }, 1000)
  }
  
  function secondTask(callback) {
    setTimeout(function () {
      console.log("Second task done.")
      callback()
    }, 1000)
  }
  
  function thirdTask(callback) {
    setTimeout(function () {
      console.log("Third task done.")
      callback()
    }, 1000)
  }
  
  firstTask(function () {
    thirdTask(function () {
      secondTask(function () {
        console.log("All tasks are completed.")
      })
    })
  })
  