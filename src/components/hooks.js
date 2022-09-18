import { useLocation } from "react-router-dom";


// A custom hook that builds on useLocation to parse
// the query string for you (me).
// See: https://reactrouter.com/web/example/query-parameters
export function useQuery() {
    return new URLSearchParams(useLocation().search)
}
