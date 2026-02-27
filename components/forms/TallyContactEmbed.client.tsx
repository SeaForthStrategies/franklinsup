"use client";

const TALLY_EMBED_URL =
  "https://tally.so/embed/QKAYel?transparentBackground=1&formEventsForwarding=1";

export function TallyContactEmbed() {
  return (
    <iframe
      src={TALLY_EMBED_URL}
      width="100%"
      height="100%"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Contact Mayor John Franklin"
      className="absolute inset-0 h-full w-full"
    />
  );
}
