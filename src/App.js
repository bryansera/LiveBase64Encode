ViewModel.share({
  counter: {
    count: 0,
    increment() {
      const nextValue = this.count() + 1;
      this.count(nextValue);
    },
    restart() {
      this.count.reset();
    }
  }
})

App({
  render() {
    <div>
      <Count />
      <Reset />
    </div>
  }
});

Count({
  share: { counter: 'counter' },
  render() {
    <div b="text: counter.count"/>;
  }
});

Reset({
  share: { counter: 'counter' },
  render() {
    <div>
      <button b="click: counter.increment">Increment</button>
      <button b="click: counter.restart">Restart</button>
    </div>
  }
});