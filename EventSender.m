// EventSender.m

#import "EventSender.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation EventSender

@synthesize bridge = _bridge;

- (void)doSomeSending:(NSTimer *)timer
{
    [self.bridge.eventDispatcher sendDeviceEventWithName:@"MyCustomEvent" body:@{@"name": @"eventName"}];
}

-(void)startSending
{
    [NSTimer scheduledTimerWithTimeInterval:1.0f
                                     target:self selector:@selector(doSomeSending:) userInfo:nil repeats:YES];
}

@end