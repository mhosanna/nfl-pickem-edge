import { KeystoneContext } from "@keystone-next/types";
import { footballTeams } from "./data";

export async function insertSeedData(context: KeystoneContext) {

  console.log(`🌱 Inserting Seed Data: ${footballTeams.length} Football Teams`);

  for (const team of footballTeams) {
    console.log(` 🏈 Adding Team: ${team.name}`);
    await context.sudo().lists.Team.createOne({
      data: {
        name: team.name,
        city: team.city,
        abbreviation: team.abr,
        conference: team.conf,
        division: team.div,
      },
    });
  }
  console.log(`✅ Seed Data Inserted: ${footballTeams.length} Teams`);
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``
  );
  process.exit();
}
