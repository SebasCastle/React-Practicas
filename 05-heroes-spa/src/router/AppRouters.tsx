import { AdminLayout } from "@/admin/Layout/AdminLayout"
import { AdminPage } from "@/admin/pages/AdminPage"
import { HeroesLayout } from "@/heroes/layout/HeroesLayout"
import { HeroPage } from "@/heroes/pages/hero/HeroPage"
import HomePage from "@/heroes/pages/home/HomePage"
// import { SearchPage } from "@/heroes/pages/search/SearchPage"
import { lazy } from "react"
import { createBrowserRouter } from "react-router"

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'))

export const Pages = ['Inicio', 'buscar', 'Heroes', 'admin'];
export const PagesRouter = ['','search','hero','admin']; 

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element:<HeroesLayout/>,
        children:[
            {
            index:true,
            element:<HomePage/>
            },
            {
                path: 'hero',
                element:<HeroPage/>
            },
            {
                path: 'search',
                element:<SearchPage/>
            },
            
        ]
    },
    {
     path: '/admin',
        element:<AdminLayout/>,
        children:[
        {
            index: true,
            element:<AdminPage/>
        }
        ]
    }
])