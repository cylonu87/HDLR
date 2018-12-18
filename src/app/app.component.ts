import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'hdlr';

  constructor(private db: AngularFirestore){}

  ngOnInit(): void {
    let now = new Date()
    let dd = now.getDate()
    let mm = now.getMonth() + 1
    let yyyy = now.getFullYear()

    let month = yyyy + '-' + (mm < 10 ? '0' : '') + mm
    let day = month + '-' + (dd < 10 ? '0' : '') + dd

    const storageDay = localStorage.getItem("visit")

    if(storageDay === null || storageDay !== day) {
      const ref = this.db.collection("HDLR-counter").doc(month).ref
    
      this.db.firestore.runTransaction(transaction => {
        return transaction.get(ref)
          .then(doc => {
            if(doc.exists) {
              let newCounter = doc.data().counter + 1
              let newVisitor = doc.data().visitor + (storageDay === null ? 1 : 0)
              transaction.update(ref, {counter: newCounter, visitor: newVisitor})
            } else {
              transaction.set(ref, {counter: 1, visitor: (storageDay === null ? 1 : 0)})
            }
          })
      }).then( () => {
        localStorage.setItem('visit', day)
        console.log("Transaction committed")
      }).catch(error => {
        console.log("Transaction failed: ", error)
      })
    }
  }

}
