export async function getYugiOh() {
    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php", requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const cardDetails = data.data.slice(0,12).map((card: any) => {
            return {
                id: card.id,
                name: card.name,
                type: card.type,
                desc: card.desc,
                atk: card.atk,
                def: card.def,
                level: card.level,
                race: card.race,
                attribute: card.attribute,
                card_images: card.card_images
            };
        });
        return cardDetails;
    } catch (error) {
        console.error('Failed to fetch yu-gi-oh cards:', error);
        return [];
    }
}