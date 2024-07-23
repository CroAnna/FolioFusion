export const constants = {
  paymentLinks: {
    oneYearPass:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_28ocQP3bRfIN1GM8ww"
        : "https://buy.stripe.com/test_28ocQP3bRfIN1GM8ww", // TODO change with real live mode stripe url
    lifetimePass:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_6oE9ED27Naot716cMN"
        : "https://buy.stripe.com/test_6oE9ED27Naot716cMN", // TODO change with real live mode stripe url
  },
};
