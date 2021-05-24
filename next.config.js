module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],
  },
  future: {
    webpack5: true,
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
