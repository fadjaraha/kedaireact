import "./App.css";

function App() {
  return (
    /* TOP HEADER */
    <div className="bg-white container mx-auto">
      <div className="flex justify-between py-4 border-b border-gray-300">
        <div className="flex gap-5">
          <a href="http://google.com" className="text-emerald-500">
            Chat With Us
          </a>
          <a href="http://facebook.com">+62 123 4567</a>
          <a href="http://google.com">cs@kedaiku.com</a>
        </div>

        <div className="">
          <ul className="flex gap-8 text-emerald-500">
            <li>Blog</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    /* 2nd HEADER */
      <div className="flex justify-between mt-16">
        <h1 className="text-3xl font-bold">Kedaiku</h1>
        <div className="flex w-full justify-center items-center">
          <input
            type="text"
            placeholder="Search Product, Categories"
            className="w-1/3 border border-gray-300 bg-gray-200 rounded-xl pl-4 py-2"
          />
          <img src="/images/search-icon.png" alt="search" className="w-5 h-5 -ml-8"/>
        </div>
        <div className="flex gap-10">
          <img src="/images/user-icon.png" alt="user" className="w-8 h-6"/>
          <div className="relative">
            <img src="/images/cart-icon.png" alt="icon" className="w-8 h-6"/>
            <label className="absolute bottom-2 -left-2 bg-orange-600 text-white py-0.25 px-1 rounded-full text-sm">4</label>
          </div>
        </div>
      </div>
      /* 3th HEADER */

      <div className="bg-gray-100 mt-10 py-5 pl-5 text-xl font-sm ">
        <ul className="flex gap-8">
          <li>Bakery <img src="/images/vector.png" className="flex justify-start" /></li> 
          <li>Fruit & Vegetable <img src="/images/vector.png"  /></li>
          <li>Meat & Fish</li>
          <li>Drink</li>
          <li>Kithcen</li>
          <li>Special Nutrition</li>
          <li>Baby</li>
          <li>Pharmacy</li>
        </ul>
        </div>
/* KATEGORI */
<div className="flex pt-16">
        <div className="mr-28">
          <div className="Categories">
            <div className="font-bold pb-4">
              <h2>Categories</h2>
            </div>
            <div className="flex justify-between gap-24 text-sm pb-3">
              <p>Bolu</p>
              <p className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">
                320
              </p>
            </div>
            <div className="flex justify-between gap-24 text-sm pb-3">
              <p>Mie</p>
              <p className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">
                112
              </p>
            </div>
            <div className="flex justify-between gap-24 text-sm pb-3">
              <p>Pizza</p>
              <p className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">
                32
              </p>
            </div>
            <div className="flex justify-between gap-24 text-sm">
              <p>Dessert</p>
              <p className="bg-slate-100 text-lime-600 font-bold rounded-xl px-2">
                48
              </p>
            </div>
          </div>

          <div className="OrderBy mt-12">
            <div className="font-bold pb-4">
              <h2>Order By</h2>
            </div>
            <div className="text-sm pb-2">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="Termurah"
                name="Termurah"
              />
              <label for="Termurah">Termurah</label>
            </div>
            <div className="text-sm pb-2">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="Terlaris"
                name="Terlaris"
              />
              <label for="Terlaris">Terlaris</label>
            </div>
            <div className="text-sm">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="Termahal"
                name="Termahal"
              />
              <label for="Termahal">Termahal</label>
            </div>
          </div>

          <div className="Rating mt-12">
            <div className="font-bold pb-4">
              <h2>Rating</h2>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangLima"
              />
              <div className="flex">
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
              </div>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangEmpat"
              />
              <div className="flex">
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star.png" alt="star" />
              </div>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangTiga"
              />
              <div className="flex">
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star.png" alt="star" />
                <img src="/images/ic-star.png" alt="starYellow" />
              </div>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangDua"
              />
              <div className="flex">
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star.png" alt="star" />
                <img src="/images/ic-star.png" alt="starYellow" />
                <img src="/images/ic-star.png" alt="starYellow" />
              </div>
            </div>
            <div className="text-sm pb-2 flex">
              <input
                className="mr-2 accent-green-600"
                type="checkbox"
                value="bintangSatu"
              />
              <div className="flex">
                <img src="/images/ic-star-yellow.png" alt="starYellow" />
                <img src="/images/ic-star.png" alt="star" />
                <img src="/images/ic-star.png" alt="star" />
                <img src="/images/ic-star.png" alt="star" />
                <img src="/images/ic-star.png" alt="star" />
              </div>
            </div>
          </div>

          <div className="Price mt-12">
            <div className="font-bold pb-4">
              <h2>Price</h2>
            </div>
            <div className="text-sm pb-2 accent-green-600">
              <input type="range" />
            </div>
          </div>

          <div className="minmaxText mt-3 flex justify-between">
            <h3 className="font-bold text-sm w-20">Min</h3>
            <h3 className="font-bold text-sm w-20">Max</h3>
          </div>
          <div className="minMax inline-flex">
            <input
              type="text"
              className="bg-white-100 w-20 border-2 border-gray-300 rounded-lg p-2 text-sm text-gray-400 focus:outline-green-600"
            />
            <p className="text-gray-300 mx-4">-</p>
            <input
              type="text"
              className="bg-white-100 w-20 border-2 border-gray-300 rounded-lg p-2 text-sm text-gray-400 focus:outline-green-600"
            />
          </div>

          <div className="btn mt-7 flex gap-2">
            <button className="bg-green-600 border-2 border-green-700 rounded-lg py-3 px-5 text-white font-bold hover:bg-green-500">
              Apply
            </button>
            <button className="text-slate-400 py-3 px-5 font-bold hover:text-red-500">
              Reset
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap gap-10">
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/images/cakecoklat.png" alt="FoodItem" className="" />
              <h3 className="font-semibold mt-2">Bolu Susun</h3>
              <p className="text-slate-600 text-xs">
                Disusun dengan penuh kenangan
              </p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">36.000</h3>
                  <p className="text-sm text-gray-300 font-bold">
                    <strike>40.000</strike>
                  </p>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/images/mie.png" alt="FoodItem" className="" />
              <h3 className="font-semibold mt-2">Mie Aceh</h3>
              <p className="text-slate-600 text-xs">
                Rasanya menusuk jiwa dan raga
              </p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">26.000</h3>
                  <p className="text-sm text-gray-300 font-bold">
                    <strike>30.000</strike>
                  </p>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/images/cakestrow.png" alt="FoodItem" className="" />
              <h3 className="font-semibold mt-2">Bolu Lapis</h3>
              <p className="text-slate-600 text-xs">
                Lapisan legit di setiap sentuhan
              </p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">42.000</h3>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/images/donat.png" alt="FoodItem" className="" />
              <h3 className="font-semibold mt-2">Donat</h3>
              <p className="text-slate-600 text-xs">Rasa donat</p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">15.000</h3>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/images/pizza.png" alt="FoodItem" className="" />
              <h3 className="font-semibold mt-2">Pizza Huut</h3>
              <p className="text-slate-600 text-xs">Potongan penuh nikmat</p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">30.000</h3>
                  <p className="text-sm text-gray-300 font-bold">
                    <strike>40.000</strike>
                  </p>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-4">
              <img src="/images/matasapi.png" alt="FoodItem" className="" />
              <h3 className="font-semibold mt-2">Mata Sapi</h3>
              <p className="text-slate-600 text-xs">Penuh mata mata</p>
              <div className="flex justify-between mt-1">
                <div className="">
                  <h3 className="font-bold">12.000</h3>
                </div>
                <div className="self-center">
                  <button className="bg-green-600 border-2 border-green-700 rounded-lg py-1 px-3 font-bold text-white hover:bg-green-500">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <button className="px-4 py-3 text-white font-bold bg-green-600 border-2 border-green-700 rounded-lg hover:bg-green-500">
              Show more products <i class="fa fa-angle-down"></i>
            </button>
          </div>
        </div>
      </div>
/* FOOTER */
      <div className="mt-32 flex justify-between">
        <div className="py-16">
          <h2 className="font-bold">Get in touch</h2>
          <div className="mt-4 text-lime-500 text-sm">
            <p className="pb-4">About Us</p>
            <p className="pb-4">Careers</p>
            <p className="pb-4">Press Releases</p>
            <p className="pb-4">Blog</p>
          </div>
        </div>
        <div className="py-16">
          <h2 className="font-bold">Connections</h2>
          <div className="mt-4 text-lime-500 text-sm">
            <p className="pb-4">Facebook</p>
            <p className="pb-4">Twitter</p>
            <p className="pb-4">Instagram</p>
            <p className="pb-4">Youtube</p>
            <p className="pb-4">Linkedin</p>
          </div>
        </div>
        <div className="py-16">
          <h2 className="font-bold">Earnings</h2>
          <div className="mt-4 text-lime-500 text-sm">
            <p className="pb-4">Become an Affiliate</p>
            <p className="pb-4">Advertise your product</p>
            <p className="pb-4">Sell on Market</p>
          </div>
        </div>
        <div className="py-16">
          <h2 className="font-bold">Account</h2>
          <div className="mt-4 text-lime-500 text-sm">
            <p className="pb-4">Your account</p>
            <p className="pb-4">Returns Centre</p>
            <p className="pb-4">100 % purchase protection</p>
            <p className="pb-4">Chat with us</p>
            <p className="pb-4">Help</p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <p className="text-sm">Copyright © 2022 Leumangshop</p>
      </div>
    </div>
  );
}

export default App;
