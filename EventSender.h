// EventSender.h

#import "RCTBridgeModule.h"

@interface EventSender : NSObject<RCTBridgeModule>
- (void)doSomeSending:NSTimer;
- (void)startSending;
@end
