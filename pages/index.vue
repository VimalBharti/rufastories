<template>
  <div>
    <!-- Hero Area -->
    <div class="header h-[60vh] relative">
      <!-- <nav class="w-full absolute top-0 left-0 z-10 p-3">
        <div class="max-w-5xl mx-auto bg-white/75 shadow-lg backdrop-blur rounded-full p-2 flex justify-between items-center">
          <img src="/images/logo.jpeg" alt="rufa-logo" class="w-12 rounded-full">
          <div class="flex items-center gap-3 px-5 text-sm">
            <NuxtLink to="/">Blog</NuxtLink>
            <NuxtLink to="/">Video</NuxtLink>
          </div>
        </div>
      </nav> -->
      <div class="hero-area h-full relative overflow-hidden">
        <img src="/images/nature.png" alt="nature-background-midjourney" class="h-[60vh] w-full object-cover">
        <img src="/images/shape.png" alt="paper-shape" class="absolute -bottom-[95px] left-0 right-0 h-40 w-full -rotate-1">
        <!-- <h2 class="absolute top-20 text-[10em] font-bold text-center w-full font-kablammo">RUFASTORIES</h2> -->
        <div class="absolute top-6 left-0 w-full h-full flex items-start justify-center">
          <figure class="bg-white/75 backdrop-blur-sm rounded-full overflow-hidden flex items-center justify-center md:w-[250px] md:h-[250px] border shadow-xl">
            <img src="/images/logo.png" alt="rushika-arya" class="md:w-[220px] md:h-[220px] w-[200px] h-[200px] object-contain">
          </figure>
        </div>
      </div>
    </div>  

     <!-- Categories -->
     <section class="pb-10 px-4 md:px-0 -mt-[16vh] relative">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <!-- <div class="space-y-3" v-for="category in categories" :key="category.id">
            <img :src="categoryUrl+category.image" alt="" class="w-full object-cover h-[30vh] rounded-2xl shadow-xl border-2 border-gray-100">
            <div class="w-full rounded-2xl bg-white shadow-inner text-center p-3 border-2 border-gray-100 font-caveat text-xl">{{ category.title }}</div>
          </div> -->
          <div class="space-y-3 group" v-for="category in categories" :key="category.id">
            <figure class="h-[30vh] rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden">
              <img :src="category.thumb" alt="" class="w-full h-full object-cover group-hover:scale-125 transition duration-700 ease-in-out cursor-pointer">
            </figure>
            <div class="w-full rounded-2xl bg-white shadow-inner text-center p-3 border-2 border-gray-100 font-caveat text-xl">{{ category.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ALl Products -->
    <section class="h-full w-full py-10 px-4 md:px-0 shadow">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold font-edu mb-3">Featured Product</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <!-- <template v-for="blog in blogs" :key="blog.id">
            <BlogCard :blog="blog" :blogUrl="blogUrl" />
          </template> -->
          
          <div class="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" v-for="n in 4">
            <NuxtLink class="relative p-2 flex h-60 overflow-hidden rounded group" href="/product/single">
              <img class="object-cover h-60 w-full rounded group-hover:scale-125 transition duration-700 ease-in-out cursor-pointer" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
              <span class="absolute top-2 left-2 m-2 rounded-full bg-black px-2 py-1 text-center text-xs font-medium text-white">39% OFF</span>
            </NuxtLink>
            <div class="mt-4 px-5 pb-5">
              <a href="#">
                <h5 class="text-sm tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
              </a>
              <div class="mt-2 flex items-center justify-between">
                <p>
                  <span class=" font-bold text-slate-900">$449</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Feature Product -->
    <section class="h-full w-full py-12">
      <div class="max-w-7xl mx-auto">
        <FeatureProduct />
      </div>
    </section>

  </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light'
  })
  useHead({
    title: 'RuFa - Welcome to RuFa',
    meta: [
      { name: 'description', content: 'rufa - nature, health culture, history, literature blogs and podcasts' }
    ]
  })

  const supabase = useSupabaseClient();
  const categoryUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/category/')
  const blogUrl = ref('https://zbjihrpawxcszoknrsgi.supabase.co/storage/v1/object/public/blogs/featured/')

  let { data: categories, error } = await supabase
    .from('categories')
    .select('*')

  let { data: blogs } = await supabase
    .from('blogs')
    .select(`
      *,
      categories(
        id, name, thumb
      )
    `)
    .range(0, 3)
    .order('created_at')
            
</script>

<style scoped>

</style>

