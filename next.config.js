module.exports = {
    async redirects() {
      return [
        {
          source: '/zoom',
          destination: '/meet',
          permanent: true,
        },
      ]
    },
  }