async function getImages(page, searchQuery) {
    let key = '41671761-4af622ebc78d28a2c43680850'
    console.log(page, searchQuery)
    let url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    let result = await fetch(url)
     return result.json()
}

export default getImages