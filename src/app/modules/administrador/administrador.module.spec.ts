import { AdministradorModule } from './administrador.module';

describe('Prueba1Module', () => {
  let prueba1Module: AdministradorModule;

  beforeEach(() => {
    prueba1Module = new AdministradorModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
