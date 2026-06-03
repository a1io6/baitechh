import { permanentRedirect } from 'next/navigation'

const COURSES_URL = 'https://taplink.cc/baitech?tpclid=facebook.PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnILup1RKuSP5ZFg4J9_uDJMhbnFAoZJS9TmYEHmO6t6iwYQgoqt8Hj8tE0EU_aem_9Eaut1fpqyiGzcPDld2ZdQ'

function page() {
  permanentRedirect(COURSES_URL)
}

export default page
