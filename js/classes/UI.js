import Data from './Data.js';

class UI extends Data {
  constructor(mainEl, personContainerEl, wealthEl, totalEl) {
    super();

    this.mainEl = mainEl;
    this.personContainerEl = personContainerEl;
    this.wealthEl = wealthEl;
    this.totalEl = totalEl;
  }

  async display(howMany = 1) {
    const users = await this.fetchData(howMany);

    this.renderDisplay(users.newUsers, false);
  }

  renderDisplay(users, bool = false) {
    this.personContainerEl.innerHTML = '';

    users.forEach((user) => {
      this.personContainerEl.innerHTML += `
					<div class="person">
						<img width="40" height="40"
							src="${user.pic}"
							alt="">
						<strong>${user.name}</strong>
						<strong class="milli ${user.mill && bool ? 'show' : ''}">⭐</strong>
						<span>$${this.moneyFormate(user.money)}</span>
					</div>
			`;
    });
  }

  moneyDouble() {
    const users = super.moneyDouble();

    this.renderDisplay(users);
  }

  showMillinaires() {
    const users = this.isMillionaires().users;
    this.renderDisplay(users, true);
  }

  showSort() {
    const users = this.sortUsers();
    this.renderDisplay(users);
  }

  showWealth() {
    const total = this.getBalance();
    const formatMoney = this.moneyFormate(total);

    this.wealthEl.classList.add('show');
    this.totalEl.textContent = `$${formatMoney}`;

    setTimeout(() => {
      this.wealthEl.classList.remove('show');
      this.totalEl.textContent = ``;
    }, 2000);
  }

  showReset() {
    const users = this.resetData();

    this.renderDisplay(users);
  }
}

export default UI;
