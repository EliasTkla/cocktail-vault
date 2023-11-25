import { Session } from "next-auth";

export async function addUser(user: { username: string, email: string, password: string }) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + '/signup';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: user,
        })
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.status == 201) {
            return data.message;
        } else if (response.status == 200) {
            return true;
        }
    } catch (error) {
        // console.error(error);
        return "Something went wrong, please try again in a while!";
    }
}

export const getFavourites = async (session: Session | null) => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + '/user/favourites';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `Bearer ${session?.accessToken}`
        },
        body: JSON.stringify({
            email: session?.user?.email
        }),
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.status == 200) {
            const array = data.favourites.filter((item: any) => {
                return item.cocktail_id;
            }).map((item: any) => {
                return item.cocktail_id;
            });

            return array as string[];
        }

        return "empty";
    } catch (error) {
        // console.error(error);
        return "error";
    }
}

export async function getSavedState(email: string | null | undefined, token: string | undefined, cocktail: string) {
    if (email) {
        const url = process.env.NEXT_PUBLIC_SERVER_URL + "/cocktail/state";
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `Bearer ${token}`
            },
            body: JSON.stringify({
                cocktail: cocktail,
                email: email
            })
        }

        try {
            const response = await fetch(url, options);

            if (response.status == 200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            // console.error(error);
            return false;
        }
    }

    return false;
}

export async function removeCocktial(email: string | null | undefined, token: string | undefined, cocktail: string) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + "/cocktail/remove";
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `Bearer ${token}`
        },
        body: JSON.stringify({
            cocktail: cocktail,
            email: email
        })
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.status == 201) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        // console.error(error);
        return true;
    }
}

export async function addCocktial(email: string | null | undefined, token: string | undefined, cocktail: string) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + "/cocktail/save";
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `Bearer ${token}`
        },
        body: JSON.stringify({
            cocktail: cocktail,
            email: email
        })
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.status == 201) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        // console.error(error);
        return false;
    }
}

export async function getRating(cocktail: string) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + '/cocktail/rating';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cocktail: cocktail,
        })
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.status == 201) {
            return "0";
        } else {
            let list = data.ratings;
            let count = 0;
            let sum = 0;

            const newArray = list.filter((item: any) => {
                return item.rating;
            }).map((item: any) => {
                count++;
                sum += item.rating;
                return item.rating;
            });

            return Math.round(sum / count).toString();
        }
    } catch (error) {
        // console.error(error);
        return "0";
    }
}

export async function updateRating(cocktail: string, email: string | null | undefined, token: string | undefined, rating: string) {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + '/cocktail/rating/update';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `Bearer ${token}`
        },
        body: JSON.stringify({
            cocktail: cocktail,
            email: email,
            rating: rating
        })
    }

    try {
        const response = await fetch(url, options);

        if (response.status == 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        // console.error(error);
        return false;
    }
}