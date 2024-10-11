interface PersonCreate {
  name: string;
}
class PersonService {
  async create(person: PersonCreate) {
    let s;
    return "Person Created";
  }

  async findAll() {
    return [{ name: "John Doe" }, { name: "Jane Doe" }];
  }
}

export default new PersonService();
