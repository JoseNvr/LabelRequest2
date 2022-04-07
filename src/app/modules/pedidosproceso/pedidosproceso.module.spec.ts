import { PedidosProcesoModule } from './pedidosproceso.module';

describe('Prueba1Module', () => {
  let prueba1Module: PedidosProcesoModule;

  beforeEach(() => {
    prueba1Module = new PedidosProcesoModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
