class Controller{
  constructor(){
    this.repository;
  }

  async find(ctx, next){
    const id = ctx.params.id;

    try{
      ctx.body = await this.repository.find({id});
    } catch(err){ throw 'failed to find' }
  }
}

module.exports = Controller;