import { ref, watch } from 'vue'

// Shared state across all components
const isDark = ref(false)
let initialized = false

// Initialize on first use
function initializeDarkMode() {
    if (initialized) return
    initialized = true

    // Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
        isDark.value = savedMode === 'true'
    } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    updateDarkMode()

    // Watch for changes
    watch(isDark, () => {
        updateDarkMode()
    })
}

function updateDarkMode() {
    if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkMode', 'false')
    }
}

export function useDarkMode() {
    // Initialize on first call
    if (typeof window !== 'undefined') {
        initializeDarkMode()
    }

    function toggleDarkMode() {
        isDark.value = !isDark.value
    }

    return {
        isDark,
        toggleDarkMode
    }
}
