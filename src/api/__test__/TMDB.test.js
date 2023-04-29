import { getData } from "../TMDB";

test('get results from TMDB', async()=> {
    const data = await getData('/movie/popular')
    expect(data.length).toBe(Array)
})