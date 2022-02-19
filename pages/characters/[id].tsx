import { GetCharacterResults } from '../../types';

function CharacterPage() {
  return <div>Character page</div>
}

export async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    paths: results.map((character) => {
      return { params: { id: String(character.id) } }
    })
  }
}

export default CharacterPage;