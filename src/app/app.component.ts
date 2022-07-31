import { Component, OnInit, Injectable, Inject, isDevMode } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {
  SwPush,
  SwUpdate,
  UnrecoverableStateEvent,
  VersionEvent,
  VersionReadyEvent,
} from '@angular/service-worker';
import { PUBLIC_VAPID_KEY_OF_SERVER } from './app.constants';
import { NotificationService } from './notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  notificationData: string = '{}';
  title = 'demo1';

  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  isLoading: boolean;

  constructor(@Inject(DOCUMENT) private _doc: Document, private router: Router, private updateService: SwUpdate,
    private pushService: SwPush, private notificationService: NotificationService) {

    // Spinner for lazyload modules
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });
  }



  getWindow(): Window | null {
    return this._doc.defaultView;
  }
  ngOnInit() {
    this.getWindow()
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.getWindow().scrollTo(0, 0);
    });


    console.log('AppComponent.ngOnInit');
    if (!this.updateService.isEnabled) {
      console.log('AppComponent.ngOnInit: Service Worker is not enabled');
      return;
    }
    console.log('AppComponent.ngOnInit: Service Worker is enabled');
    this.#handleUpdates();
    // this.#handleNotifications();
  }


  #handleUpdates() {
    this.updateService.versionUpdates.subscribe((event: VersionEvent) => {
      console.log(event);
      alert(event.type);
      if (
        event.type === 'VERSION_READY' &&
        confirm(
          `New version ${(event as VersionReadyEvent).latestVersion.hash
          } available. Load New Version?`
        )
      ) {
        this.getWindow().location.reload();
      }
    });
    // const interval = setInterval(async () => {
    //   const shouldUpdate = await this.updateService.checkForUpdate();
    //   alert('Checked for update with result: ' + shouldUpdate);
    //   if (shouldUpdate) {
    //     const result = await this.updateService.activateUpdate();
    //     alert('Activate Update completed with result: ' + result);
    //     clearInterval(interval);
    //   }
    // }, 1000);

    this.updateService.unrecoverable.subscribe(
      (event: UnrecoverableStateEvent) => {
        alert('Error reason : ' + event.reason);
      }
    );
  }

  // async #handleNotifications() {
  //   try {
  //     const sub = await this.pushService.requestSubscription({
  //       serverPublicKey: PUBLIC_VAPID_KEY_OF_SERVER,
  //     });
  //     this.notificationService.addSubscription(sub);
  //     console.log('Subscribed');
  //   } catch (err) {
  //     console.error('Could not subscribe due to:', err);
  //   }
  //   this.pushService.messages.subscribe((message) => {
  //     console.log(message);
  //   });
  //   this.pushService.notificationClicks.subscribe((message) => {
  //     console.log(message);
  //   });
  //   this.pushService.subscription.subscribe((subscription) => {
  //     console.log(subscription);
  //   });
  // }


}

