expect.extend({
  toMatchHtmlSnapshot(received, argument) {
    try {
      expect(received.render()).toMatchSnapshot(argument);
    } catch (e) {
      return {
        message: () => e.message,
        pass: false,
      };
    }

    return {
      message: () => 'expected not to match snapshot',
      pass: true,
    };
  },
});
