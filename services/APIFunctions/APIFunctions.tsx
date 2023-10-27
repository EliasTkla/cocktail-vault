export const getCocktailData = async () => {
    const url = 'https://the-cocktail-db3.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY ?? "",
            'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result);

        if (data.message) {
            console.log(data.message);
            return data;
        } else {
            return data as Cocktail[];
        }
    } catch (error) {
        console.error(error);
        return;
    }
}

export const getCocktailDetails = async (id: string) => {
    var data = [];

    const url = 'https://the-cocktail-db3.p.rapidapi.com/' + id;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY ?? "",
            'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();

        data = JSON.parse(result);
    } catch (error) {
        console.error(error);
    }

    return data;
}