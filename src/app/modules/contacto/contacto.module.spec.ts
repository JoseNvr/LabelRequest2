import { ContactoModule } from './contacto.module';

describe('Prueba1Module', () => {
  let prueba1Module: ContactoModule;

  beforeEach(() => {
    prueba1Module = new ContactoModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
