import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content less than 5 characters', () => {
    const content = () => new Content('Você');

    expect(content).toThrow();
  });

  it('should not be able to create a notification content more than 240 characters', () => {
    const content = () => new Content('a'.repeat(241));

    expect(content).toThrow();
  });
});
