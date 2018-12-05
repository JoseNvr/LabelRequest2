import { Prueba1Module } from './prueba1.module';

describe('Prueba1Module', () => {
  let prueba1Module: Prueba1Module;

  beforeEach(() => {
    prueba1Module = new Prueba1Module();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
