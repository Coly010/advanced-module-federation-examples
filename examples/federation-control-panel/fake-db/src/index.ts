import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync } from 'node:fs';
import {join} from 'node:path';

const pathToManifestFile = join(__dirname, "../assets/manifest.json");

function getManifestJson() {
  const rawManifestJson = readFileSync(pathToManifestFile, "utf8");
  return JSON.parse(rawManifestJson);
}

function writeManifestJson(json: any) {
  writeFileSync(pathToManifestFile, JSON.stringify(json, null, 2));
}
// rewrite the file to a base
const manifestJson = getManifestJson();
manifestJson.control_panel_remote = "http://localhost:4201";
writeManifestJson(manifestJson);


const app = express();
app.use(cors());
app.get("/rollback", (req, res) => {
  const manifestJson = getManifestJson();
  manifestJson.control_panel_remote = "http://localhost:4202";
  writeManifestJson(manifestJson);
  res.json({message: "Rollback complete"})
})

app.get("/manifest", (req, res) => {
  const manifestJson = getManifestJson();
  res.json({data: manifestJson});
})

app.listen(3000, () => {
  console.log("Node Server Listening...")
});
