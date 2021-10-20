import { Component } from '@angular/core';
import { FlurryAnalytics, FlurryAnalyticsObject, FlurryAnalyticsOptions } from '@ionic-native/flurry-analytics/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  flu:FlurryAnalyticsObject;

  constructor(
    private flurryAnalytics: FlurryAnalytics
  ) {}

  ionViewDidEnter(){
    this.initFlurry()
  }

  initFlurry(){
    const options: FlurryAnalyticsOptions = {
      appKey: 'RYZR22WBXS8XND47KHVQ', // REQUIRED
      reportSessionsOnClose: true,
      enableLogging: true
     }
     this.flu = this.flurryAnalytics.create(options);
  }


  logEvt(){
    console.log('asdf');
    debugger
    this.flu.logEvent('testEvt')
       .then(() => console.log('Logged an event!'))
       .catch(e => console.log('Error logging the event', e));
  }

}
