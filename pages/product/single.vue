<template>
  <section class="bg-white min-h-screen h-full overflow-y-auto">
    <div class="container mx-auto px-4 py-5">
      <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows>
        <img :src="item" class="w-full h-[70vh] object-cover" draggable="false">
      </UCarousel>

      <div class="flex w-full h-full mt-8 gap-12">
        <section class="w-[60%]">
          <h2 class="font-bold text-gray-800 text-3xl">Nike Men Teal Blue Outdoor Shoes</h2>
          <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga explicabo at asperiores velit nesciunt necessitatibus, eligendi atque voluptatibus? Illo recusandae praesentium ipsam aut expedita unde alias inventore laboriosam amet reprehenderit!</p>
          <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga explicabo at asperiores velit nesciunt necessitatibus, eligendi atque voluptatibus? Illo recusandae praesentium ipsam aut expedita unde alias inventore laboriosam amet reprehenderit!</p>

          <!-- shipping -->
          <div class="mt-8 grid grid-cols-2 w-full">
            <div class="w-full flex items-center text-left text-sm font-medium text-gray-600 border p-5">
              <svg class="mr-2 block h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
              </svg>
              Free shipping
            </div>

            <div class="w-full flex items-center text-left text-sm font-medium text-gray-600 border p-5">
              <svg class="mr-2 block h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
              </svg>
              Cancel Anytime
            </div>
          </div>
        </section>


        <section class="w-[40%]">
          <div class="w-full">
            <h3 class="text-gray-700 font-bold border-b pb-2 border-gray-100 uppercase text-sm">Product details</h3>
            <div class="grid grid-cols-2 gap-2 mt-4">
              <div class="w-full">
                <h3 class="text-gray-800 font-bold">Size</h3>
                <div class="flex gap-2">
                  <span class="rounded-full border p-1 w-10 h-10 text-gray-800 flex items-center justify-center">1</span>
                  <span class="rounded-full border p-1 w-10 h-10 text-gray-800 flex items-center justify-center">2</span>
                  <span class="rounded-full border p-1 w-10 h-10 text-gray-800 flex items-center justify-center">3</span>
                </div>
              </div>
              <div>
                <h3 class="text-gray-800 font-bold">Color</h3>
                <div class="flex gap-2">
                  <span class="rounded-full border p-1 w-10 h-10 bg-red-400"></span>
                  <span class="rounded-full border p-1 w-10 h-10 bg-green-400"></span>
                  <span class="rounded-full border p-1 w-10 h-10 bg-yellow-400"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
            <div class="flex items-end text-gray-800">
              <h1 class="text-3xl font-bold">₹499</h1>
            </div>

            <button type="button" class="flex items-center justify-center gap-3 rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              <Icon name="uim:amazon" class="w-6 h-6" />
              Buy on amazon
            </button>
          </div>
          
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
]
</script>

<style>

</style>