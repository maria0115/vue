
import ItemList from '../components/ItemList.vue';


export default function createListView(name){
    return{
        name:name,
        render(createElement){
            return createElement(ItemList);
        }
    }
}