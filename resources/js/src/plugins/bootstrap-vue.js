import Vue from "vue";

import {
    // Basic
    LayoutPlugin,
    ModalPlugin,
    CardPlugin,
    TablePlugin,
    NavbarPlugin,
    // Form
    DropdownPlugin,
    FormInputPlugin,
    FormRadioPlugin,
    FormCheckboxPlugin,
    FormSelectPlugin,
    ButtonPlugin,
    // Components
    // Form
    BForm
} from "bootstrap-vue";

Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(CardPlugin);
Vue.use(TablePlugin);
Vue.use(NavbarPlugin);

Vue.use(DropdownPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormRadioPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(FormSelectPlugin);
Vue.use(ButtonPlugin);

Vue.component(BForm);
