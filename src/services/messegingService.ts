import { IMessage } from "../models/chat/message";

const getTimeWithDelayInMins = (mins: number): number => {
  return Date.now() + 1000 * 1000 * 60 * mins;
};

const Channels: { [channel: string]: IMessage[] } = {
  "channel-1": [
    {
      sender: {
        name: "Zakaria Talhami",
      },
      body: "Hello",
      timestamp: getTimeWithDelayInMins(0),
    },
    {
      sender: {
        name: "Jack",
      },
      body: "Hello back",
      timestamp: getTimeWithDelayInMins(1),
    },
    {
      sender: {
        name: "Jack",
      },
      body: "sup?",
      timestamp: getTimeWithDelayInMins(2),
    },
    {
      sender: {
        name: "Zakaria Talhami",
      },
      body: "Nothing much",
      timestamp: getTimeWithDelayInMins(3),
    },
  ],
};

export function getChannels(): string[] {
  return Object.keys(Channels);
}

export function getChannelMessages(channel: string): IMessage[] {
    return Channels[channel] || [];
}
