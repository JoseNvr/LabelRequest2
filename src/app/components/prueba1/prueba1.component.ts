import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Prueba1Service } from "src/app/modules/prueba1/principal.service";

@Component({
  selector: "app-prueba1",
  templateUrl: "./prueba1.component.html",
  styleUrls: ["./prueba1.component.scss"]
})
export class Prueba1Component implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription>;
  constructor(private prueba1Service: Prueba1Service) {
    this.subscriptions = [];
  }

  ngOnInit() {
    console.log("Hi, Hello World");

    const getTestSub: Subscription = this.prueba1Service
      .getTest({ test: "test_get" })
      .subscribe(
        res => {
          // console.log(res);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log("Get Ok");
        }
      );

    const postTestSub: Subscription = this.prueba1Service
      .postTest({ test: "test_post" })
      .subscribe(
        res => {
          // console.log(res);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log("Post Ok");
        }
      );

    this.subscriptions.push(getTestSub);
    this.subscriptions.push(postTestSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
