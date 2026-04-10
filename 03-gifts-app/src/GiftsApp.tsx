import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/searchBar"
import { PreviousSearches } from "./shared/components/Previous-searches"
import { GiftsList } from "./gifts/components/Gifts-container"
import { useGifts } from "./gifts/Hooks/useGifts"
// import { mockGifs } from "./mock-data/gifts.mock"

export const GiftApp = () => {

 const {handleSearch, GiftsPrevious , handelTermClicked,gifs} = useGifts();


    return (
        <>
        {/* Header */}
        <CustomHeader title="Buscador de gifts" description="Descubre y explora gifts"/>
            {/* {search} */}
            {/* searchBar */}
            <SearchBar onQuery={handleSearch}/>
            {/* {Busquedas previas} */}
            <PreviousSearches 
            searches={GiftsPrevious}
            onLabelClicked={handelTermClicked}
            />

        {/* {Gifts} */}
        <GiftsList gifts = {gifs}/>
        
        </>
    )
}