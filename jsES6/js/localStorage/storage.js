class LocalStorage {
  constructor(config) {
    let { storage_time } = config;
    this.storage_time = storage_time; // setting cleaning time
  }

  // download DB to LocalStorage
  getDBLocalStorage(data) {
    localStorage.setItem("db", JSON.stringify(data));
  }

  // clear DB to LocalStorage
  clearingLocalStorage() {
    setTimeout(() => {
      localStorage.removeItem("db");
    }, this.storage_time);
  }

  // Load DB to LocalStorage
  setDBLocalStorage() {
    let data = JSON.parse(localStorage.getItem("db"));
    return data;
  }
}
