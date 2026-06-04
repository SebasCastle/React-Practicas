import { CustomJumbotron } from "@/components/Custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
    <CustomJumbotron title="What are you looking" description="find out you heroe"/>
        {/* Stats Dashboard */}
      <HeroStats/>
      {/* filter search */}
      <SearchControls/>
    </>
  )

}
  export default SearchPage;
