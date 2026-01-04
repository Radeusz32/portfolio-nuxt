<script setup lang="ts">
interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { id: "projects", label: "Projekty", href: "#projekty" },
  { id: "about", label: "O mnie", href: "#o-mnie" },
  { id: "stack", label: "Stack", href: "#stack" },
];
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo / Name -->
      <span class="text-lg font-semibold tracking-tight text-white">
        Jan<span class="text-blue-500">Dev</span>
      </span>

      <!-- Navigation -->
      <nav class="hidden md:flex items-center gap-8 text-sm">
        <a
          v-for="item in navigation"
          :key="item.id"
          :href="item.href"
          class="text-white/70 hover:text-white transition"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- CTA -->
      <a
        href="#kontakt"
        class="px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
      >
        Kontakt
      </a>
    </div>
  </header>
</template>
