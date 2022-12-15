import { Content } from './content';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade.');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less than 5 caracters', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('Should not be able to create a notification content with MORE than 240 caracters', () => {
    expect(() => new Content('V'.repeat(241))).toThrow();
  });
});
