import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Search = () => {
  return (
    <div>
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 px-4 py-8">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Explore lots of memorable places</h2>
          <p className="py-4">
          Embark on a journey unlike any other, where every page turns into an adventure and every chapter leads you to new horizons. Welcome to our sanctuary of stories, where the world is your oyster and imagination knows no bounds.
          Step into the world of literature, where tickets aren't just for trains or planes, but for transcending time and space through the magic of words. Here, within the pages of a book, you'll find your passport to limitless destinations, from the bustling streets of ancient cities to the serene landscapes of distant galaxies.
          Whether you crave the thrill of a gripping mystery, the romance of a timeless love story, or the wisdom of ancient philosophies, our curated collection has something for every wanderlust soul. Explore far-off lands, encounter fascinating characters, and unravel the mysteries of the human experience, all from the comfort of your own imagination.
          </p>
        </div>
        <div class="grid sm:grid-cols-2 gap-8 py-4">
    <div class="flex flex-col lg:flex-row items-center gap-2">
        <button>
            <RiCustomerService2Fill size={50} />
        </button>
        <div class="text-center lg:text-left">
            <h3 class="py-auto">SERVICE</h3>
            <p class="py-1">BLEEDING EDGE COMPANY</p>
            <p>FOR 10 YEARS IN-A-ROW</p>
        </div>
    </div>
    <div class="flex flex-col lg:flex-row items-center gap-2">
        <button>
            <MdOutlineTravelExplore size={50} />
        </button>
        <div class="text-center lg:text-left">
            <h3 class="py-auto">SERVICE</h3>
            <p class="py-1">BLEEDING EDGE COMPANY</p>
            <p>FOR 10 YEARS IN-A-ROW</p>
        </div>
    </div>
</div>

      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">GET ADDITIONAL 25% OFF</p>
          <p className="py-2">2 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW</p>
        </div>
        <form className="border p-1">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Maldives</option>
              <option>Paris</option>
              <option>Kyoto</option>
              <option>London</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <button className="w-full my-4">Check Availability</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Search;
