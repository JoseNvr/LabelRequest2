import { UsuariosModule } from './usuarios.module';

describe('Prueba1Module', () => {
  let prueba1Module: UsuariosModule;

  beforeEach(() => {
    prueba1Module = new UsuariosModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
