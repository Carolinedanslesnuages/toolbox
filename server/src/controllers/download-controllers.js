import  path from 'path'
import { techLogger } from '../util/logger.js'


export const getDownload = async (req,res) => {
  try {
    const baseURl = path.dirname(new URL(import.meta.url).pathname)
    res.download(path.join( baseURl, "../docs/tutorial.pdf"))
    console.log('message:', 'PDF téléchargé')
    
  } catch (error) {
    techLogger.info(error)
  }
}