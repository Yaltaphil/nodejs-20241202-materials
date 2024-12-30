import { Cron, CronExpression } from '@nestjs/schedule';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Analytics {
  constructor() {
    // this.queue.on('gather_analytics')
    console.log('Analytics initialized');
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  gatherAnalytics() {
    // ...
    console.log('gathering complete, total # of events:', 101231);
  }
}
