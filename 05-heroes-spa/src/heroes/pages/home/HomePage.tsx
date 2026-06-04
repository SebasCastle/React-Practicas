import {
  Filter,
  Heart,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/Custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "../search/ui/SearchControls"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/Custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/Custom/CustomBreadcrumbs"

export default function HomePage() {

  const {status, setStatus}  = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all');


  return (
    <>
      <>
      {/* {header} */}
      <CustomJumbotron title="SuperHeroes Caracteristics" description="Witch heroe fits you better"/>

      {/* custombreads */}
      <CustomBreadcrumbs/>

        {/* Stats Dashboard */}
        <HeroStats/>

        {/* Controls & filters*/}
        <SearchControls/>        

        {/* Tabs */}
        <Tabs value={status} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => {setStatus('all')}}>
              {/* Characters */}
              <h1>Todos los personajes (16)</h1>
                {/* <HeroGrid/> */}
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => {setStatus('favrorites')}}>
              {/* Favorites Characters */}
              <Heart className="h-4 w-4" />
              <h1>Favoritos (3) </h1>
                {/* <HeroGrid/> */}
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => {setStatus('heroes')}}>
              {/*  Heroes */}
              <h1>Heroes (12)</h1>
            </TabsTrigger>
            <TabsTrigger value="villains" onClick={() => {setStatus('villains')}}>
              <h1>Villanos (2)</h1>
            </TabsTrigger>
          </TabsList>
          <TabsContent value='all'> 
          {/* Characters */}
              <h1>todos los personajes</h1>
                <HeroGrid/>
          </TabsContent>
          <TabsContent value='favorites'>
            {/* Favorites Characters */}
            <h1>Favoritos </h1>
            <HeroGrid/>
          </TabsContent>
          <TabsContent value='heroes'>
            {/*  Heroes */}
            <h1>Heroes </h1>
            <HeroGrid/>
          </TabsContent>
          <TabsContent value='villains'> 
              {/* Villinas */}
              <h1>Villanos</h1>
                <HeroGrid/>
          </TabsContent>

        </Tabs>

        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtrados
            </Badge>
          </div>
        </div>

        {/* Character Grid */}
        {/* <HeroGrid/> */}

        {/* Pagination */}
        <CustomPagination totalPages={8}/>
        {/* <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button variant="default" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div> */}
      </>
    </>
  )
}