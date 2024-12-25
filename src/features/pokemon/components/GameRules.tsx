import { Button } from "@/components/ShadcnUi/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ShadcnUi/Card";

interface IGameRules {
  onDismiss: () => void;
}

export default function GameRules({ onDismiss }: IGameRules) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="m-auto text-center">Game Rules</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-4 px-4">
          <li>
            You can go on adventures to capture new Pokémon using Adventure
            Tickets, which can be obtained every 3 hours up to 5 tickets at a
            time.
          </li>
          <li>
            In each adventure you can choose a region to explore among the ones
            you have unlocked. The adventure ends when your team runs out of HP
            or you choose to.
          </li>
          <li>
            During an adventure you will find Pokémon which you can attempt to
            capture or run away. Your catch rate is determined based on the
            opposing Pokémon&apos;s strength, your Pokemon&apos;s Power Level,
            and your Trainer Level.
          </li>
          <li>
            Capturing Pokémon earns experience to your whole team and also
            Trainer Experience. With enough experience a Pokémon can level up
            and become stronger up to level 10.
          </li>
          <li>
            The Pokémon Power Level changes depending on each Pokémon but can be
            increased with each level up. Pokémon do not evolve.
          </li>
          <li>
            Capturing a repeated Pokémon immediately provides a level to that
            Pokémon on top of the experience, so you do not get repeated
            Pokémon. When you max the level of that Pokémon, it cannot be found
            in the wild again.
          </li>
          <li>
            After attempting a capture, your Pokémon loses some HP regardless of
            the success of the capture due to fatigue. Fatigue also happens when
            running away.
          </li>
          <li>
            The Pokédex section lets you see which Pokémon you have seen,
            captured, and mastered.
          </li>
          <li>
            In your trainer card you can see your profile, trainer statistics,
            trainer experience and trainer level. Obtaining Trainer Experience
            and leveling up improves your catch rate.
          </li>
          <li>
            You can manage Pokémon and swap your team with the Pokémon stored in
            the boxes. Pokémon inside a box slowly heal HP.
          </li>
          <li>
            By capturing Pokémon and leveling them up you can earn achievements
            and Achievement Points (AP). With enough achievement points you can
            unlock new regions to explore.
          </li>
        </ol>
      </CardContent>
      <CardDescription className="p-6">
        Gotta Catch &apos;Em All is a practice project designed strictly with
        the purpose of practicing web development concepts. All characters,
        names, and trademarks related to Pokémon are the property of their
        respective owners. This project does not claim any rights to the
        intellectual property of Pokémon and is not intended for commercial use.
        It is solely for educational and entertainment purposes to enhance web
        development skills. All rights belong to The Pokémon Company, Nintendo,
        Game Freak, and any other relevant stakeholders.
      </CardDescription>
      <CardFooter className="flex justify-between">
        <Button onClick={onDismiss} variant="secondary" className="m-auto">
          Close
        </Button>
      </CardFooter>
    </Card>
  );
}
