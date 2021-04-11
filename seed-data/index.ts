import { footballTeams } from "./data";

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.KnexAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${footballTeams.length} Football Teams`);
  const { prisma } = adapter;
  for (const team of footballTeams) {
    console.log(` 🏈 Adding Team: ${team.name}`);
    await prisma.team.create({
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
