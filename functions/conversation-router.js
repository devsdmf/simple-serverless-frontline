const AGENT_IDENTIFICATION = process.env.SINGLE_AGENT_IDENTIFICATION;

exports.handler = function(context, event, callback) {
  const conversationSid = event.ConversationSid;

  const client = context.getTwilioClient();
  return client.conversations
    .conversations(conversationSid)
    .participants
    .create({ identity: AGENT_IDENTIFICATION })
    .then(p => {
      console.log(`Created agent participant: ${p.sid}`);
      return callback(null, {});
    })
    .catch(err => {
      console.error(e);
      return callback('An error occurred at trying to add agent to the conversation');
    });
};
