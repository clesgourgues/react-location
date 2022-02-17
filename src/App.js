import React from "react";

import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Box,
  Image,
  Notes,
  CodePane,
} from "spectacle";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const logo =
  "https://raw.githubusercontent.com/tannerlinsley/react-location/main/media/repo-dark.png";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    primary: "#001e34",
    secondary: "#fff",
  },
};

const template = () => (
  <FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1}>
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const CustomSlide = (props) => (
  <Slide
    backgroundColor="primary"
    {...props}
    transition={{
      from: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
      },
      leave: {
        opacity: 0,
      },
    }}
  />
);

const App = () => (
  <Deck theme={theme} template={template}>
    <CustomSlide>
      <FlexBox>
        <Image src={logo} width={800} />
      </FlexBox>
      <Heading margin="0px" fontSize="100px">
        Enterprise Client-Side Routing for React
      </Heading>
      <Notes>Tanner Linsley Tan Stack Nozzle tracking tool</Notes>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          ☑️ React Router features
        </Heading>
        <UnorderedList>
          <Appear priority={0}>
            <ListItem color="secondary">Nested Layout</ListItem>
          </Appear>
          <Appear priority={1}>
            <ListItem color="secondary">JSX Routes (via a plugin)</ListItem>
          </Appear>
          <Appear priority={2}>
            <ListItem color="secondary">Path Params</ListItem>
          </Appear>
          <Appear priority={3}>
            <ListItem color="secondary">Code splitting</ListItem>
          </Appear>
          <Appear priority={4}>
            <ListItem color="secondary">Ranked Routes (via a plugin)</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        Construites ttes les deux autour de la lib "history" React Location a été conçu comme un
        enhancer de React Router, pour parer à ses limites et convertir en API tout le boilerplate
        nottament autour des search params
      </Notes>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          ⏳ Async Routing : what is it ?
        </Heading>
        <UnorderedList>
          <Appear priority={0}>
            <ListItem color="secondary">
              Routes can define data dependencies and the elements they render as asynchronous
              functions : Route Loaders
            </ListItem>
          </Appear>
          <Appear priority={1}>
            <ListItem color="secondary">
              Those elements will be guaranteed to resolve before rendering the next location.
            </ListItem>
          </Appear>
          <Appear priority={2}>
            <ListItem color="secondary">Nothing like this in React Router API</ListItem>
          </Appear>
          <Appear priority={3}>
            <ListItem color="secondary">Ember.js uses this pattern for routing</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ol>
          <li>
            loader : fonction async qui renvoit un objet et que l'on donne à la route (fetch, axios,
            React query)
          </li>
          <li>appelés soit qd une route match navigation ou soit preload </li>
        </ol>
      </Notes>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          ⏳ Async Routing : what is it ?
        </Heading>
        <Box marginTop="20px">
          <CodePane language="javascript">
            {`
export type RouteLoaders<TGenerics> = {
   element?: SyncOrAsyncElement<TGenerics>
   errorElement?: SyncOrAsyncElement<TGenerics>
   pendingElement?: SyncOrAsyncElement<TGenerics>
   loader?: LoaderFn<TGenerics>
   loaderMaxAge?: number
   onMatch?: (
     match: RouteMatch<TGenerics>
   ) => void | undefined | ((match: RouteMatch<TGenerics>) => void)
   onTransition?: (match: RouteMatch<TGenerics>) => void
   meta?: UseGeneric<TGenerics, 'RouteMeta'>
 }
      `}
          </CodePane>
        </Box>
      </FlexBox>
      <Notes>
        <ol>
          <li>
            loader : fonction async qui renvoit un objet et que l'on donne à la route (fetch, axios,
            Rec query)
          </li>
          <li>appelés soit qd une route match navigation ou soit preload </li>
        </ol>
      </Notes>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          ⏳ Async Routing : a better UX
        </Heading>
        <Appear priority={0}>
          <FlexBox width="500px" flexDirection="column" margin="50px">
            <Loader type="TailSpin" color="#00BFFF" height={300} width={300} />
            <FlexBox width="500px" margin="50px">
              <Box marginRight="200px">
                <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
              </Box>
              <Loader type="Bars" color="#00BFFF" height={50} width={50} />
            </FlexBox>
          </FlexBox>
        </Appear>
      </FlexBox>
      <Notes>
        on se bat tjrs avec les loaders
        <ol>
          <li>un seul ? plusieurs ?</li>
          <li>Très souvent deceptif</li>
          <li>jamais complètement maitrisé</li>
          <li>C'est pas la fin du laoder c'est le début de l'ère du loader maitrisé</li>
        </ol>
      </Notes>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          ⏳ Async Routing : a better DX
        </Heading>
        <UnorderedList>
          <Appear priority={0}>
            <ListItem color="secondary">
              🔀 Parallelized : loaders for matched routes are parallelized
            </ListItem>
          </Appear>
          <Appear priority={1}>
            <ListItem color="secondary">
              ⏲️ Prefetching : get rid of spinners (and all the boilerplate)
            </ListItem>
          </Appear>
          <Appear priority={2}>
            <ListItem color="secondary">
              🗄 Caching : everything cached, only changing UI triggers data fetching
            </ListItem>
          </Appear>
          <Appear priority={3}>
            <ListItem color="secondary">⚠️ Pending States</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ol>
          <li>
            parallelized: qd une route est matched, ts ses loaders sont executés en même temps :
            bien pour la perf / UI . Possible de specifier ds le Route loader des données parents
          </li>
          <li>
            prefetching: le composant Link accepte une preload prop / mise à dispo d'un hook
            useLoadRoute
          </li>
          <li>
            caching : Par défaut les Route Loaders sont mis en cache, maxAge or integration with
            react query
          </li>
          <li>
            pending states : sorte de homemade suspense (accepte un pendingElement), pending
            timeout(à partir de quand l'afficher), pending element timeout(minimum de temps
            d'affichage, pour eviter le "flash") Combien de temps on est prêts à attendre sur la
            route actuelle ?
          </li>
        </ol>
      </Notes>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          ⏳ Async Routing : <pre style={{ display: "inline" }}>useMatch</pre> hook
        </Heading>
        <Box marginTop="20px">
          <CodePane language="jsx">
            {`
 const routes = [
   {
     path: 'teams',
     element: <Teams />,
     loader: async () => ({
       teams: await fetch('/api/teams'),
     }),
   },
 ]
 
 function Teams() {
   const {
     data: { teams },
   } = useMatch()
 }

      `}
          </CodePane>
        </Box>
      </FlexBox>
      <Notes>
        <ol>
          <li>pending : is it the pending path</li>
        </ol>
      </Notes>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          🔎 1st-class Integrated Search Params API : a better UX
        </Heading>
        <UnorderedList>
          <Appear priority={0}>
            <ListItem color="secondary">Bookmark and share with the same state !</ListItem>
          </Appear>
          <Appear priority={1}>
            <ListItem color="secondary">Even with UI specific states</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          🔎 1st-class Integrated Search Params API : also a a better DX
        </Heading>
        <UnorderedList>
          <Appear priority={0}>
            <ListItem color="secondary">State in the params</ListItem>
          </Appear>
          <Appear priority={1}>
            <ListItem color="secondary">No more url manipulation</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          🔎 1st-class Integrated Search Params API :{" "}
          <pre style={{ display: "inline" }}>useSearch</pre> hook
        </Heading>
        <UnorderedList>
          <Appear priority={0}>
            <ListItem color="secondary">Access to the search params</ListItem>
          </Appear>
          <Appear priority={1}>
            <ListItem color="secondary">Immutable JSON Object</ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ol>
          <li>Immutable : peut etre utilisé ds useEffect, useCallback dependances</li>
          <li>On peut directement modifier le search param State pour naviguer</li>
        </ol>
      </Notes>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          🔎 1st-class Integrated Search Params API : the Link Component
        </Heading>
        <Box marginTop="20px">
          <CodePane language="jsx">
            {`
      <Link
        to="."
        preload={true}
        search={{
        someParams: true,
        otherParams: 'gogogo',
        object: { nested: { list: [1, 2, 3], hello: 'world' } },
        }}
        >
         I will navigate to the current location +
         ${`?someParams=true&otherParams=gogogo&object=~(nested~(list~(~1~2~3)~hello~%27world))`}
      </Link>
      `}
          </CodePane>
        </Box>
      </FlexBox>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          🎁 Bonus
        </Heading>
        <UnorderedList>
          <Appear priority={0}>
            <ListItem color="secondary">Error Boundary native support</ListItem>
          </Appear>
          <Appear priority={1}>
            <ListItem color="secondary">Bread Crumbs (through meta key)</ListItem>
          </Appear>
          <Appear priority={2}>
            <ListItem color="secondary">Lots of config keys (caseSensitive, defaults...)</ListItem>
          </Appear>
          <Appear priority={3}>
            <ListItem color="secondary">Memory Routing (tests), hash routing</ListItem>
          </Appear>
          <Appear priority={4}>
            <ListItem color="secondary">Devtools (plugin)</ListItem>
          </Appear>
          <Appear priority={5}>
            <ListItem color="secondary">
              React Location JSURL (plugin - JUSRL stringify/parser)
            </ListItem>
          </Appear>
          <Appear priority={6}>
            <ListItem color="secondary">
              Not that much a bonus, but SSR/Hydration is coming !
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
    </CustomSlide>
    <CustomSlide>
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="60px">
          Sandbox
        </Heading>
        <iframe
          src="https://codesandbox.io/embed/github/tannerlinsley/react-location/tree/main/examples/kitchen-sink?fontsize=14&theme=dark"
          style={{
            width: "100%",
            height: "550px",
            border: "0",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title="tannerlinsley/react-location: kitchen-sink"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </FlexBox>
    </CustomSlide>
  </Deck>
);

export default App;
