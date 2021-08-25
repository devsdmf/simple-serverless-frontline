const Events = {
  ON_CONVERSATION_ADD: 'onConversationAdd',
  ON_PARTICIPANT_ADDED: 'onParticipantAdded'
};

exports.handler = function(context, event, callback) {
  const res = new Twilio.Response();
  res.appendHeader('Content-Type', 'application/json');

  if (event.EventType === Events.ON_CONVERSATION_ADD) {
    const customerNumber = event['MessagingBinding.Address'];
    const isIncomingConversation = !!customerNumber;

    if (isIncomingConversation) {
      const conversationProperties = {
        friendly_name: customerNumber
      };

      return callback(null, conversationProperties);
    }
  }

  res.setStatusCode(200);
  return callback(null, res);
};
