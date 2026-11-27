import NotePageTemplate from "../../components/site/NotePageTemplate";

export default function PicklSwingNote() {
  return (
    <NotePageTemplate
      slug="pickl-swing-loop"
      title="How the Pickl+ swing-to-game loop was scoped"
      description="The smallest MegaShot Pickl+ loop that had to work: a physical swing, a stroke reading, and feedback the player can feel."
      meta="2026-11-06 · MegaShot Pickl+"
      caseStudyHref="/case-studies/megashot-pickl"
      caseStudyLabel="Full Pickl+ case study"
    >
      <p>
        Pickl+ is a motion-sensing pickleball paddle and a companion game. The product question was not “how much software can we add.” It was whether a swing in a living room could become a game event without a court, a headset, or a console.
      </p>
      <p>
        The loop I treated as the product was short. Sensors in the paddle read the swing. Bluetooth carries stroke type, swing velocity, and angle into the phone. The game uses that reading. The handle can answer with haptic feedback on a hit. If that loop feels late or wrong, extra modes do not matter.
      </p>
      <p>
        Scoping it this way kept hardware, firmware, and the mobile game on the same milestone: a player can swing, see the result, and feel it. Campaign creative, multiplayer, and other racket sports sat outside that loop. They are launch or later-expansion work, not the first proof.
      </p>
      <p>
        Companion-app screenshots are not on this site yet. The product site and the Kickstarter page are the public references for how the game looks. Player-count and iteration-count figures stay in the case study, and only with the wording already qualified there.
      </p>
    </NotePageTemplate>
  );
}
