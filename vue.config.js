// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
<<<<<<< HEAD
  publicPath: process.env.NODE_ENV === 'production'
    ? 'PlayStation-Trivia-App'  // Set your desired production public path
    : '/',
  transpileDependencies: true,
})
=======
  publicPath: './', // Use relative paths for assets
  transpileDependencies: true
})


// const { defineConfig } = require('@vue/cli-service')

// module.exports = defineConfig({
//   publicPath: process.env.NODE_ENV === 'production'
//     ? 'PlayStation-Trivia-App'  // Set your desired production public path
//     : '/',
//   transpileDependencies: true,
// })
>>>>>>> Github-Pages
