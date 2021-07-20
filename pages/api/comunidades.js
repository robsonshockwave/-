import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = 'cf0d7e3b7a282c75c5af3569a385c8';
        const client = new SiteClient(TOKEN);
    
        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "972322", // ID do Model de "Comunities" criado pelo Dato
            ...request.body,
            /*
            title: "Comunidade de Teste",
            imageUrl: "https://github.com/robsonshockwave.png",
            creatorSlug: "robsonshockwave"
            */
        });
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        });

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}