import { reactive } from "vue";
export const store= reactive({
    animeList:[
        {
            id:1,
            path:'/anime/assets/rice-ball.webp',
            category:['Food'],
            title:'Hygenic receipe to prepare rice',
            date:'December 26, 2022',
            user:'demo',
            time:'05:37'
        },
        {   
            id:2,
            path:'https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/meal-time.webp',
            category:['Food'],
            title:'The best time to have a meal',
            date:'December 26, 2022',
            user:'demo',
            time:'05:35'
        },
        {   
            id:3,
            path:'/anime/assets/healthy-foods.webp',
            category:['Food'],
            title:'The best healthy foods',
            date:'December 26, 2022',
            user:'demo',
            time:'05:32'
        },
        {   
            id:4,
            path:'/anime/assets/winter.webp',
            category:['Fashion'],
            title:'The best winter outfits',
            date:'December 26, 2022',
            user:'demo',
            featured:true,
            time:'05:29'
        },
        {   
            id:5,
            path:'/anime/assets/photographers-mistakes.webp',
            category:['Fashion'],
            title:'Beginner photographer’s mistakes',
            date:'December 26, 2022',
            user:'demo',
            featured:true
        },
        {   
            id:6,
            path:'/anime/ideas-anime.webp',
            category:['Culture','Stories'],
            title:'Live Ideas you might be anime',
            date:'December 26, 2022',
            user:'demo',
            featured:true
        },
        {   
            id:7,
            path:'/anime/assets/visit-france.webp',
            category:['Lifestyle','Travel'],
            title:'Reasons to visit france',
            date:'December 26, 2022',
            user:'demo',
            featured:true
        },
        {   
            id:8,
            path:'/anime/assets/travel-alone.webp',
            category:['Stories','Travel'],
            title:'Traveling alone is awesome',
            date:'December 26, 2022',
            user:'demo',
            featured:true
        },
        {   
            id:9,
            path:'/anime/assets/success-story.webp',
            category:['Culture','Stories'],
            title:'The best success stories',
            date:'December 26, 2022',
            user:'demo',
            featured:true
        },
        {   
            id:10,
            path:'/anime/assets/best-places.webp',
            category:['Lifestyle','Stories','Travel'],
            title:'Places for a road trip',
            date:'December 25, 2022',
            user:'demo',
            featured:true
        },
        {   
            id:11,
            path:'/anime/music-love.webp',
            category:['Culture','Lifestyle'],
            title:'Music the Love of my life',
            date:'December 25, 2022',
            user:'demo',
            featured:true
        },
        {   
            id:12,
            path:'/anime/assets/anime-fashion.webp',
            category:['Fashion','Lifestyle'],
            title:'Fashion trend now a days',
            date:'December 25, 2022',
            user:'demo',
            featured:true
        },

    ]

    
})