import { URL } from '../Config.js';

export default class Data {
  #users = {
    oldUsers: [],
    newUsers: [],
  };

  async fetchData(howMany) {
    console.log(123);

    console.log(this.#users);

    const res = await fetch(`${URL}${howMany}`);
    const allData = await res.json();

    const results = this.processData(allData);

    if (this.#users.oldUsers.length < 5) {
      this.#users.oldUsers.push(...results);
    }

    this.#users.newUsers.push(...results);

    console.log(this.#users);

    return this.#users;
  }

  processData(allData) {
    return allData.results.map((data) => {
      const setMoney = Math.floor(Math.random() * 1000000);
      return {
        name: `${data.name.first} ${data.name.last}`,
        pic: data.picture.thumbnail,
        money: setMoney,
        mill: this.isMillionaires(setMoney).bool,
      };
    });
  }

  moneyFormate(money) {
    return money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  moneyDouble() {
    this.#users.newUsers = this.#users.newUsers.map((user) => {
      const setMoney = user.money * 2;
      return {
        ...user,
        money: setMoney,
        mill: this.isMillionaires(setMoney).bool,
      };
    });

    return this.#users.newUsers;
  }

  isMillionaires(money = null) {
    return {
      bool: money >= 1000000 ? true : false,
      users: this.#users.newUsers,
    };
  }

  sortUsers() {
    this.#users.newUsers = this.#users.newUsers.sort(
      (a, b) => b.money - a.money
    );

    return this.#users.newUsers;
  }

  getBalance() {
    return this.#users.newUsers.reduce((total, curr) => total + curr.money, 0);
  }

  resetData() {
    this.#users.newUsers = [...this.#users.oldUsers];

    return this.#users.newUsers;
  }
}
