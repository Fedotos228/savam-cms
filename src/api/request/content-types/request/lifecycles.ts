module.exports = {
  async afterCreate(event) {
    const { result, params } = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: 'tudor.onceanu@gmail.com',
        from: 'tudor.onceanu@gmail.com',
        subject: 'Nou item adăugat în Collection Type',
        text: `Salut! Un nou item a fost creat: ${result.title || 'Fără nume'}`,
        html: `<h4>Detalii noi:</h4><p>Itemul cu ID-ul ${result.id} a fost adăugat cu succes.</p>`,
      });
      console.log('Email trimis cu succes!');
    } catch (err) {
      console.log('Eroare la trimiterea emailului:', err);
    }
  },
};