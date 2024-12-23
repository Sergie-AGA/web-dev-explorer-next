import { IGHProject } from "@/app/(projects)/reusable-backend/page";
import ActionableListItem from "@/components/Lists/ActionableListItem";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import "./github-list.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ShadcnUi/Accordion";

interface IGithubListInterface {
  backendRepos: IGHProject[];
}

export default function GitHubList({ backendRepos }: IGithubListInterface) {
  return (
    <main className="flex flex-col">
      <ul className="flex flex-col gap-6 items-center mb-4">
        {backendRepos.map((repo, index) => {
          if (repo.render) {
            return (
              <ActionableListItem
                title={repo.title}
                description={repo.description}
                label={repo.status}
                labelType={repo.status == "development" ? "blue" : "green"}
                link={repo.link}
                icon={repo.icon}
                buttonText="GitHub"
                buttonIcon={IconBrandGithubFilled}
                isButtonDisabled={repo.status == "development"}
              />
            );
          }
        })}
      </ul>
      <div className="flex flex-col gap-6 items-start mb-4 w-[800px] max-w-full m-auto github-list-details">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="setup">
            <AccordionTrigger>Set up</AccordionTrigger>
            <AccordionContent>
              <p>
                This project uses Node JS, TypeScript, Fastify JS, Prisma JS and
                PostgreSQL for its core functionality. Unit tests are done with
                Vitest and E2E with Supertest. Zod handles data validation and
                documentation is handled by Swagger JS
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="routes">
            <AccordionTrigger>Routes</AccordionTrigger>
            <AccordionContent>
              <p>There are functional routes for:</p>
              <ol className="list-inside">
                <li>Registering a new account;</li>
                <li>Confirming a new account;</li>
                <li>Logging in;</li>
                <li>Changing Password;</li>
                <li>
                  Creating a token (used for confirming an account or resetting
                  passwords);
                </li>
                <li>Using a refresh token;</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="flow">
            <AccordionTrigger>Data Flow</AccordionTrigger>
            <AccordionContent>
              <p>
                This project uses a variation of Domain-Driven Design (DDD) with
                SOLID principles to handle requests:
              </p>
              <ol className="list-inside">
                <li>
                  The fastify server receives a request and uses a router file
                  to call the respective controller
                </li>
                <li>
                  The controller validates the data and attempts to call a use
                  case
                </li>
                <li>
                  A use case handles all the logic required for the call. If
                  successful, it calls a specific CRUD function from the
                  repository file. If it fails, it throws an error
                </li>
                <li>
                  The repository uses the data to interact with the database and
                  sends a response
                </li>
                <li>
                  The controller sends a response to the user if the operation
                  was successful, otherwise it catches an error and returns an
                  error message
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="others">
            <AccordionTrigger>Others</AccordionTrigger>
            <AccordionContent>
              <p>A few additional elements exist in this project:</p>
              <ul className="list-disc list-inside">
                <li>A docker file is used to handle the database locally</li>
                <li>
                  The concept of entities from DDD is used as a support element
                  in some functions
                </li>
                <li>
                  Presenter files are used to convert results into a
                  user-friendly version
                </li>
                <li>Day JS is used to handle time calculations</li>
                <li>BCrypt is used to hash passwords</li>
                <li>
                  There is an incomplete e-mail handler module which was not
                  made functional
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
