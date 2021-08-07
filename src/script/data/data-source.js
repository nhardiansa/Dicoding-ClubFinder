import clubs from "./clubs.js";

//========== Class Function with Promise ==========

class DataSource {
    static async searchClub(keyword) {
      try {
        const result = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
        const JSONresult = await result.json()
        if (JSONresult.teams) {
          return JSONresult.teams
        } else {
          return `${keyword} is not found`
        }
      } catch (err){
        return err
      }
      // fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
      //   .then(res => {
      //     return res.json()
      //   })
      //   .then(res => {
      //     console.log(res.teams)
      //     if (res.teams) {
      //       return res.teams
      //     } else {
      //       return Promise.reject(`${keyword} is not found`)
      //     }
      //   })
    }
}

export default DataSource;