<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div class="relative z-10 max-w-4xl px-6 text-center">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight">
        Cześć, jestem
        <span class="text-blue-500">Frontend Developerem</span>
      </h1>

      <p class="mt-6 text-lg md:text-xl text-white/70">
        Buduję interaktywne aplikacje w Nuxt, Vue i Laravelze. Skupiam się na
        architekturze, animacjach i czystym kodzie.
      </p>

      <div class="mt-10 flex items-center justify-center gap-4">
        <button
          class="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
        >
          Projekty
        </button>

        <button
          class="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
        >
          Kontakt
        </button>
      </div>
    </div>

    <!-- background / overlay placeholder -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"
    />
  </section>
</template>
