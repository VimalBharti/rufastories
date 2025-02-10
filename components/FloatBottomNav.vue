<template>
    <nav class="fixed bottom-5 left-2 right-2 z-20">
      <div class="max-w-md w-full mx-auto bg-white/50 shadow-inner border backdrop-blur rounded-full p-1 flex justify-between items-center">
        <NuxtLink to="/" class="bg-white rounded-full border border-white p-1">
          <img src="/logo.png" alt="rufa-logo" class="w-12 rounded-full" />
        </NuxtLink>
        <div class="flex items-center gap-3 text-sm">
          <NuxtLink to="/" class="flex items-center gap-1 bg-gray-100/50 rounded-full px-3 py-2 text-zinc-800 group">
            <Icon name="hugeicons:package" class="h-5 w-5 group-hover:bg-gradient-to-r from-pink-500 to-emerald-500" />
            <span>Products</span>
          </NuxtLink>
          <NuxtLink to="/contact" class="flex items-center gap-1 bg-gray-100/50 rounded-full px-3 py-2 text-zinc-800 group">
            <Icon name="bx:category" class="h-5 w-5 group-hover:bg-gradient-to-r from-pink-500 to-emerald-500" />
            <span>Categories</span>
          </NuxtLink>
          <NuxtLink to="/contact" class="flex items-center gap-1 bg-gray-100/50 rounded-full px-3 py-2 text-zinc-800 group">
            <Icon name="ic:outline-mail" class="h-5 w-5 group-hover:bg-gradient-to-r from-pink-500 to-emerald-500" />
            <span>Contact</span>
          </NuxtLink>
          <!-- <NuxtLink to="/" class="flex items-center justify-center bg-white/50 border rounded-full h-12 w-12 text-zinc-700 hover:text-yellow-600">
            <Icon name="solar:podcast-bold" class="h-5 w-5" />
          </NuxtLink> -->
        </div>
      </div>
    </nav>
</template>