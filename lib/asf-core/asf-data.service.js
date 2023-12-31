export class AsfDataService {
  async get(path) {
    return new Promise((rs, rj) => {
      fetch(path).then(response => rs(response.json())).catch(rj);
    });
  }
}
