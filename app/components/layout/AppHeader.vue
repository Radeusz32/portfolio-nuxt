<script setup lang="ts">
interface NavigationItem {
  id: string;
  label: string;
  to: string;
}

const navigation: NavigationItem[] = [
  { id: "projects", label: "Projekty", to: "/projects" },
  { id: "about", label: "O mnie", to: "/about" },
  { id: "stack", label: "Stack", to: "/stack" },
];
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-lg font-semibold tracking-tight text-white">
        Rad.<span class="text-blue-500">Stack</span>
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden md:flex items-center gap-8 text-sm">
        <NuxtLink
          v-for="item in navigation"
          :key="item.id"
          :to="item.to"
          class="text-white/70 hover:text-white transition"
          active-class="text-white"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- CTA -->
      <NuxtLink
        to="/contact"
        class="px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
      >
        Kontakt
      </NuxtLink>
    </div>
  </header>
</template>
