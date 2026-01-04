<script setup lang="ts">
const year = new Date().getFullYear();

interface FooterLink {
  id: string;
  label: string;
  href: string;
}

const links: FooterLink[] = [
  { id: "projects", label: "Projekty", href: "#projekty" },
  { id: "contact", label: "Kontakt", href: "#kontakt" },
  { id: "github", label: "GitHub", href: "https://github.com/" },
];
</script>

<template>
  <footer class="border-t border-white/10 bg-black">
    <div class="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
      <!-- About -->
      <div>
        <h3 class="text-lg font-semibold text-white">Frontend Developer</h3>
        <p class="mt-4 text-sm text-white/60 leading-relaxed">
          Specjalizuję się w Vue, Nuxt i Laravel. Tworzę skalowalne aplikacje z
          naciskiem na architekturę i UX.
        </p>
      </div>

      <!-- Links -->
      <div>
        <h4 class="text-sm font-semibold text-white tracking-wide uppercase">
          Nawigacja
        </h4>
        <ul class="mt-4 space-y-2 text-sm">
          <li v-for="link in links" :key="link.id">
            <a
              :href="link.href"
              class="text-white/60 hover:text-white transition"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-sm font-semibold text-white tracking-wide uppercase">
          Kontakt
        </h4>

        <ul class="mt-4 space-y-2 text-sm text-white/60">
          <li>📧 kontakt@email.pl</li>
          <li>🌍 Polska</li>
        </ul>
      </div>
    </div>

    <div
      class="border-t border-white/10 py-6 text-center text-xs text-white/40"
    >
      © {{ year }} Jan Dev. Wszystkie prawa zastrzeżone.
    </div>
  </footer>
</template>
