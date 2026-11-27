import NotePageTemplate from "../../components/site/NotePageTemplate";

export default function IsroPlannerNote() {
  return (
    <NotePageTemplate
      slug="isro-path-planner"
      title="What the ISRO path planner actually optimized"
      description="The rover work optimized a simulated route through terrain the model marked as traversable. The formal baseline behind the 87.4% score is not published."
      meta="2026-11-06 · ISRO Space Applications Centre"
      caseStudyHref="/case-studies/mars-rover"
      caseStudyLabel="Mars rover case study"
    >
      <p>
        The internship, February to May 2024, was simulated rover traversal from HiRISE satellite imagery. I annotated 800+ images across five terrain categories and trained PyTorch segmentation so the planner could tell traversable ground from obstacles such as craters and dune ridges.
      </p>
      <p>
        The planner’s job was the route, not the photograph. Segmentation became a cost grid. A* and Dijkstra searched that grid for a path that stays on ground the model treated as safe. The published result is an 87.4% navigation-efficiency score in simulated rover traversal.
      </p>
      <p>
        That sentence is a reported research score. It is not a claim that the route was 87.4% better than a named baseline. The definition of the score, the simulation parameters, and the comparison algorithm are not written up here yet. Until they are, I do not describe the number as an improvement.
      </p>
      <p>
        There was no physical rover in the loop. The score is from simulation on maps derived from the satellite masks. The Colab notebook linked from the case study is the working record of that research.
      </p>
    </NotePageTemplate>
  );
}
