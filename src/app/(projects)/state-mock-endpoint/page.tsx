import LocalModal from "@/components/Modals/LocalModal/LocalModal";
import UserFlowContainer from "@/features/state-mock-endpoint/components/UserFlow/UserFlowContainer";

export default function StateMockEndpoint() {
  return (
    <main>
      <LocalModal startOpen={true}>
        <UserFlowContainer />
      </LocalModal>
    </main>
  );
}
