import { usePage } from '@inertiajs/react'

export default function Submit() {
    const { csrf } = usePage().props
    return csrf;
}