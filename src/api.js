import axios from 'axios'

async function dog() {
    try {
        const res = await axios.get(`https://randomfox.ca/floof/`)
        if (res.data?.image) {
            return res.data.image
        }
        return null
    } catch (err) {
        return null
    }
}

export { dog }
