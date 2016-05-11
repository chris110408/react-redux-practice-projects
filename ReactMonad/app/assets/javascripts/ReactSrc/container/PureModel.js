/**
 * Created by leichen on 5/9/16.
 */
import { compose,replace,prop,map} from 'ramda';
import { curry } from 'lodash';
import Task from 'data.task'
import {getJSON} from 'jquery'

const concat = curry((x, y) => x.concat(y));

//mconcat:[a] -> a
const mconcat = function(xs, empty) {
    return xs.length ? xs.reduce(concat) : empty();
};

const Url = String;

const baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f0d4cf3f345bc72274b1dedada006a82&tags={TAGS}&extras=url_s&format=json&jsoncallback=?'



const Http = {
    //get :: Url-> Task Error JSON
    get: (url) => new Task((rej,res) => getJSON(url).error(rej).done(res))
}

//Trace :: x -> show x
const Trace = (x) => console.log(x);

//makeUrl :: String -> Url
const makeUrl = (t) => replace("{TAGS}", t, baseUrl);

const extractUrls=compose(map(prop('url_s')),prop('photo'),prop('photos'))

//flickrSearch :: String -> Task Error JSON
const flikrSearch = compose(map(extractUrls),Http.get, makeUrl);

export { flikrSearch };