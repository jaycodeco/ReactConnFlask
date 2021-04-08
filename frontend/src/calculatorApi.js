class calculatorApi {
  constructor(svAdd) {
    this.serviceAddress = svAdd;
  }

  makeUrl(n1, n2, op) {
    const rsc = "/" + op + "/" + n1 + "/" + n2;
    return new URL(rsc, this.serviceAddress);
  }

  calculate(n1, n2, op, handler) {
    // fetch(this.makeUrl(n1, n2, op))
    fetch(`${this.serviceAddress}/${op}/${n1}/${n2}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        handler(response.result);
      })
      .catch((err) => {
        handler(err);
        console.log(err);
      });
  }
}

export default calculatorApi;
