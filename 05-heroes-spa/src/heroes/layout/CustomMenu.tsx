import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { Pages, PagesRouter } from "@/router/AppRouters";



export const CustomMenu = () => {

  const {pathname} = useLocation();

  const isActive  = (path : string) => pathname === path;


  // console.log(pathname);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {

        Array.from({length: Pages.length}).map( (_, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild className={cn( isActive(`/${PagesRouter[index]}`) && 'bg-slate-300 rounded-2xl-md', 'p-2')}>
                  <Link to={`/${PagesRouter[index]}`}> {Pages[index]} </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
        ))
        }
      </NavigationMenuList>
    </NavigationMenu>
  )

}