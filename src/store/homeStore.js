import { observable, action} from "mobx";
class HomeStore {
  @observable user = '';
    @action setUser(name) {
        this.user = name
    }
}
export default HomeStore;