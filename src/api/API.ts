import SampleRepo from "./repositories/SampleRepo";

export default class API {
    sample: SampleRepo;

    constructor() {
      this.sample = new SampleRepo();
    }
}
