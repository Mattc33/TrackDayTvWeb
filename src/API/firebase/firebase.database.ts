import { _firebase_init } from './firebase.index'

interface dataObj {
   [key: string]: any
}

export const doPullCollection = (collection: string) => 
   _firebase_init._db.collection(collection).get()
   
export const doAddCollection = (collection: string, doc: string, data: dataObj) =>
   _firebase_init._db.collection(collection).doc(doc).set(data)

export const doUpdateCollection = (collection: string, doc: string, data: dataObj) =>
   _firebase_init._db.collection(collection).doc(doc).set(data)