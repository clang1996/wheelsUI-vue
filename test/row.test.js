import {describe} from 'mocha';
import Vue from 'vue'
import Row from '../src/row'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
        it('存在', () => {
            expect(Row).to.exist
        })
    }
)