import { Link, useLocation } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb"
import { useEffect, useState } from "react";
import {PagesRouter} from '../../router/AppRouters';

interface Breadcumb {
    label: string;
    to: string;
}

interface Props{
    currentPage: string;
    Breadcumbs?: Breadcumb[];
}


export const CustomBreadcrumbs = ({ Breadcumbs = [] }: Props) => {

    const [path, setPath] = useState<Breadcumb[]>([]);
    const {pathname} = useLocation();


  useEffect(()=>{

        const SavePaths = (way: {path: string; name : string})=>{
        setPath((prevPaths) => [
            ...prevPaths,
            { label: way.path, to: pathname } // Agregar objeto correctamente
        ]);
};

  },[pathname])

  return (
    <Breadcrumb className="my-5">
        <BreadcrumbList>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
            <BreadcrumbLink asChild>
            <Link to='/'>inicio</Link> 
            </BreadcrumbLink>
            </BreadcrumbItem>

    { 
        Breadcumbs.map(crumb => (
            <BreadcrumbItem>
            <BreadcrumbLink asChild>
            <Link to={crumb.to}>{crumb.label}</Link> 
            </BreadcrumbLink>
            </BreadcrumbItem>
        ))
    }
        </BreadcrumbList>
    </Breadcrumb>   
  )
}

