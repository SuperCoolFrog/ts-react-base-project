import SampleModel from "../models/SampleModel";

export default class SampleRepo {
  static create(sample: SampleModel): Promise<SampleModel> {
    return Promise.resolve(sample);
  }

  static update(sample: SampleModel): Promise<SampleModel> {
    return Promise.resolve(sample);
  }

  static get(/* sampleId: number */): Promise<SampleModel> {
    return Promise.resolve(new SampleModel());
  }

  static getAll(): Promise<SampleModel[]> {
    return Promise.resolve([new SampleModel()]);
  }

  static delete(/* sampleId: number */): Promise<SampleModel> {
    return Promise.resolve(new SampleModel());
  }
}
