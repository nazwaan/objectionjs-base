class Repository{
  constructor(){
    this.model;
    this.transaction;
  }

  async find(data){
    return await this.model
      .query()
      .select('*')
      .where(data);
  }
}

module.exports = Repository;