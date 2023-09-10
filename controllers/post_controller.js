/* algo:
1) take input with req.body
2) check for empty inputs
3) create a Word document to save in db , and the save
*/




import {Word} from "../models/word_model.js"

export const makePost = async (req, res) => {
    try {
      const { word, definition, synonyms, antonyms } = await req.body; //destructuring : elems of req.body go sequentially in word , meaning , s ,a
  
      if (!word || !definition || !synonyms || !antonyms) //i want user to enter all fields
        return res
          .status(400)
          .json({ error: "Please fill all fields according to schema" });
  
      const word_to_save = new Word({  //creating a new Word document in which I stored all the values
        word: word,
        definition: definition,
        synonyms: synonyms,
        antonyms: antonyms,
      })
      await word_to_save.save(); //.save() to save in dictionary database

    res.json(word_to_save); //send saved word as a JSON response
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Error" });
  }
}